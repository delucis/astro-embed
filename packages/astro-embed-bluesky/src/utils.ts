import type {} from '@atcute/atproto';
import {
	type AppBskyFeedDefs,
	type AppBskyEmbedRecord,
	AppBskyEmbedImages,
	AppBskyEmbedExternal,
	AppBskyEmbedVideo,
	AppBskyEmbedRecordWithMedia,
	AppBskyFeedPost,
} from '@atcute/bluesky';
import { segmentize } from '@atcute/bluesky-richtext-segmenter';
import { Client, simpleFetchHandler } from '@atcute/client';
import type { Post } from './types';
import { is } from '@atcute/lexicons';

const escapeMap: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

const escapeHTML = (str?: string) =>
	str?.replace(/[&<>"']/g, (match) => escapeMap[match] || match) ?? '';

export function renderPostAsHtml(post?: AppBskyFeedDefs.PostView | Post) {
	if (!post || !is(AppBskyFeedPost.mainSchema, post.record)) {
		return '';
	}
	const segments = segmentize(post.record.text, post.record.facets);
	let html = '';
	for (const { text, features } of segments) {
		const [feature] = features || [];
		switch (feature?.$type) {
			case 'app.bsky.richtext.facet#link':
				html += `<a href="${escapeHTML(feature.uri)}">${escapeHTML(text)}</a>`;
				break;
			case 'app.bsky.richtext.facet#mention':
				html += `<a href="https://bsky.app/profile/${escapeHTML(feature.did)}">${escapeHTML(text)}</a>`;
				break;
			case 'app.bsky.richtext.facet#tag':
				html += `<a href="https://bsky.app/hashtag/${escapeHTML(feature.tag)}">#${escapeHTML(feature.tag)}</a>`;
				break;
			default:
				html += escapeHTML(text);
				break;
		}
	}
	return html;
}

function viewRecordToPostView(
	viewRecord: AppBskyEmbedRecord.ViewRecord
): AppBskyFeedDefs.PostView {
	const { value, embeds, ...rest } = viewRecord;
	return {
		...rest,
		$type: 'app.bsky.feed.defs#postView',
		record: value,
		embed: embeds?.[0],
	} as AppBskyFeedDefs.PostView;
}

export function viewRecordToEmbed(
	viewRecord: AppBskyEmbedRecord.ViewRecord,
	allowNestedQuotes = false
) {
	const { embed } = viewRecordToPostView(viewRecord);

	if (allowNestedQuotes) {
		return embed;
	} else {
		if (
			is(AppBskyEmbedImages.viewSchema, embed) ||
			is(AppBskyEmbedExternal.viewSchema, embed) ||
			is(AppBskyEmbedVideo.viewSchema, embed)
		) {
			return embed;
		} else if (
			is(AppBskyEmbedRecordWithMedia.viewSchema, embed) &&
			(is(AppBskyEmbedImages.viewSchema, embed.media) ||
				is(AppBskyEmbedExternal.viewSchema, embed.media) ||
				is(AppBskyEmbedVideo.viewSchema, embed.media))
		) {
			return embed.media;
		}
	}
	return undefined;
}

const client = new Client({
	handler: simpleFetchHandler({ service: 'https://public.api.bsky.app' }),
});

export async function resolvePost(
	postUrl: string | Post | AppBskyFeedDefs.PostView
): Promise<Post | undefined> {
	let atUri: `at://${string}.${string}`;

	if (typeof postUrl === 'object') {
		return postUrl as Post;
	}

	if (postUrl.startsWith('at:')) {
		atUri = postUrl as any;
	} else {
		if (!postUrl.startsWith('https://bsky.app/')) {
			return undefined;
		}
		const urlParts = new URL(postUrl).pathname.split('/');
		let did = urlParts[2]! as any;
		const postId = urlParts[4]!;
		if (!did || !postId) {
			return undefined;
		}
		if (!did.startsWith('did:')) {
			try {
				const handleResolution = await client.get(
					'com.atproto.identity.resolveHandle',
					{ params: { handle: did } }
				);
				if (!handleResolution.ok || !handleResolution.data.did) {
					return undefined;
				}
				did = handleResolution.data.did;
			} catch (e: any) {
				console.error(
					`[error]  astro-embed` + '\n         ' + (e?.message ?? e)
				);
				return undefined;
			}
		}

		atUri = `at://${did}/app.bsky.feed.post/${postId}`;
	}

	try {
		const hydratedPost = await client.get('app.bsky.feed.getPosts', {
			params: { uris: [atUri] },
		});
		if (!hydratedPost.ok) {
			throw new Error(hydratedPost.data.message || 'Failed to fetch post');
		}
		return hydratedPost.data.posts[0] as unknown as Post;
	} catch (e: any) {
		console.error(`[error]  astro-embed` + '\n         ' + (e?.message ?? e));
		return undefined;
	}
}

export function atUriToPostUri(atUri: string) {
	const [, , did, , postId] = atUri.split('/');
	return `https://bsky.app/profile/${did}/post/${postId}`;
}

export function atUriToStarterPackUri(atUri: string) {
	const [, , did, , packId] = atUri.split('/');
	return `https://bsky.app/starter-pack/${did}/${packId}`;
}

export function atUriToListUri(atUri: string) {
	const [, , did, , listId] = atUri.split('/');
	return `https://bsky.app/profile/${did}/lists/${listId}`;
}

export function starterPackOgImage(uri: string) {
	const [, , did, , packId] = uri.split('/');
	return `https://ogcard.cdn.bsky.app/start/${did}/${packId}`;
}

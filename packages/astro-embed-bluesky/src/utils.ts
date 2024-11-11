import {
	AppBskyEmbedExternal,
	AppBskyEmbedImages,
	AppBskyEmbedRecord,
	AppBskyEmbedRecordWithMedia,
	AppBskyEmbedVideo,
	AppBskyFeedDefs,
	AtpAgent,
	RichText,
} from '@atproto/api';
import type { Post } from './types';

const escapeMap: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

export const escapeHTML = (str?: string) =>
	str?.replace(/[&<>"']/g, (match) => escapeMap[match] || match) ?? '';

export function renderPostAsHtml(post?: AppBskyFeedDefs.PostView | Post) {
	if (!post) {
		return '';
	}
	const rt = new RichText(post.record as any);
	let html = '';
	for (const segment of rt.segments()) {
		if (segment.isLink()) {
			html += `<a href="${escapeHTML(segment.link?.uri)}">${escapeHTML(
				segment.text
			)}</a>`;
		} else if (segment.isMention()) {
			html += `<a href="https://bsky.app/profile/${escapeHTML(
				segment.mention?.did
			)}">${escapeHTML(segment.text)}</a>`;
		} else if (segment.isTag()) {
			html += `<a href="https://bsky.app/hastag/${escapeHTML(
				segment.tag?.tag
			)}">#${escapeHTML(segment.tag?.tag)}</a>`;
		} else {
			html += escapeHTML(segment.text);
		}
	}
	return html;
}

export function viewRecordToPostView(
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
			AppBskyEmbedImages.isView(embed) ||
			AppBskyEmbedExternal.isView(embed) ||
			AppBskyEmbedVideo.isView(embed)
		) {
			return embed;
		} else if (
			AppBskyEmbedRecordWithMedia.isView(embed) &&
			(AppBskyEmbedImages.isView(embed.media) ||
				AppBskyEmbedExternal.isView(embed.media) ||
				AppBskyEmbedVideo.isView(embed.media))
		) {
			return embed.media;
		}
	}
	return undefined;
}

const agent = new AtpAgent({
	service: 'https://public.api.bsky.app',
});

export async function resolvePost(
	postUrl: string | Post | AppBskyFeedDefs.PostView
): Promise<Post | undefined> {
	let atUri;

	if (typeof postUrl === 'object') {
		return postUrl as Post;
	}

	if (postUrl.startsWith('at:')) {
		atUri = postUrl;
	} else {
		if (!postUrl.startsWith('https://bsky.app/')) {
			return undefined;
		}
		const urlParts = new URL(postUrl).pathname.split('/');
		let did = urlParts[2]!;
		const postId = urlParts[4]!;
		if (!did || !postId) {
			return undefined;
		}
		if (!did.startsWith('did:')) {
			try {
				const handleResolution = await agent.resolveHandle({ handle: did });
				if (!handleResolution.data.did) {
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
		const hydratedPost = await agent.getPosts({ uris: [atUri] });
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

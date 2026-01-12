import { test } from 'uvu';
import * as assert from 'uvu/assert';
import {
	atUriToListUri,
	atUriToPostUri,
	atUriToStarterPackUri,
	renderPostAsHtml,
	resolvePost,
	starterPackOgImage,
	viewRecordToEmbed,
} from '../packages/astro-embed-bluesky/src/utils.ts';

test('atUriToListUri should convert an AT URI to a list URI', () => {
	const listUri = atUriToListUri(
		'at://did:plc:uwbl4k3tza7eyjv3morkrld2/app.bsky.graph.list/3la2snrsnhd2a'
	);
	assert.equal(
		listUri,
		'https://bsky.app/profile/did:plc:uwbl4k3tza7eyjv3morkrld2/lists/3la2snrsnhd2a'
	);
});

test('atUriToPostUri should convert an AT URI to a post URI', () => {
	const postUri = atUriToPostUri(
		'at://did:plc:uwbl4k3tza7eyjv3morkrld2/app.bsky.feed.post/3la2snrsnhd2a'
	);
	assert.equal(
		postUri,
		'https://bsky.app/profile/did:plc:uwbl4k3tza7eyjv3morkrld2/post/3la2snrsnhd2a'
	);
});

test('atUriToStarterPackUri should convert an AT URI to a starter pack URI', () => {
	const starterPackUri = atUriToStarterPackUri(
		'at://did:plc:fwm3dxkugaj2njwtr6ba3ghc/app.bsky.starter-pack/3la2krpgfiq2j'
	);
	assert.equal(
		starterPackUri,
		'https://bsky.app/starter-pack/did:plc:fwm3dxkugaj2njwtr6ba3ghc/3la2krpgfiq2j'
	);
});

test('resolvePost should fetch a Bluesky post by its postUrl', async () => {
	const post = await resolvePost(
		'https://bsky.app/profile/mk.gg/post/3la2snrsnhd2a'
	);
	assert.ok(post);
	assert.equal(post.author.handle, 'mk.gg');
	assert.equal(post.author.displayName, 'Matt Kane');
	assert.equal(
		post.author.avatar,
		'https://cdn.bsky.app/img/avatar/plain/did:plc:uwbl4k3tza7eyjv3morkrld2/bafkreic4mwsbm2tmuonamj4jq4kcjofk35bwics2f4oorp57f3cdfusjwu@jpeg'
	);
	assert.equal(
		post.uri,
		'at://did:plc:uwbl4k3tza7eyjv3morkrld2/app.bsky.feed.post/3la2snrsnhd2a'
	);
	assert.equal(
		post.record.text?.slice(0, 50),
		'Would you like to display your Bluesky posts in yo'
	);
	assert.equal(post.record.createdAt, '2024-11-03T18:15:34.183Z');
	assert.equal(post.embed?.$type, 'app.bsky.embed.images#view');
});

test('renderPostAsHtml should render a Bluesky post as HTML', async () => {
	const post = await resolvePost(
		'https://bsky.app/profile/mk.gg/post/3la2snrsnhd2a'
	);
	const html = renderPostAsHtml(post);
	assert.snapshot(
		html,
		`Would you like to display your Bluesky posts in your Astro site? I&#39;ve made an Astro content loader for Bluesky! When you build the site it loads your posts and puts them in a content collection. You can then display them on a page, or use the raw data however you want. 

<a href="https://github.com/ascorbic/astro-loaders/tree/main/packages/bluesky">github.com/ascorbic/ast...</a>`
	);
});

test('starterPackOgImage should generate an OG image URL for a Bluesky starter pack', () => {
	const image = starterPackOgImage(
		'https://bsky.app/starter-pack/did:plc:fwm3dxkugaj2njwtr6ba3ghc/3la2krpgfiq2j'
	);
	assert.equal(
		image,
		'https://ogcard.cdn.bsky.app/start/bsky.app/did:plc:fwm3dxkugaj2njwtr6ba3ghc'
	);
});

test('viewRecordToEmbed should convert a ViewRecord to an Embed', async () => {
	const post = await resolvePost(
		'https://bsky.app/profile/mk.gg/post/3la4wuiii4o2e'
	);
	const embed = viewRecordToEmbed(post?.embed?.record?.record);
	assert.ok(embed);
	assert.equal(embed.$type, 'app.bsky.embed.external#view');
	assert.equal(embed.external, {
		uri: 'https://github.com/withastro/roadmap/blob/responsive-images/proposals/0053-responsive-images.md',
		title: '',
		description: '',
	});
});

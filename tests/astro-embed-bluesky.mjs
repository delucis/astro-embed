import { HTMLAnchorElement } from 'linkedom';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM, renderScreen } from './utils/render.mjs';

test('it should render a Bluesky post', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-bluesky/src/post.astro',
		{ id: 'https://bsky.app/profile/mk.gg/post/3la2snrsnhd2a' }
	);
	screen.getByText(/Matt Kane/);
	screen.getByText('@mk.gg');
	screen.getByText(
		"Would you like to display your Bluesky posts in your Astro site? I've made an Astro content loader for Bluesky! When you build the site it loads your posts and puts them in a content collection. You can then display them on a page, or use the raw data however you want."
	);
	screen.getByText('November 3, 2024 at 6:15 PM UTC');
});

test('it should render a Bluesky post with video', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-bluesky/src/post.astro',
		{ id: 'https://bsky.app/profile/wattenberger.com/post/3la54isd7az2i' }
	);
	// Renders a “play button” over the video poster
	assert.ok(
		document.querySelector(
			'img[alt="Video thumbnail"] ~ div > img[alt="Play button"]'
		)
	);
});

test('it should nest quoted Bluesky posts with links', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-bluesky/src/post.astro',
		{ id: 'https://bsky.app/profile/mk.gg/post/3la4wuiii4o2e' }
	);
	const parent = document.querySelector('.bluesky-post-container');
	assert.ok(parent);
	const userName = parent.querySelector('.display-name');
	assert.ok(userName);
	assert.equal(userName.textContent, 'Matt Kane');
	const quotedPost = parent.querySelector('.post-container');
	assert.ok(quotedPost);
	const quotedUserName = quotedPost.querySelector('.name');
	assert.ok(quotedUserName);
	assert.equal(quotedUserName.textContent, 'Matthew Phillips');
	const quotedPostLink = quotedPost.lastElementChild;
	assert.ok(quotedPostLink);
	assert.match(quotedPostLink.textContent || '', /github\.com/);
	assert.instance(quotedPostLink, HTMLAnchorElement);
	assert.equal(
		quotedPostLink.href,
		'https://github.com/withastro/roadmap/blob/responsive-images/proposals/0053-responsive-images.md'
	);
});

test.run();

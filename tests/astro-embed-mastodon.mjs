import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM, renderScreen } from './utils/render.mjs';

test('it should render a post', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{ id: 'https://mastodon.social/@sarah11918/112937553683639459' }
	);
	screen.getByText(/@sarah11918/);
	screen.getByText('August 10, 2024');
});

test('it should render a post with a preview card with no image', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://fosstodon.org/@yabellini/112905997660025406',
		}
	);
	const card = document.querySelector('.mastodon-post-card');
	assert.ok(card);
	assert.match(card.textContent ?? '', /Friend Camp/);
	const image = card.querySelector('img');
	assert.not(image);
});

test('it should render a post with a preview card with an image', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://mastodon.social/@sarah11918/115757774216377685',
		}
	);
	const card = document.querySelector('.mastodon-post-card');
	assert.ok(card);
	assert.match(
		card.textContent ?? '',
		/What They Don't Tell You About Maintaining an Open Source Project/
	);
	const image = card.querySelector('img');
	assert.ok(image);
});

test('it should render a post with an image media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://mastodon.social/@sarah11918/112938341053568673',
		}
	);
	const image = document.querySelector('img.mastodon-post-img');
	assert.ok(image);
});

test('it should render a post with a video media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://m.webtoo.ls/@astro/112956966118149936',
		}
	);
	const video = document.querySelector('video.mastodon-post-video');
	assert.ok(video);
});

test('it should render a post with a gifv media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://m.webtoo.ls/@astro/112914830775250637',
		}
	);
	const video = document.querySelector('video.mastodon-post-video');
	assert.ok(video);
});

test('it should render a post with an audio media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://nahe.social/@yuliyan/112948405749089071',
		}
	);
	const audio = document.querySelector('audio.mastodon-post-audio');
	assert.ok(audio);
});

test('it should render a post with custom emojis', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://m.webtoo.ls/@swithinbank/115301163677375992',
		}
	);
	const emoji = document.querySelector('img.mastodon-post-emoji');
	assert.ok(emoji);
	assert.equal(emoji.getAttribute('alt'), ':starlight:');
});

// This test is a bit flaky, as usernames can be changed at any time and the emoji might no longer be present.
test.skip('it should render a post with a username including custom emojis', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://nahe.social/@yuliyan/112948405749089071',
		}
	);
	const emoji = document.querySelector('img.mastodon-post-emoji');
	assert.ok(emoji);
	assert.equal(emoji.getAttribute('alt'), ':questified:');
});

test('it should render in RTL languages', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/MastodonPost.astro',
		{
			id: 'https://khiar.net/@ebi/111512220730617416',
		}
	);
	const content = document.querySelector('blockquote > div');
	assert.ok(content);
	assert.equal(content.getAttribute('lang'), 'fa');
	assert.equal(content.getAttribute('dir'), 'rtl');
});

test.run();

import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM, renderScreen } from './utils/render.mjs';

test('it should render a toot', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-mastodon/Toot.astro',
		{ id: 'https://mastodon.social/@sarah11918/112937553683639459' }
	);
	screen.getByText(/@sarah11918/);
	screen.getByText('August 10, 2024');
});

test('it should render a toot with a preview card with no image', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://fosstodon.org/@yabellini/112905997660025406',
		}
	);
	const card = document.querySelector('.mastodon-toot-card');
	assert.ok(card);
	assert.match(card.textContent ?? '', /Friend Camp/);
	const image = card.querySelector('img');
	assert.not(image);
});

test('it should render a toot with a preview card with an image', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://mastodon.social/@sarah11918/112954791910873136',
		}
	);
	const card = document.querySelector('.mastodon-toot-card');
	assert.ok(card);
	assert.match(card.textContent ?? '', /50 Docs tips in 50 days/);
	const image = card.querySelector('img');
	assert.ok(image);
});

test('it should render a toot with an image media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://mastodon.social/@sarah11918/112938341053568673',
		}
	);
	const image = document.querySelector('img.mastodon-toot-img');
	assert.ok(image);
});

test('it should render a toot with a video media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://m.webtoo.ls/@astro/112956966118149936',
		}
	);
	const video = document.querySelector('video.mastodon-toot-video');
	assert.ok(video);
});

test('it should render a toot with a gifv media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://m.webtoo.ls/@astro/112914830775250637',
		}
	);
	const video = document.querySelector('video.mastodon-toot-video');
	assert.ok(video);
});

test('it should render a toot with an audio media attachment', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://nahe.social/@yuliyan/112948405749089071',
		}
	);
	const audio = document.querySelector('audio.mastodon-toot-audio');
	assert.ok(audio);
});

test('it should render a toot with custom emojis', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://mastodon.social/@onokoto/112881577072270247',
		}
	);
	const emoji = document.querySelector('img.mastodon-toot-emoji');
	assert.ok(emoji);
	assert.equal(emoji.getAttribute('alt'), ':mastodon:');
});

// This test is a bit flaky, as usernames can be changed at any time and the emoji might no longer be present.
test.skip('it should render a toot with a username including custom emojis', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://nahe.social/@yuliyan/112948405749089071',
		}
	);
	const emoji = document.querySelector('img.mastodon-toot-emoji');
	assert.ok(emoji);
	assert.equal(emoji.getAttribute('alt'), ':questified:');
});

test('it should render in RTL languages', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-mastodon/Toot.astro',
		{
			id: 'https://mastodon.social/@Panahifarah@khiar.net/112123163633804419',
		}
	);
	const content = document.querySelector('blockquote > div');
	assert.ok(content);
	assert.equal(content.getAttribute('lang'), 'fa');
	assert.equal(content.getAttribute('dir'), 'rtl');
});

test.run();

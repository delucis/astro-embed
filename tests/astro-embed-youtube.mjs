import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';

const videoid = 'xtTy5nKay_Y';

test('it should render a lite-youtube element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: videoid }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(
		embed.style['background-image'],
		`url('https://i.ytimg.com/vi/${videoid}/hqdefault.jpg')`
	);
	// It renders a static link to the video.
	const playButton = /** @type {HTMLAnchorElement} */ (
		embed.querySelector('a.lty-playbtn')
	);
	assert.ok(playButton);
	assert.is(playButton.href, `https://youtube.com/watch?v=${videoid}`);
	assert.is(playButton.textContent?.trim(), 'Play');
});

test('it parses a youtube.com URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: 'https://www.youtube.com/watch?v=' + videoid }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(embed.getAttribute('videoid'), videoid);
});

test('it parses a youtu.be URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: 'https://youtu.be/' + videoid }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(embed.getAttribute('videoid'), videoid);
});

test('it parses an embed URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: 'https://www.youtube.com/embed/' + videoid }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(embed.getAttribute('videoid'), videoid);
});

test('it parses a YouTube shorts URL', async () => {
	const videoid = 'zjOWezSzd18';
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: 'https://www.youtube.com/shorts/' + videoid }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(embed.getAttribute('videoid'), videoid);
});

test('it can set a custom poster image', async () => {
	const poster = 'https://example.com/i.png';
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: videoid, poster }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(embed.style['background-image'], `url('${poster}')`);
});

test('it can render a lower resolution poster image', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: videoid, posterQuality: 'low' }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(
		embed.style['background-image'],
		`url('https://i.ytimg.com/vi/${videoid}/default.jpg')`
	);
});

test('it can append a custom style', async () => {
	const style = 'width: 100%';
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: videoid, style }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(embed.style['width'], '100%');
	assert.is(
		embed.style['background-image'],
		`url('https://i.ytimg.com/vi/${videoid}/hqdefault.jpg')`
	);
});

test('title attribute also sets `data-title`', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-youtube/YouTube.astro',
		{ id: videoid, title: 'Example title' }
	);
	const embed = window.document.querySelector('lite-youtube');
	assert.ok(embed);
	assert.is(embed.dataset.title, 'Example title');
});

test.run();

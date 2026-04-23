import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';

const videoid = '7106594312292453675';
const poster = 'https://example.com/poster.jpg';

test('it should render a lite-tiktok element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it parses a tiktok.com/@user/video/ URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: `https://www.tiktok.com/@tiktok/video/${videoid}`, poster }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it can set a custom poster image', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	assert.is(embed.style['background-image'], `url('${poster}')`);
});

test('it renders a play button with default label', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	const playBtn = embed.querySelector('.ltt-playbtn');
	assert.ok(playBtn);
	assert.is(playBtn.getAttribute('aria-label'), 'Play');
});

test('it renders a play button with a custom label', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster, playlabel: 'Watch video' }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	const playBtn = embed.querySelector('.ltt-playbtn');
	assert.ok(playBtn);
	assert.is(playBtn.getAttribute('aria-label'), 'Watch video');
});

test('it renders a title overlay when title is provided', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster, title: 'My TikTok video' }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	const titleEl = embed.querySelector('.ltt-title');
	assert.ok(titleEl);
	assert.is(titleEl.textContent, 'My TikTok video');
});

test('it passes params to data-params attribute', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster, params: 'loop=1' }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	const params = new URLSearchParams(embed.getAttribute('data-params') ?? '');
	assert.is(params.get('loop'), '1');
	assert.is(params.get('autoplay'), '1');
});

test('it applies aspect ratio override via inline style', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster, aspectRatio: '16/9' }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	assert.ok(embed.getAttribute('style')?.includes('aspect-ratio: 16/9'));
});

test('it does not set inline aspect-ratio when using the default 9/16', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-tiktok/TikTok.astro',
		{ id: videoid, poster }
	);
	const embed = window.document.querySelector('lite-tiktok');
	assert.ok(embed);
	const style = embed.getAttribute('style') ?? '';
	assert.not.ok(style.includes('aspect-ratio'));
});

test.run();

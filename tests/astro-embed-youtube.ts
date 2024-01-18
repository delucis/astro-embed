import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render';

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

test.run();

import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';
import matcher from '../packages/astro-embed-bandcamp/matcher.ts';

const albumId = 'album=3998497340';

test('it should render a lite-bandcamp element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
});

test('it sets data-src with the embed ID and size=large', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
	const src = embed.getAttribute('data-src') ?? '';
	assert.ok(src.includes(albumId));
	assert.ok(src.includes('size=large'));
});

test('it sets bgcol from the theme prop', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId, theme: 'dark' }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
	const src = embed.getAttribute('data-src') ?? '';
	assert.ok(src.includes('bgcol=333333'));
});

test('it sets linkcol from the linkColor prop', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId, linkColor: 'cc5500' }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
	const src = embed.getAttribute('data-src') ?? '';
	assert.ok(src.includes('linkcol=cc5500'));
});

test('it renders a play button with a default aria-label', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId }
	);
	const btn = window.document.querySelector('.ltb-playbtn');
	assert.ok(btn);
	assert.is(btn.getAttribute('aria-label'), 'Play');
});

test('it sets a custom playLabel on the play button', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId, playLabel: 'Play the album' }
	);
	const btn = window.document.querySelector('.ltb-playbtn');
	assert.ok(btn);
	assert.is(btn.getAttribute('aria-label'), 'Play the album');
});

test('it can set a custom poster image', async () => {
	const poster = 'https://example.com/cover.png';
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId, poster }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
	assert.ok((embed.getAttribute('style') ?? '').includes(`url('${poster}')`));
});

test('slim layout sets the player to 42px height', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId, layout: 'slim' }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
	assert.ok((embed.getAttribute('style') ?? '').includes('42px'));
});

test('standard layout with large artwork uses the default dimensions', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
	const style = embed.getAttribute('style') ?? '';
	assert.ok(style.includes('350px'));
	assert.ok(style.includes('470px'));
});

test('it merges a style attribute', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-bandcamp/Bandcamp.astro',
		{ id: albumId, style: 'max-width: 400px' }
	);
	const embed = window.document.querySelector('lite-bandcamp');
	assert.ok(embed);
	assert.ok((embed.getAttribute('style') ?? '').includes('max-width: 400px'));
});

// Matcher tests — no network calls required

test('matcher: accepts an album URL', () => {
	assert.is(
		matcher('https://artist.bandcamp.com/album/my-album'),
		'https://artist.bandcamp.com/album/my-album'
	);
});

test('matcher: accepts a track URL', () => {
	assert.is(
		matcher('https://artist.bandcamp.com/track/my-track'),
		'https://artist.bandcamp.com/track/my-track'
	);
});

test('matcher: accepts a bare artist URL', () => {
	assert.is(
		matcher('https://artist.bandcamp.com'),
		'https://artist.bandcamp.com'
	);
});

test('matcher: rejects www.bandcamp.com', () => {
	assert.is(matcher('https://www.bandcamp.com'), undefined);
});

test('matcher: rejects bare bandcamp.com', () => {
	assert.is(matcher('https://bandcamp.com'), undefined);
});

test('matcher: rejects unrelated URLs', () => {
	assert.is(matcher('https://example.com/album/foo'), undefined);
});

test.run();

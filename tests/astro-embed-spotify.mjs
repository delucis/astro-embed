import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';

const poster = 'https://example.com/cover.jpg';
const title = 'Never Gonna Give You Up';
const trackId = '4cOdK2wGLETKBW3PvgPWqT';
const trackTypeAndId = `track/${trackId}`;

// Shared props that skip oEmbed network calls by providing all metadata upfront.
const baseProps = { id: trackTypeAndId, poster, title };

test('it should render a lite-spotify element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		baseProps
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-type'), 'track');
	assert.is(embed.getAttribute('data-id'), trackId);
});

test('it parses a Spotify URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ ...baseProps, id: `https://open.spotify.com/${trackTypeAndId}` }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-type'), 'track');
	assert.is(embed.getAttribute('data-id'), trackId);
});

test('it parses a Spotify embed URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ ...baseProps, id: `https://open.spotify.com/embed/${trackTypeAndId}` }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-type'), 'track');
	assert.is(embed.getAttribute('data-id'), trackId);
});

test('it renders a thumbnail image', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		baseProps
	);
	const img = window.document.querySelector('lite-spotify .lts-cover img');
	assert.ok(img);
	assert.is(img.getAttribute('src'), poster);
	assert.is(img.getAttribute('alt'), title);
});

test('it renders the track title', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		baseProps
	);
	const titleEl = window.document.querySelector('lite-spotify .lts-title');
	assert.ok(titleEl);
	assert.is(titleEl.textContent, title);
});

test('it renders compact size by default', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		baseProps
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-size'), 'compact');
});

test('it renders full size when size is "full"', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ ...baseProps, size: 'full' }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-size'), 'full');
});

test('it uses dark theme by default', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		baseProps
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	const params = new URLSearchParams(embed.getAttribute('data-params'));
	assert.is(params.get('theme'), '0');
	assert.is(embed.getAttribute('data-theme'), 'dark');
});

test('it uses light theme when theme is "light"', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ ...baseProps, theme: 'light' }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	const params = new URLSearchParams(embed.getAttribute('data-params'));
	assert.is(params.get('theme'), '1');
	assert.is(embed.getAttribute('data-theme'), 'light');
});

test('it renders a fallback link to Spotify', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		baseProps
	);
	const link = window.document.querySelector('lite-spotify a.lts-playbtn');
	assert.ok(link);
	assert.is(
		link.getAttribute('href'),
		`https://open.spotify.com/${trackTypeAndId}`
	);
});

test('it uses the default play label', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		baseProps
	);
	const link = window.document.querySelector('lite-spotify a.lts-playbtn');
	assert.ok(link);
	assert.is(link.getAttribute('aria-label'), 'Play');
});

test('it can set a custom play label', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ ...baseProps, playLabel: 'Play on Spotify' }
	);
	const link = window.document.querySelector('lite-spotify a.lts-playbtn');
	assert.ok(link);
	assert.is(link.getAttribute('aria-label'), 'Play on Spotify');
});

test('it renders a plain link for an invalid id', async () => {
	const invalidId = 'not-a-valid-spotify-id';
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: invalidId }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.not.ok(embed);
	const link = window.document.querySelector('a');
	assert.ok(link);
	assert.is(link.getAttribute('href'), invalidId);
	assert.is(link.textContent, invalidId);
});

test.run();

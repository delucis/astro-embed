import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';

const poster = 'https://example.com/cover.jpg';
const trackId = '4cOdK2wGLETKBW3PvgPWqT';
const trackTypeAndId = `track/${trackId}`;

test('it should render a lite-spotify element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-type'), 'track');
	assert.is(embed.getAttribute('data-id'), trackId);
});

test('it parses a Spotify URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: `https://open.spotify.com/${trackTypeAndId}`, poster }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-type'), 'track');
	assert.is(embed.getAttribute('data-id'), trackId);
});

test('it parses a Spotify embed URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: `https://open.spotify.com/embed/${trackTypeAndId}`, poster }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-type'), 'track');
	assert.is(embed.getAttribute('data-id'), trackId);
});

test('it can set a custom poster image', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.style['background-image'], `url('${poster}')`);
});

test('it renders compact size by default', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.style.getPropertyValue('--ls-height'), '152px');
});

test('it renders full size when size is "full"', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster, size: 'full' }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	assert.is(embed.style.getPropertyValue('--ls-height'), '352px');
});

test('it uses dark theme by default', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	const params = new URLSearchParams(embed.getAttribute('data-params'));
	assert.is(params.get('theme'), '0');
});

test('it uses light theme when theme is "light"', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster, theme: 'light' }
	);
	const embed = window.document.querySelector('lite-spotify');
	assert.ok(embed);
	const params = new URLSearchParams(embed.getAttribute('data-params'));
	assert.is(params.get('theme'), '1');
});

test('it renders a fallback link to Spotify', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster }
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
		{ id: trackTypeAndId, poster }
	);
	const link = window.document.querySelector('lite-spotify a.lts-playbtn');
	assert.ok(link);
	assert.is(link.getAttribute('aria-label'), 'Play');
});

test('it can set a custom play label', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-spotify/Spotify.astro',
		{ id: trackTypeAndId, poster, playLabel: 'Play on Spotify' }
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

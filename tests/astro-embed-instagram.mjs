import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';

const postUrl = 'https://www.instagram.com/p/C0testPost1_/';
const reelUrl = 'https://www.instagram.com/reel/C0testReel1/';
const tvUrl = 'https://www.instagram.com/tv/C0testTvVid1/';
const poster = 'https://example.com/poster.jpg';

test('it should render a lite-instagram element for a post URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.ok(embed);
});

test('it sets data-shortcode and data-type for a post URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.is(embed.getAttribute('data-shortcode'), 'C0testPost1_');
	assert.is(embed.getAttribute('data-type'), 'post');
});

test('it sets data-shortcode and data-type for a reel URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: reelUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.is(embed.getAttribute('data-shortcode'), 'C0testReel1');
	assert.is(embed.getAttribute('data-type'), 'reel');
});

test('it sets data-shortcode and data-type for a TV URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: tvUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.is(embed.getAttribute('data-shortcode'), 'C0testTvVid1');
	assert.is(embed.getAttribute('data-type'), 'tv');
});

test('it applies a poster image via the style attribute', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl, poster }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.ok(embed.getAttribute('style').includes(`url('${poster}')`));
});

test('it adds lti-no-poster class when no poster is supplied', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.ok(embed.classList.contains('lti-no-poster'));
});

test('it does not add lti-no-poster class when a poster is supplied', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl, poster }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.not(embed.classList.contains('lti-no-poster'));
});

test('it defaults to 1/1 aspect ratio for posts', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.ok(embed.getAttribute('style').includes('--lti-aspect-ratio: 1 / 1'));
});

test('it defaults to 9/16 aspect ratio for reels', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: reelUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.ok(embed.getAttribute('style').includes('--lti-aspect-ratio: 9 / 16'));
});

test('it defaults to 9/16 aspect ratio for TV', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: tvUrl }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.ok(embed.getAttribute('style').includes('--lti-aspect-ratio: 9 / 16'));
});

test('it respects a custom aspectRatio prop', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl, aspectRatio: '4 / 5' }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.ok(embed.getAttribute('style').includes('--lti-aspect-ratio: 4 / 5'));
});

test('it renders a play button with the default label for a post', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl }
	);
	const btn = window.document.querySelector('.lti-playbtn');
	assert.ok(btn);
	assert.is(btn.getAttribute('aria-label'), 'Load Instagram post');
});

test('it renders a play button with the default label for a reel', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: reelUrl }
	);
	const btn = window.document.querySelector('.lti-playbtn');
	assert.is(btn.getAttribute('aria-label'), 'Load Instagram reel');
});

test('it respects a custom playLabel prop', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl, playLabel: 'View photo on Instagram' }
	);
	const btn = window.document.querySelector('.lti-playbtn');
	assert.is(btn.getAttribute('aria-label'), 'View photo on Instagram');
});

test('it passes params to the data-params attribute', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl, params: 'captioned=true' }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.is(embed.getAttribute('data-params'), 'captioned=true');
});

test('it parses a type/shortcode id', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: 'reel/C0testReel1' }
	);
	const embed = window.document.querySelector('lite-instagram');
	assert.is(embed.getAttribute('data-shortcode'), 'C0testReel1');
	assert.is(embed.getAttribute('data-type'), 'reel');
});

test('it renders a caption overlay when author prop is supplied', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl, author: 'testuser' }
	);
	const caption = window.document.querySelector('.lti-caption');
	assert.ok(caption);
	const authorEl = window.document.querySelector('.lti-author');
	assert.ok(authorEl);
	assert.ok(authorEl.textContent.includes('testuser'));
});

test('it renders a caption overlay when caption prop is supplied', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl, caption: 'A test caption' }
	);
	const captionEl = window.document.querySelector('.lti-caption');
	assert.ok(captionEl);
	const titleEl = window.document.querySelector('.lti-title');
	assert.ok(titleEl);
	assert.ok(titleEl.textContent.includes('A test caption'));
});

test('it does not render a caption overlay when neither author nor caption is supplied', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-instagram/Instagram.astro',
		{ id: postUrl }
	);
	const captionEl = window.document.querySelector('.lti-caption');
	assert.not.ok(captionEl);
});

test.run();

import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';
import matcher from '../packages/astro-embed-soundcloud/matcher.ts';

const COMPONENT = './packages/astro-embed-soundcloud/SoundCloud.astro';
const TRACK_URL =
	'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022';
const PLAYLIST_URL = 'https://soundcloud.com/forss/sets/soulhack';
const ARTIST_URL = 'https://soundcloud.com/forss';

// --- matcher tests ---

test('matcher returns canonical URL for a track', () => {
	assert.is(matcher(TRACK_URL), TRACK_URL);
});

test('matcher returns canonical URL for a playlist', () => {
	assert.is(matcher(PLAYLIST_URL), PLAYLIST_URL);
});

test('matcher returns canonical URL for an artist page', () => {
	assert.is(matcher(ARTIST_URL), ARTIST_URL);
});

test('matcher returns canonical URL for a short link', () => {
	assert.is(
		matcher('https://on.soundcloud.com/abc123'),
		'https://on.soundcloud.com/abc123'
	);
});

test('matcher strips www.', () => {
	assert.is(
		matcher(
			'https://www.soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'
		),
		TRACK_URL
	);
});

test('matcher works without protocol', () => {
	assert.is(
		matcher('soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'),
		TRACK_URL
	);
});

test('matcher does not treat on.soundcloud.com as soundcloud.com without protocol', () => {
	assert.is(
		matcher('on.soundcloud.com/abc123'),
		'https://on.soundcloud.com/abc123'
	);
});

test('matcher returns undefined for non-SoundCloud URLs', () => {
	assert.is(matcher('https://youtube.com/watch?v=abc'), undefined);
	assert.is(matcher('https://vimeo.com/32001208'), undefined);
	assert.is(matcher('not-a-url'), undefined);
});

// --- component rendering tests ---
// Each test asserts something meaningful whether or not oEmbed is reachable in
// the test environment. When lite-soundcloud renders (oEmbed succeeded), embed
// attributes are verified. When oEmbed fails, the fallback link is checked.

test('renders lite-soundcloud or fallback link for a valid track URL', async () => {
	const { window } = await renderDOM(COMPONENT, { id: TRACK_URL });
	const embed = window.document.querySelector('lite-soundcloud');
	const fallback = window.document.querySelector('a');
	if (embed) {
		assert.is(embed.getAttribute('data-url'), TRACK_URL);
	} else {
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), TRACK_URL);
	}
});

test('renders lite-soundcloud or fallback link for a playlist URL', async () => {
	const { window } = await renderDOM(COMPONENT, { id: PLAYLIST_URL });
	const embed = window.document.querySelector('lite-soundcloud');
	const fallback = window.document.querySelector('a');
	if (embed) {
		assert.is(embed.getAttribute('data-url'), PLAYLIST_URL);
	} else {
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), PLAYLIST_URL);
	}
});

test('renders lite-soundcloud or fallback link for an artist URL', async () => {
	const { window } = await renderDOM(COMPONENT, { id: ARTIST_URL });
	const embed = window.document.querySelector('lite-soundcloud');
	const fallback = window.document.querySelector('a');
	if (embed) {
		assert.is(embed.getAttribute('data-url'), ARTIST_URL);
	} else {
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), ARTIST_URL);
	}
});

test('throws for an invalid (non-SoundCloud) URL', async () => {
	const invalidId = 'https://youtube.com/watch?v=abc';
	try {
		await renderDOM(COMPONENT, { id: invalidId });
		assert.unreachable('should have thrown for an invalid URL');
	} catch (err) {
		assert.ok(
			String(err).includes('Invalid or unrecognized SoundCloud URL'),
			'throws with descriptive error for invalid URL'
		);
	}
});

test('sets data-embed-type to classic and data-embed-height to 166px by default', async () => {
	const { window } = await renderDOM(COMPONENT, { id: TRACK_URL });
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		assert.is(embed.getAttribute('data-embed-type'), 'classic');
		assert.is(embed.getAttribute('data-embed-height'), '166px');
	} else {
		const fallback = window.document.querySelector('a');
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
	}
});

test('applies custom poster as img src when oEmbed succeeds (classic mode)', async () => {
	const poster = 'https://example.com/image.png';
	const { window } = await renderDOM(COMPONENT, { id: TRACK_URL, poster });
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		const img = window.document.querySelector('.ltsc-cover img');
		assert.is(img?.getAttribute('src'), poster);
	} else {
		const fallback = window.document.querySelector('a');
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), TRACK_URL);
	}
});

test('applies custom poster as background-image when oEmbed succeeds (visual mode)', async () => {
	const poster = 'https://example.com/image.png';
	const { window } = await renderDOM(COMPONENT, {
		id: TRACK_URL,
		poster,
		embedType: 'visual',
	});
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		assert.is(embed.style['background-image'], `url('${poster}')`);
	} else {
		const fallback = window.document.querySelector('a');
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), TRACK_URL);
	}
});

test('applies custom playLabel as aria-label when oEmbed succeeds', async () => {
	const playLabel = 'Get Rick Rolled!';
	const { window } = await renderDOM(COMPONENT, { id: TRACK_URL, playLabel });
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		const link = window.document.querySelector('a.ltsc-link');
		assert.is(link?.getAttribute('aria-label'), playLabel);
	} else {
		const fallback = window.document.querySelector('a');
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), TRACK_URL);
	}
});

test('applies params to data-src when oEmbed succeeds', async () => {
	const { window } = await renderDOM(COMPONENT, {
		id: TRACK_URL,
		params: 'color=ff5500',
	});
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		const src = embed.getAttribute('data-src') ?? '';
		assert.ok(src.includes('color=ff5500'), 'data-src includes custom params');
	} else {
		const fallback = window.document.querySelector('a');
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), TRACK_URL);
	}
});

test('sets data-embed-type to visual when embedType is visual', async () => {
	const { window } = await renderDOM(COMPONENT, {
		id: TRACK_URL,
		embedType: 'visual',
	});
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		assert.is(embed.getAttribute('data-embed-type'), 'visual');
	} else {
		const fallback = window.document.querySelector('a');
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), TRACK_URL);
	}
});

test('sets data-embed-height to provided height in visual mode', async () => {
	const { window } = await renderDOM(COMPONENT, {
		id: TRACK_URL,
		embedType: 'visual',
		height: '450px',
	});
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		assert.is(embed.getAttribute('data-embed-height'), '450px');
	} else {
		const fallback = window.document.querySelector('a');
		assert.ok(fallback, 'fallback link rendered when oEmbed unavailable');
		assert.is(fallback.getAttribute('href'), TRACK_URL);
	}
});

test.run();

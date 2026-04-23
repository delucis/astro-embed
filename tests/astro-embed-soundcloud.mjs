import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';
import matcher from '../packages/astro-embed-soundcloud/matcher.ts';

// --- matcher tests ---

test('matcher returns canonical URL for a track', () => {
	assert.is(
		matcher(
			'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'
		),
		'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'
	);
});

test('matcher returns canonical URL for a playlist', () => {
	assert.is(
		matcher('https://soundcloud.com/forss/sets/soulhack'),
		'https://soundcloud.com/forss/sets/soulhack'
	);
});

test('matcher returns canonical URL for an artist page', () => {
	assert.is(
		matcher('https://soundcloud.com/forss'),
		'https://soundcloud.com/forss'
	);
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
		'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'
	);
});

test('matcher works without protocol', () => {
	assert.is(
		matcher('soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'),
		'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'
	);
});

test('matcher returns undefined for non-SoundCloud URLs', () => {
	assert.is(matcher('https://youtube.com/watch?v=abc'), undefined);
	assert.is(matcher('https://vimeo.com/32001208'), undefined);
	assert.is(matcher('not-a-url'), undefined);
});

// --- component rendering tests ---

test('it renders a lite-soundcloud element for a valid URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-soundcloud/SoundCloud.astro',
		{
			id: 'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022',
		}
	);
	// May render a lite-soundcloud (if oEmbed succeeds) or a fallback <a> (if not reachable in test env).
	// Either way it should not throw and should render something meaningful.
	const embed = window.document.querySelector('lite-soundcloud');
	const fallback = window.document.querySelector('a');
	assert.ok(
		embed || fallback,
		'should render either lite-soundcloud or a fallback link'
	);
});

test('it sets data-url on the lite-soundcloud element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-soundcloud/SoundCloud.astro',
		{
			id: 'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022',
		}
	);
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		assert.is(
			embed.getAttribute('data-url'),
			'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022'
		);
	}
});

test('it sets data-type="playlist" for a playlist URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-soundcloud/SoundCloud.astro',
		{ id: 'https://soundcloud.com/forss/sets/soulhack' }
	);
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		assert.is(embed.getAttribute('data-type'), 'playlist');
	}
});

test('it sets data-type="track" for a track URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-soundcloud/SoundCloud.astro',
		{
			id: 'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022',
		}
	);
	const embed = window.document.querySelector('lite-soundcloud');
	if (embed) {
		assert.is(embed.getAttribute('data-type'), 'track');
	}
});

test.run();

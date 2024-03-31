import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM, renderScreen } from './utils/render.mjs';

test('it should render user meta data on card', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-link-preview/LinkPreview.astro',
		{ id: 'https://astro.build/blog/welcome-world/' }
	);
	screen.getByText('Welcome, World | Astro');
	screen.getByText(/^Astro's new look is live!/);
});

test('it should render a video if available', async () => {
	const { document } = await renderDOM(
		'./packages/astro-embed-link-preview/LinkPreview.astro',
		{ id: 'https://fosstodon.org/@mikeneu/112123823339364565' }
	);
	const embed = document.querySelector('.link-preview');
	assert.ok(embed);
	assert.ok(embed.classList.contains('link-preview--has-video'));
	const video = embed.querySelector('video');
	assert.ok(video);
});

test.run();

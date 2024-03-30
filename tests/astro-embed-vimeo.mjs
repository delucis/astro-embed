import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';

const videoid = '32001208';

test('it should render a lite-vimeo element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-vimeo/Vimeo.astro',
		{ id: videoid }
	);
	const embed = window.document.querySelector('lite-vimeo');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it parses a Vimeo URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-vimeo/Vimeo.astro',
		{ id: 'https://vimeo.com/' + videoid }
	);
	const embed = window.document.querySelector('lite-vimeo');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it can set a custom poster image', async () => {
	const poster = 'https://example.com/i.png';
	const { window } = await renderDOM(
		'./packages/astro-embed-vimeo/Vimeo.astro',
		{ id: videoid, poster }
	);
	const embed = window.document.querySelector('lite-vimeo');
	assert.ok(embed);
	assert.is(embed.style['background-image'], `url('${poster}')`);
});

test.run();

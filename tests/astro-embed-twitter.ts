import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderScreen } from './utils/render';

test('it should render user information in the header', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-twitter/Tweet.astro',
		{ id: '1511750228428435457' }
	);
	const username = screen.getByText('@astrodotbuild');
	assert.is(username.getAttribute('href'), 'https://twitter.com/astrodotbuild');
});

test('it should render if passed a full URL', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-twitter/Tweet.astro',
		{ id: 'https://twitter.com/astrodotbuild/status/1402352777020395521' }
	);
	const username = screen.getByText('@astrodotbuild');
	assert.is(username.getAttribute('href'), 'https://twitter.com/astrodotbuild');
});

test('it does not crush when we have empty entities', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-twitter/Tweet.astro',
		{ id: 'https://twitter.com/addyosmani/status/1600553460180869120' }
	);
	const username = screen.getByText('@addyosmani');
	assert.is(username.getAttribute('href'), 'https://twitter.com/addyosmani');
});

test.run();

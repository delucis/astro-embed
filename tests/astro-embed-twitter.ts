import { test } from 'uvu';
import { renderScreen } from './utils/render';

test('it should render user information in the footer', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-twitter/Tweet.astro',
		{ id: 'https://twitter.com/astrodotbuild/status/1511750228428435457' }
	);
	screen.getByText(/@astrodotbuild/);
	screen.getByText('April 6, 2022');
});

test('it should render if passed a full URL', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-twitter/Tweet.astro',
		{ id: 'https://twitter.com/astrodotbuild/status/1402352777020395521' }
	);
	screen.getByText(/@astrodotbuild/);
	screen.getByText('June 8, 2021');
});

test('it does not crash when we have undefined entities', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-twitter/Tweet.astro',
		{ id: 'https://twitter.com/addyosmani/status/1600553460180869120' }
	);
	screen.getByText(/@addyosmani/);
	screen.getByText('December 7, 2022');
});

test.run();

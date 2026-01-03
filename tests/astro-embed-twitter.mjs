import { test } from 'uvu';
import { renderScreen } from './utils/render.mjs';

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

test('it works with x.com URLs', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-twitter/Tweet.astro',
		{ id: 'https://x.com/astrodotbuild/status/1851286331491578330' }
	);
	screen.getByText(/⚠️ Be sure to check your kid's candy this year! ⚠️/);
	screen.getByText(
		/Just found a bloated 5.8 MB JavaScript bundle in this Reese's! 😱/
	);
	screen.getByText(/@astrodotbuild/);
	screen.getByText('October 29, 2024');
});

test.run();

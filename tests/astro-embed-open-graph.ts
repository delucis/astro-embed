import { test } from 'uvu';
import { renderScreen } from './utils/render';

test('it should render user meta data on card', async () => {
	const screen = await renderScreen(
		'./packages/astro-embed-og/OpenGraph.astro',
		{ id: 'https://astro.build/blog/welcome-world/' }
	);
	screen.getByText("Welcome, World | Astro");
	screen.getByText("Astro\'s new look is live!");
});

test.run();

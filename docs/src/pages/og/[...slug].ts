import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

// Get all entries from the `docs` content collection.
const entries = await getCollection('docs');

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
	// Pass down the documentation pages.
	pages,
	// Define the name of the parameter used in the endpoint path, here `slug`
	// as the file is named `[...slug].ts`.
	param: 'slug',
	// Define a function called for each page to customize the generated image.
	getImageOptions: (_path, page: (typeof pages)[number]) => {
		return {
			// Use the page title and description as the image title and description.
			title: page.data.title,
			description: page.data.description,
			// Customize various colors and add a border.
			bgGradient: [[47, 28, 66]],
			border: { color: [227, 182, 237], width: 10, side: 'block-end' },
			font: {
				title: {
					size: 90,
					color: [255, 255, 255],
					families: ['IBM Plex Serif'],
					weight: 'Bold',
				},
				description: {
					color: [227, 182, 237],
					families: ['IBM Plex Serif'],
					lineHeight: 1.4,
				},
			},
			fonts: [
				'https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-serif@latest/latin-400-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-serif@latest/latin-700-normal.woff2',
			],
			padding: 100,
			logo: {
				path: './src/assets/og-logo.png',
			},
		};
	},
});

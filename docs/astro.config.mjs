import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-embed.netlify.app/',
	integrations: [
		starlight({
			title: 'Astro Embed',
			social: {
				github: 'https://github.com/delucis/astro-embed',
			},
			sidebar: [
				{
					label: 'Getting started',
					link: '/getting-started/',
				},
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
			],
			customCss: ['./src/assets/theme.css'],
		}),
		embeds(),
	],
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-embed.netlify.app/',
	integrations: [
		starlight({
			title: 'Astro Embed',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
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
			components: {
				Head: './src/overrides/Head.astro',
			},
		}),
		embeds(),
	],
});

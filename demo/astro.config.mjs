import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import embed from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
	integrations: [embed(), mdx()],
});

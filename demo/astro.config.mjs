import { defineConfig } from 'astro/config';
import embed from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
	integrations: [embed()],
});

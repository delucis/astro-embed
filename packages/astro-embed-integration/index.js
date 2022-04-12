import {
	DEFAULT_REHYPE_PLUGINS,
	DEFAULT_REMARK_PLUGINS,
} from '@astrojs/markdown-remark';
import createEmbedPlugin from './remark-plugin.js';

const importNamespace = 'aUtOiMpOrTastroEmbed';

export default function embed() {
	/** @type {import('astro').AstroIntegration} */
	const integration = {
		name: 'astro-embed',
		hooks: {
			'astro:config:setup': ({ config, updateConfig, injectScript }) => {
				// Make sure we don’t disable Astro’s default plugins if none are specified.
				const remarkPlugins = [...config.markdown.remarkPlugins];
				const rehypePlugins = [...config.markdown.rehypePlugins];
				if (remarkPlugins.length === 0 && rehypePlugins.length === 0) {
					remarkPlugins.push(...DEFAULT_REMARK_PLUGINS);
					rehypePlugins.push(...DEFAULT_REHYPE_PLUGINS);
				}

				remarkPlugins.push(
					createEmbedPlugin({
						importNamespace,
						// TODO: make plugin configurable with options passed to integration
						// - support disabling specific services
						// - support customising props for each service
					})
				);

				updateConfig({ markdown: { rehypePlugins, remarkPlugins } });

				// Auto-import the embed components and attach them to the global scope
				injectScript(
					'page-ssr',
					`import * as ${importNamespace} from "astro-embed"; global.${importNamespace} = ${importNamespace};`
				);
			},
		},
	};
	return integration;
}

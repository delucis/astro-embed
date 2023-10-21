import type { AstroConfig, AstroIntegration } from 'astro';
import createEmbedPlugin, { componentNames } from './remark-plugin';
import AutoImport from 'astro-auto-import';
const importNamespace = 'AuToImPoRtEdAstroEmbed';

/**
 * Astro embed MDX integration.
 */
export default function embed() {
	const AstroEmbed: AstroIntegration = {
		name: 'astro-embed',
		hooks: {
			'astro:config:setup': ({ config, updateConfig }) => {
				checkIntegrationsOrder(config);
				updateConfig({
					markdown: {
						// TODO: make plugin configurable with options passed to integration
						// - support disabling specific services
						// - support customising props for each service
						remarkPlugins: [createEmbedPlugin({ importNamespace })],
					},
				});
			},
		},
	};

	return [
		// Inject component imports.
		AutoImport({
			imports: [
				{
					'astro-embed': componentNames.map((name) => [
						name,
						`${importNamespace}_${name}`,
					]),
				},
			],
		}),
		AstroEmbed,
	];
}

function checkIntegrationsOrder({ integrations }: AstroConfig) {
	const indexOf = (name: string) =>
		integrations.findIndex((i) => i.name === name);
	const mdxIndex = indexOf('@astrojs/mdx');
	const embedIndex = indexOf('astro-embed');

	if (mdxIndex > -1 && mdxIndex < embedIndex) {
		throw new Error(
			'MDX integration configured before astro-embed.\n' +
				'Please move `mdx()` after `embeds()` in the `integrations` array in astro.config.mjs.'
		);
	}
}

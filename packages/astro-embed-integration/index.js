import createEmbedPlugin, { componentNames } from './remark-plugin.js';
import AutoImport from 'astro-auto-import';
const importNamespace = 'AuToImPoRtEdAstroEmbed';

/**
 * Astro embed MDX integration.
 */
export default function embed() {
	/** @type {import('astro').AstroIntegration} */
	const AstroEmbed = {
		name: 'astro-embed',
		hooks: {
			'astro:config:setup': ({ updateConfig }) => {
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

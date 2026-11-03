import type { AstroConfig, AstroIntegration } from 'astro';
import createEmbedPlugin, { componentNames } from './remark-plugin';
import AutoImport from 'astro-auto-import';
const importNamespace = 'AuToImPoRtEdAstroEmbed';

/**
 * The parts of Astro’s `markdown.processor` config used here. Astro types
 * `options` loosely because its shape depends on the configured processor.
 */
interface MarkdownConfig {
	processor?:
		| { name: 'satteri'; options: { mdastPlugins: unknown[] } }
		| { name: 'unified'; options: { remarkPlugins: unknown[] } };
}

/**
 * Astro embed MDX integration.
 */
export default function embed({
	services = {},
}: {
	services?: Partial<Record<(typeof componentNames)[number], boolean>>;
} = {}) {
	const enabledComponents = componentNames.filter(
		(name) => services[name] !== false
	);

	const AstroEmbed: AstroIntegration = {
		name: 'astro-embed',
		hooks: {
			'astro:config:setup': ({ config }) => {
				checkIntegrationsOrder(config);
				// TODO: support customising props for each service
				const plugins = createEmbedPlugin({
					importNamespace,
					enabledComponents,
				});
				// Add the plugin directly to the configured Markdown processor. The old
				// `markdown.remarkPlugins` option is deprecated and Sätteri ignores it.
				const processor = (config.markdown as MarkdownConfig).processor;
				if (processor?.name === 'satteri') {
					processor.options.mdastPlugins.push(plugins.satteri);
				} else if (processor?.name === 'unified') {
					processor.options.remarkPlugins.push(plugins.remark);
				}
			},
		},
	};

	return [
		// Inject component imports.
		AutoImport({
			imports: [
				{
					'astro-embed': enabledComponents.map((name) => [
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

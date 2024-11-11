import { type Node, select, selectAll } from 'unist-util-select';
import blueskyMatcher from '@astro-community/astro-embed-bluesky/matcher';
import twitterMatcher from '@astro-community/astro-embed-twitter/matcher';
import vimeoMatcher from '@astro-community/astro-embed-vimeo/matcher';
import youtubeMatcher from '@astro-community/astro-embed-youtube/matcher';
import linkPreviewMatcher from '@astro-community/astro-embed-link-preview/matcher';

const matchers = [
	[blueskyMatcher, 'BlueskyPost'],
	[twitterMatcher, 'Tweet'],
	[vimeoMatcher, 'Vimeo'],
	[youtubeMatcher, 'YouTube'],
	/** The generic link matcher must be last otherwise it will override other URLs. */
	[linkPreviewMatcher, 'LinkPreview'],
] as const;
export const componentNames = matchers.map(([, name]) => name);

interface CreatePluginOptions {
	importNamespace: string;
	enabledComponents: typeof componentNames;
}

export default function createPlugin({
	importNamespace,
	enabledComponents,
}: CreatePluginOptions) {
	const enabledMatchers = matchers.filter(([, name]) =>
		enabledComponents.includes(name)
	);
	/**
	 * Get the name of the embed component for this URL
	 * @param {string} url URL to test
	 * @returns Component node for this URL or undefined if none matched
	 */
	function getComponent(url: string) {
		for (const [matcher, componentName] of enabledMatchers) {
			const id = matcher(url);
			if (id) {
				// MDX custom component node.
				return {
					type: 'mdxJsxFlowElement',
					name: `${importNamespace}_${componentName}`,
					attributes: [{ type: 'mdxJsxAttribute', name: 'id', value: id }],
					children: [],
				};
			}
		}
		return undefined;
	}

	type Link = Node & {
		url?: string;
		value?: string;
		children?: Node[];
	};

	function transformer(tree: Node) {
		const paragraphs = selectAll('paragraph', tree);
		paragraphs.forEach((paragraph) => {
			const link: Link | null = select(':scope > link:only-child', paragraph);
			if (!link) return;

			const { url, children } = link;
			// We’re only interested in HTTP links
			if (!url || !url.startsWith('http')) return;
			// URLs should have a single child
			if (!children || children.length !== 1) return;

			// The child should be a text node with a value matching the URL
			const child = children[0];
			if (
				!child ||
				child.type !== 'text' ||
				!('value' in child) ||
				child.value !== url
			) {
				return;
			}

			const component = getComponent(url);
			if (component) {
				// @ts-expect-error We’re overriding the initial node type with arbitrary data.
				for (const key in component) paragraph[key] = component[key];
			}
		});

		return tree;
	}

	return function attacher() {
		return transformer;
	};
}

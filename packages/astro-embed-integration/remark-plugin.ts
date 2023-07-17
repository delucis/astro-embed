import { selectAll } from 'unist-util-select';
import type { Node } from 'unist';
import twitterMatcher from '@astro-community/astro-embed-twitter/matcher';
import vimeoMatcher from '@astro-community/astro-embed-vimeo/matcher';
import youtubeMatcher from '@astro-community/astro-embed-youtube/matcher';

const matchers = [
	[twitterMatcher, 'Tweet'],
	[vimeoMatcher, 'Vimeo'],
	[youtubeMatcher, 'YouTube'],
] as const;
export const componentNames = matchers.map(([, name]) => name);

export default function createPlugin({
	importNamespace,
}: {
	importNamespace: string;
}) {
	/**
	 * Get the name of the embed component for this URL
	 * @param {string} url URL to test
	 * @returns Component node for this URL or undefined if none matched
	 */
	function getComponent(url: string) {
		for (const [matcher, componentName] of matchers) {
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
	}

	type Link = Node & {
		url?: string;
		value?: string;
		children?: Node[];
	};

	function transformer(tree: Node) {
		const nodes: Link[] = selectAll('paragraph > link:only-child', tree);

		nodes.forEach((node) => {
			const { url } = node;
			// We’re only interested in HTTP links
			if (!url?.startsWith('http')) return;

			const component = getComponent(url);
			if (component) {
				for (const key in component) node[key] = component[key];
			}
		});

		return tree;
	}

	return function attacher() {
		return transformer;
	};
}

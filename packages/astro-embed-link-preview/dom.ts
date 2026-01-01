import { makeSafeGetter } from '@astro-community/astro-embed-utils';
import {
	getAttribute,
	getTextContent,
	isElementNode,
	query,
	type Element,
} from '@parse5/tools';
import { parse } from 'parse5';

/**
 * Fetch a URL and parse it as HTML, but catch errors to stop builds erroring.
 * @param url URL to fetch
 */
export const safeGetDOM = makeSafeGetter(async (res) => {
	const document = parse(await res.text());
	return {
		getElement: (element: string, attributes: Record<string, string> = {}) => {
			const attrs = Object.entries(attributes);
			const el = query(
				document,
				(node) =>
					isElementNode(node) &&
					node.tagName === element &&
					attrs.every(([name, value]) =>
						node.attrs.some(
							(attr) => attr.name === name && attr.value === value
						)
					)
			) as Element | null;
			return el
				? {
						getAttribute: (name: string) => getAttribute(el, name),
						getTextContent: () => getTextContent(el),
					}
				: null;
		},
	};
});

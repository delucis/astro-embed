import {
	getAttribute,
	getTextContent,
	isElementNode,
	query,
	type Element,
	type Node,
} from '@parse5/tools';
import { parse } from 'parse5';
import { makeSafeGetter } from '@astro-community/astro-embed-utils';

/**
 * A massively simplified CSS selector parser for `querySelector` support.
 * Only supports element names and single attribute equals selectors.
 */
const selectorRegex =
	/^(?<element>[a-z0-9-]+)(?:\[(?<attribute>[a-z0-9-]+)=(?:'|")?(?<attributeValue>[\w:-]+)(?:'|"))?\]?$/;

/**
 * Fetch a URL and parse it as HTML, but catch errors to stop builds erroring.
 * @param url URL to fetch
 */
export const safeGetDOM = makeSafeGetter(async (res) => {
	const document = parse(await res.text());
	return {
		getAttribute: (el: Element | null, name: string) =>
			el && getAttribute(el, name),

		getTextContent: (node: Node | null) => node && getTextContent(node),

		querySelector: (selector: string) => {
			const { element, attribute, attributeValue } =
				selector.toLowerCase().match(selectorRegex)?.groups ?? {};
			return query(
				document,
				(node) =>
					isElementNode(node) &&
					(!element || node.tagName === element) &&
					(!attribute ||
						node.attrs.some(
							(attr) =>
								attr.name === attribute &&
								(attributeValue === undefined || attr.value === attributeValue)
						))
			) as Element | null;
		},
	};
});

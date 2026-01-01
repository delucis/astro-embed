import {
	getAttribute,
	getTextContent,
	isElementNode,
	query,
	type Element,
	type Node,
} from '@parse5/tools';
import { parse } from 'parse5';

class LRU<K, V> extends Map<K, V> {
	constructor(private readonly maxSize: number) {
		super();
	}

	override get(key: K): V | undefined {
		const value = super.get(key);
		if (value) this.#touch(key, value);
		return value;
	}

	override set(key: K, value: V): this {
		this.#touch(key, value);
		if (this.size > this.maxSize) this.delete(this.keys().next().value);
		return this;
	}

	#touch(key: K, value: V): void {
		this.delete(key);
		super.set(key, value);
	}
}

const formatError = (...lines: string[]) => lines.join('\n         ');

/**
 * Fetch a URL and parse it as JSON, but catch errors to stop builds erroring.
 * @param url URL to fetch
 * @returns {Promise<Record<string, any> | undefined>}
 */
export const safeGet = makeSafeGetter<Record<string, any>>((res) => res.json());

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

/** Factory to create safe, caching fetch functions. */
function makeSafeGetter<T>(
	handleResponse: (res: Response) => T | Promise<T>,
	{ cacheSize = 1000 }: { cacheSize?: number } = {}
) {
	const cache = new LRU<string, T>(cacheSize);
	return async function safeGet(url: string): Promise<T | undefined> {
		try {
			const cached = cache.get(url);
			if (cached) return cached;
			const response = await fetch(url);
			if (!response.ok)
				throw new Error(
					formatError(
						`Failed to fetch ${url}`,
						`Error ${response.status}: ${response.statusText}`
					)
				);
			const result = await handleResponse(response);
			cache.set(url, result);
			return result;
		} catch (e: any) {
			console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
			return undefined;
		}
	};
}

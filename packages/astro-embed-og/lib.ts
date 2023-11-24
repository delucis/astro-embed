import { parseHTML } from 'linkedom';

// copied from packages/astro-embed-utils/index.ts
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

const cache = new LRU<string, Record<string, any>>(1000);
const formatError = (...lines: string[]) => lines.join('\n         ');

/**
 * modified version of @function safeGet() from packages/astro-embed-utils/index.ts
 * Fetch a URL and parse it to documentElement, but catch errors to stop builds erroring.
 * @param url URL to fetch
 * @returns {Promise<Record<string, any> | undefined>}
 */
export async function getHtml(
	url: string
): Promise<Record<string, any> | undefined> {
	try {
		const cached = cache.get(url);
		if (cached) return cached;
		const res = await fetch(url);
		if (!res.ok)
			throw new Error(
				formatError(
					`Failed to fetch ${url}`,
					`Error ${res.status}: ${res.statusText}`
				)
			);
		const { document } = parseHTML(await res.text());
		cache.set(url, document);
		return document;
	} catch (e: any) {
		console.error(formatError(`[error]  astro-embed-social`, e?.message ?? e));
		return undefined;
	}
}

interface OG {
	title: string;
	description: string;
	image: string;
	url: string;
}

/**
 * Parses a html page to return social heads contents based on source.
 * @param pageUrl to parse
 * @returns {Promise<OG | undefined>}
 */
export async function parseOpenGraph(pageUrl: string): Promise<OG | undefined> {
	const NONE = 'none';
	const html = await getHtml(pageUrl);
	if (!html) {
		return;
	}
	const ogTitle = html.querySelector("meta[property='og:title']");
	const ogDescription = html.querySelector("meta[property='og:description']");
	const ogImage = html.querySelector("meta[property='og:image']");
	const ogUrl = html.querySelector("meta[property='og:url']");
	return {
		title: ogTitle?.getAttribute('content') || NONE,
		description: ogDescription?.getAttribute('content') || NONE,
		image: ogImage?.getAttribute('content') || NONE,
		url: ogUrl?.getAttribute('content') || NONE,
	};
}

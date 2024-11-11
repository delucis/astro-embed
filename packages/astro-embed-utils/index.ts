import { parseHTML } from 'linkedom/worker';

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
 * Fetch a URL and parse it as HTML, but catch errors to stop builds erroring.
 * @param url URL to fetch
 * @returns {Promise<Document | undefined>}
 */
export const safeGetDOM = makeSafeGetter(
	async (res) => parseHTML(await res.text()).document
);

/** Factory to create safe, caching fetch functions. */
export function makeSafeGetter<T, U = undefined>(
	handleResponse: (res: Response) => T | Promise<T>,
	{
		cacheSize = 1000,
		handleError,
	}: {
		cacheSize?: number;
		handleError?: (error: any, res: Response | undefined) => U;
	} = {}
) {
	const cache = new LRU<string | URL, T>(cacheSize);
	return async function safeGet(
		url: string | URL | Request,
		init?: RequestInit
	): Promise<T | U> {
		let response: Response | undefined;
		const cacheKey =
			url instanceof Request ? url.url : url instanceof URL ? url.href : url;
		const cached = cache.get(cacheKey);
		if (cached) return cached;
		try {
			response = await fetch(url, init);
			if (!response.ok)
				throw new Error(
					formatError(
						`Failed to fetch ${url}`,
						`Error ${response.status}: ${response.statusText}`
					)
				);
			const result = await handleResponse(response);
			cache.set(cacheKey, result);
			return result;
		} catch (e: any) {
			console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
			return handleError ? handleError(e, response) : (undefined as U);
		}
	};
}

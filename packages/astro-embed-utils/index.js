import LRU from 'lru-cache';
const cache = new LRU({ max: 1000 });

const formatError = (...lines) => lines.join('\n         ');

/**
 * Fetch a URL and parse it as JSON, but catch errors to stop builds erroring.
 * @param {string} url URL to fetch
 * @returns {Promise<Record<string, any> | undefined>}
 */
export async function safeGet(url) {
	try {
		if (cache.has(url)) return cache.get(url);
		const res = await fetch(url);
		if (!res.ok)
			throw new Error(
				formatError(
					`Failed to fetch ${url}`,
					`Error ${res.status}: ${res.statusText}`
				)
			);
		const json = await res.json();
		cache.set(url, json);
		return json;
	} catch (e) {
		console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
	}
}

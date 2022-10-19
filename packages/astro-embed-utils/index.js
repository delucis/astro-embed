class LRU extends Map {
	constructor(maxSize) {
		super();
		this.maxSize = maxSize;
	}

	get(key) {
		const value = super.get(key);
		if (value) this.#touch(key, value);
		return value;
	}

	set(key, value) {
		this.#touch(key, value);
		if (this.size > this.maxSize) this.delete(this.keys().next().value);
		return this;
	}

	#touch(key, value) {
		this.delete(key);
		super.set(key, value);
	}
}

const cache = new LRU(1000);

const formatError = (...lines) => lines.join('\n         ');

/**
 * Fetch a URL and parse it as JSON, but catch errors to stop builds erroring.
 * @param {string} url URL to fetch
 * @returns {Promise<Record<string, any> | undefined>}
 */
export async function safeGet(url) {
	try {
		const cached = cache.get(url);
		if (cached) return cached;
		// eslint-disable-next-line no-undef -- fetch is bootstrapped by Vite/Astro when not available
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

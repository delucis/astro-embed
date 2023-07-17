class LRU<K, V> extends Map<K, V> {
	constructor(private readonly maxSize: number) {
		super();
	}

	get(key: K): V | undefined {
		const value = super.get(key);
		if (value) this.#touch(key, value);
		return value;
	}

	set(key: K, value: V): this {
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
 * Fetch a URL and parse it as JSON, but catch errors to stop builds erroring.
 * @param url URL to fetch
 * @returns {Promise<Record<string, any> | undefined>}
 */
export async function safeGet(
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
		const json = await res.json();
		cache.set(url, json);
		return json;
	} catch (e) {
		console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
	}
}

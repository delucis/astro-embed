const formatError = (...lines) => lines.join('\n         ');

/**
 * Fetch a URL and parse it as JSON, but catch errors to stop builds erroring.
 * @param {string} url URL to fetch
 * @returns {Promise<Record<string, any> | undefined>}
 */
export async function safeGet(url) {
	try {
		const res = await fetch(url);
		if (!res.ok)
			throw new Error(
				formatError(
					`Failed to fetch ${url}`,
					`Error ${res.status}: ${res.statusText}`
				)
			);
		return await res.json();
	} catch (e) {
		console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
	}
}

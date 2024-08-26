// Thanks to eleventy-plugin-embed-mastodon
// https://github.com/inframanufaktur/eleventy-plugin-embed-mastodon/blob/f8c1687abf1f88a6351e53e38f91aff0c95a5cb2/.eleventy.js#L46-L47
const urlPattern =
	/(?:https:\/\/)?([\w\d-]*?.?[\w\d-]*.[a-z]*\/@[\w\d_]*(?:@[\w\d]*?.?[\w\d]*.[a-z]*)?\/)(\d+)/;

/**
 * Return a Toot URL from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A Toot URL or undefined if none matched
 */
export default function urlMatcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[0];
}

// Thanks to eleventy-plugin-embed-twitter
// https://github.com/gfscott/eleventy-plugin-embed-twitter/blob/main/lib/extractMatch.js
const urlPattern =
	/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:)??(?:\/\/)??(?:w{3}\.)??(?:twitter\.com|x\.com)\/([a-zA-Z0-9_]{1,15})?(?:\/(?:status)\/)(\d+)?(?:[^\s<>]*)(?=(\s*))\5(?:<\/a>)??(?=(\s*))\6/;

/**
 * Return a Tweet URL from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A Tweet ID or undefined if none matched
 */
export default function urlMatcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[0];
}

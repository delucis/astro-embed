// Thanks to eleventy-plugin-embed-everything/spotify
// https://github.com/gfscott/eleventy-plugin-embed-everything/blob/main/packages/spotify/lib/pattern.js
const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:)??(?:\/\/)??(?:open\.|www\.)??spotify\.com\/(?:user)??\/??(?:[0-9a-zA-Z]+)??\/??(playlist|track|album|artist|episode|show)\/([0-9a-zA-Z]{22})(?:[^\s<>]*)(?=(\s*))\5(?:<\/a>)??(?=(\s*))\6/g;

/**
 * Return a Track URL from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A Track ID or undefined if none matched
 */
export default function urlMatcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[0];
}

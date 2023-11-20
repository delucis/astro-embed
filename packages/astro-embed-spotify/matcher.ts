// Thanks to eleventy-plugin-embed-everything/spotify
// https://github.com/gfscott/eleventy-plugin-embed-everything/blob/main/packages/spotify/lib/pattern.js
/* The object returned by this regex is an array, with the following structure:
* - [0]: The entire match
* - [1]: Arbitrary whitespace
* - [2]: Arbitrary whitespace
* - [3]: Media type
* - [4]: Media ID
* - [5]: Arbitrary whitespace
* - [6]: Arbitrary whitespace
*/
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

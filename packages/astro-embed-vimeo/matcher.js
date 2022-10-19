// Thanks to eleventy-plugin-vimeo-embed
// https://github.com/gfscott/eleventy-plugin-vimeo-embed/blob/main/lib/extractMatches.js
const urlPattern =
	/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

/**
 * Extract a Vimeo ID from a URL if it matches the pattern.
 * @param {string} url URL to test
 * @returns {string|undefined} A Vimeo video ID or undefined if none matched
 */
export default function matcher(url) {
	const match = url.match(urlPattern);
	return match?.[3];
}

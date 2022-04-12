// Thanks to eleventy-plugin-youtube-embed
// https://github.com/gfscott/eleventy-plugin-youtube-embed/blob/main/lib/extractMatches.js
const urlPattern =
	/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

/**
 * Extract a YouTube ID from a URL if it matches the pattern.
 * @param {string} url URL to test
 * @returns {string|undefined} A YouTube video ID or undefined if none matched
 */
export default function matcher(url) {
	const match = url.match(urlPattern);
	return match?.[3];
}

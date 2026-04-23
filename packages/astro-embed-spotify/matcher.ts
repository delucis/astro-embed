const contentTypes = 'track|album|playlist|episode|show|artist';
const urlPattern = new RegExp(
	`open\\.spotify\\.com(?:/embed)?/(${contentTypes})/([A-Za-z0-9]+)`
);

/**
 * Extract a Spotify content type and ID from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A `"{type}/{id}"` string or undefined if none matched
 */
export default function matcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	if (!match) return undefined;
	return `${match[1]}/${match[2]}`;
}

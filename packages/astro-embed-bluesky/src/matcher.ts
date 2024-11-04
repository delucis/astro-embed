const urlPattern = /^https:\/\/bsky\.app\/profile\/[^/]+\/post\/[^/]+$/;
/**
 * Tests if a URL is a Bluesky post URL. If it is, returns the URL, otherwise returns undefined.
 */
export default function matcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	console.log('match', match);
	return match ? url : undefined;
}

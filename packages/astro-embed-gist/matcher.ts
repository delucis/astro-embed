const urlPattern =
	/^https:\/\/gist\.github\.com\/[^\/]+\/[^\/]+\/?(?:\?file=.+)?$/;

/**
 * Tests if a URL is a GitHub Gist URL. If it is, returns the URL, otherwise returns undefined.
 */
export default function matcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match ? url : undefined;
}

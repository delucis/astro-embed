const urlPattern =
	/(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:[A-Za-z0-9_.]+\/)?(p|reel|tv)\/([A-Za-z0-9_-]+)/;

/**
 * Extract a match from an Instagram URL if it matches a supported pattern.
 * @param url URL to test
 * @returns The matched URL string or undefined if none matched
 */
export default function matcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[0];
}

// Matches TikTok video URLs in several formats:
// - https://www.tiktok.com/@username/video/1234567890123456789 → numeric video ID
// - https://vm.tiktok.com/ABCDEF/ → full short URL (returned as-is for component resolution)
// - https://www.tiktok.com/t/ABCDEF/ → full short URL (returned as-is for component resolution)
const fullVideoPattern =
	/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@[^/\s<>]+\/video\/(\d{10,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

const vmShortPattern =
	/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2((?:https?:\/\/)?vm\.tiktok\.com\/[A-Za-z0-9]+\/?)(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

const tShortPattern =
	/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2((?:https?:\/\/)?(?:www\.)?tiktok\.com\/t\/[A-Za-z0-9]+\/?)(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

/**
 * Extract a TikTok video ID or short URL from a URL if it matches a known pattern.
 *
 * For full video URLs (`tiktok.com/@user/video/ID`), returns the numeric video ID.
 * For short URLs (`vm.tiktok.com/CODE` or `tiktok.com/t/CODE`), returns the full
 * normalized short URL so the component can use it for the oEmbed lookup.
 *
 * @param url URL to test
 * @returns A TikTok video ID, short URL, or undefined if none matched
 */
export default function matcher(url: string): string | undefined {
	const fullMatch = url.match(fullVideoPattern);
	if (fullMatch) return fullMatch[3];

	const vmMatch = url.match(vmShortPattern);
	if (vmMatch) {
		const raw = vmMatch[3];
		return raw.startsWith('http') ? raw : `https://${raw}`;
	}

	const tMatch = url.match(tShortPattern);
	if (tMatch) {
		const raw = tMatch[3];
		return raw.startsWith('http') ? raw : `https://${raw}`;
	}

	return undefined;
}

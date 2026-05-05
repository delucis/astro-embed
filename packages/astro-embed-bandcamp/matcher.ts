// Matches artist.bandcamp.com, artist.bandcamp.com/album/slug, artist.bandcamp.com/track/slug
// Does not match www.bandcamp.com or bare bandcamp.com
const urlPattern =
	/^https?:\/\/(?!www\.)([\w-]+)\.bandcamp\.com(\/(?:album|track)\/[^\s]*)?$/;

/**
 * Extract a Bandcamp URL if it matches an artist, album, or track page.
 * @param url URL to test
 * @returns The URL if it matches a Bandcamp embed, or undefined
 */
export default function matcher(url: string): string | undefined {
	if (!urlPattern.test(url)) return undefined;
	return url;
}

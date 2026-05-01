const soundcloudPattern =
	/(?:https?:\/\/)?(?:www\.)?soundcloud\.com\/([\w.-]+(?:\/(?:sets\/)?[\w.-]+)?)/;

const shortPattern = /(?:https?:\/\/)?on\.soundcloud\.com\/([\w-]+)/;

/**
 * Extract a canonical SoundCloud URL from a URL string if it matches a known pattern.
 * Supports track, playlist/set, artist, and on.soundcloud.com short links.
 * @param url URL to test
 * @returns A canonical SoundCloud URL or undefined if none matched
 */
export default function matcher(url: string): string | undefined {
	// Check on.soundcloud.com short links first. Without a protocol prefix,
	// a bare input like `on.soundcloud.com/abc` contains the substring `soundcloud.com/`
	// which soundcloudPattern would match, returning a wrong soundcloud.com URL.
	const shortMatch = url.match(shortPattern);
	if (shortMatch) return `https://on.soundcloud.com/${shortMatch[1]}`;
	const scMatch = url.match(soundcloudPattern);
	if (scMatch) return `https://soundcloud.com/${scMatch[1]}`;
	return undefined;
}

// Matches any HTTPS URL.
const urlPattern = /(https:\/\/\S+)/;

export default function urlMatcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[0];
}

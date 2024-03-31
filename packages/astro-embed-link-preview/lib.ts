import { safeGetDOM } from '@astro-community/astro-embed-utils';

/**
 * Parses a html page to return social heads contents based on source.
 * @param pageUrl to parse
 */
export async function parseOpenGraph(pageUrl: string) {
	const html = await safeGetDOM(pageUrl);
	if (!html) return;

	const ogTitle = html.querySelector("meta[property='og:title']");
	const ogDescription = html.querySelector("meta[property='og:description']");
	const ogImage = html.querySelector("meta[property='og:image']");
	const ogImageAlt = html.querySelector("meta[property='og:image:alt']");
	const ogUrl = html.querySelector("meta[property='og:url']");
	return {
		title: ogTitle?.getAttribute('content'),
		description: ogDescription?.getAttribute('content'),
		image: ogImage?.getAttribute('content'),
		imageAlt: ogImageAlt?.getAttribute('content'),
		url: ogUrl?.getAttribute('content'),
	};
}

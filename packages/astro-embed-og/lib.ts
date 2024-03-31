import { safeGetDOM } from '@astro-community/astro-embed-utils';

interface OG {
	title: string;
	description: string;
	image: string;
	url: string;
}

/**
 * Parses a html page to return social heads contents based on source.
 * @param pageUrl to parse
 * @returns {Promise<OG | undefined>}
 */
export async function parseOpenGraph(pageUrl: string): Promise<OG | undefined> {
	const NONE = 'none';
	const html = await safeGetDOM(pageUrl);
	if (!html) {
		return;
	}
	const ogTitle = html.querySelector("meta[property='og:title']");
	const ogDescription = html.querySelector("meta[property='og:description']");
	const ogImage = html.querySelector("meta[property='og:image']");
	const ogUrl = html.querySelector("meta[property='og:url']");
	return {
		title: ogTitle?.getAttribute('content') || NONE,
		description: ogDescription?.getAttribute('content') || NONE,
		image: ogImage?.getAttribute('content') || NONE,
		url: ogUrl?.getAttribute('content') || NONE,
	};
}

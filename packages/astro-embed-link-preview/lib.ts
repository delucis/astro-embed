import { safeGetDOM } from './dom';

/** Helper to filter out insecure or non-absolute URLs. */
const urlOrNull = (url: string | null | undefined) =>
	url?.slice(0, 8) === 'https://' ? url : null;

/**
 * Loads and parses an HTML page to return Open Graph metadata.
 * @param pageUrl URL to parse
 */
export async function parseOpenGraph(pageUrl: string) {
	const html = await safeGetDOM(pageUrl);
	if (!html) return;

	const getMetaProperty = (property: string) =>
		html.getElement('meta', { property })?.getAttribute('content');
	const getMetaName = (name: string) =>
		html.getElement('meta', { name })?.getAttribute('content');

	const title =
		getMetaProperty('og:title') || html.getElement('title')?.getTextContent();
	const description =
		getMetaProperty('og:description') || getMetaName('description');
	const image = urlOrNull(
		getMetaProperty('og:image:secure_url') ||
			getMetaProperty('og:image:url') ||
			getMetaProperty('og:image')
	);
	const imageAlt = getMetaProperty('og:image:alt');
	const video = urlOrNull(
		getMetaProperty('og:video:secure_url') ||
			getMetaProperty('og:video:url') ||
			getMetaProperty('og:video')
	);
	const videoType = getMetaProperty('og:video:type');
	const url =
		urlOrNull(
			getMetaProperty('og:url') ||
				html.getElement('link', { rel: 'canonical' })?.getAttribute('href')
		) || pageUrl;

	return { title, description, image, imageAlt, url, video, videoType };
}

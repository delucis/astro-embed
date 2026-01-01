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

	const getMetaProperty = (prop: string) =>
		html.getAttribute(
			html.querySelector(`meta[property=${JSON.stringify(prop)}]`),
			'content'
		);
	const getMetaName = (name: string) =>
		html.getAttribute(
			html.querySelector(`meta[name=${JSON.stringify(name)}]`),
			'content'
		);

	const title =
		getMetaProperty('og:title') ||
		html.getTextContent(html.querySelector('title'));
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
				html.getAttribute(html.querySelector("link[rel='canonical']"), 'href')
		) || pageUrl;

	return { title, description, image, imageAlt, url, video, videoType };
}

import { safeGet } from '@astro-community/astro-embed-utils';
import type { MastodonCustomEmoji, MastodonStatus } from './types';

/**
 * Thanks to @astrojs/starlight
 * https://github.com/withastro/starlight/blob/8a861d16b586b019f61f30d93c61bdcd58e1503f/packages/starlight/utils/i18n.ts#L12
 *
 * A list of well-known right-to-left languages used as a fallback when determining the text
 * direction of a locale is not supported by the `Intl.Locale` API in the current environment.
 *
 * @see getLocaleDir()
 * @see https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags
 */
const wellKnownRTL = ['ar', 'fa', 'he', 'prs', 'ps', 'syc', 'ug', 'ur'];

// Thanks to @astrojs/starlight
// https://github.com/withastro/starlight/blob/8a861d16b586b019f61f30d93c61bdcd58e1503f/packages/starlight/utils/i18n.ts#L177-L188
export function getLocaleDir(lang: string): 'ltr' | 'rtl' {
	const locale = new Intl.Locale(lang);
	if ('textInfo' in locale) {
		// @ts-expect-error - `textInfo` is not typed but is available in v8 based environments.
		return locale.textInfo.direction;
	} else if ('getTextInfo' in locale) {
		// @ts-expect-error - `getTextInfo` is not typed but is available in some non-v8 based environments.
		return locale.getTextInfo().direction;
	}
	// Firefox does not support `textInfo` or `getTextInfo` yet so we fallback to a well-known list
	// of right-to-left languages.
	return wellKnownRTL.includes(locale.language) ? 'rtl' : 'ltr';
}

// Regex to extract a post ID from a Mastodon status URL
const idRegExp = /(\d+)\/?$/;

function extractID(url: string) {
	const match = url.match(idRegExp);
	return match?.[0];
}

export async function fetchMastodonPost(url: string) {
	const id = extractID(url);
	if (!id) throw new Error('Invalid Mastodon post URL: ' + url);
	const data = (await safeGet(
		`${new URL(url).origin}/api/v1/statuses/${id}`
	)) as MastodonStatus | undefined;
	return data ? { ...data, dir: getLocaleDir(data.language) } : undefined;
}

export function replaceEmojis(
	text: string,
	emojis: MastodonCustomEmoji[]
): string {
	for (const emoji of emojis) {
		text = text.replace(
			new RegExp(`:${emoji.shortcode}:`, 'g'),
			`<img alt=":${emoji.shortcode}:" class="mastodon-post-emoji" src="${emoji.static_url}" loading="lazy" decoding="async" />`
		);
	}
	return text;
}

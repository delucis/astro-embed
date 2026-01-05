/**
 * Represents a status posted by an account.
 * (This type is a partial representation of the full data available.)
 * @see https://docs.joinmastodon.org/entities/Status/
 */
export interface MastodonStatus {
	/**
	 * The account that authored this status.
	 */
	account: MastodonAccount;
	/**
	 * Preview card for links included within status content.
	 */
	card: MastodonPreviewCard | null;
	/**
	 * Information about the status being quoted, if any
	 */
	quote?: null | MastodonShallowQuote | MastodonQuote;
	/**
	 * HTML-encoded status content.
	 */
	content: string;
	/**
	 * The date when this status was created.
	 * ISO 8601 format: `[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[s][TZD]`
	 */
	created_at: string;
	/**
	 * Custom emoji to be used when rendering status content.
	 */
	emojis: MastodonCustomEmoji[];
	/**
	 * Primary language of this status (ISO 639-1 two-letter language code or null).
	 */
	language: string;
	/**
	 * Media that is attached to this status.
	 */
	media_attachments: MastodonMediaAttachment[];
	/**
	 * A link to the status’s HTML representation.
	 */
	url: string;
}

/**
 * Represents a quote or a quote placeholder, with the current authorization status.
 * @see https://docs.joinmastodon.org/entities/ShallowQuote/
 */
interface MastodonShallowQuote {
	/**
	 * The state of the quote. Unknown values should be treated as `unauthorized`.
	 */
	state: string;
	/**
	 * The identifier of the status being quoted. This will be `null`, unless the `state` attribute is
	 * one of `accepted`, `blocked_account`, `blocked_domain` or `muted_account`.
	 */
	quoted_status_id: string | null;
}

/**
 * Represents a quote or a quote placeholder, with the current authorization status.
 * @see https://docs.joinmastodon.org/entities/Quote/
 */
interface MastodonQuote {
	/**
	 * The state of the quote. Unknown values should be treated as `unauthorized`.
	 */
	state: string;
	/**
	 * The status being quoted, if the quote has been accepted. This will be `null`, unless the state
	 * attribute is `accepted`, `blocked_account`, `blocked_domain`, or `muted_account`.
	 */
	quoted_status: null | MastodonStatus;
}

/**
 * Represents a user of Mastodon and their associated profile.
 * @see https://docs.joinmastodon.org/entities/Account/
 */
interface MastodonAccount {
	/**
	 * The WebFinger account URI. Equal to `username` for local users, or `username@domain` for remote users.
	 */
	acct: string;
	/**
	 * The profile’s display name.
	 */
	display_name: string;
	/**
	 * Custom emoji entities to be used when rendering the profile.
	 */
	emojis: MastodonCustomEmoji[];
	/**
	 * The username of the account, not including domain.
	 */
	username: string;
	/**
	 * A static version of the avatar. Equal to `avatar` if its value is a static image; different if `avatar` is an animated GIF.
	 */
	avatar_static: string;
	/**
	 * The location of the user’s profile page (web interface URL).
	 */
	url: string;
}

/**
 * Represents a custom emoji.
 * @see https://docs.joinmastodon.org/entities/CustomEmoji/
 */
export interface MastodonCustomEmoji {
	/**
	 * The name of the custom emoji.
	 */
	shortcode: string;
	/**
	 * A link to the custom emoji.
	 */
	url: string;
}

/**
 * Represents a rich preview card that is generated using OpenGraph tags from a URL.
 * @see https://docs.joinmastodon.org/entities/PreviewCard/
 */
export interface MastodonPreviewCard {
	/**
	 *  A hash computed by the BlurHash algorithm, for generating colorful preview thumbnails when media has not been downloaded yet.
	 */
	blurhash: string | null;
	/**
	 * Description of preview.
	 */
	description: string;
	/**
	 * Used for photo embeds, instead of custom `html`.
	 */
	embed_url: string;
	/**
	 * Height of preview, in pixels.
	 */
	height: number;
	/**
	 * Preview thumbnail.
	 */
	image: string | null;
	/**
	 * HTML to be used for generating the preview card.
	 * Mainly used for `iframe` embeds like YouTube links etc.
	 */
	html: string;
	/**
	 * The provider of the original resource.
	 */
	provider_name: string;
	/**
	 * A link to the provider of the original resource.
	 */
	provider_url: string;
	/**
	 * Title of linked resource.
	 */
	title: string;
	/**
	 * Location of linked resource.
	 */
	url: string;
	/**
	 * Width of preview, in pixels.
	 */
	width: number;
	/**
	 * The type of the preview card.
	 * `rich` is not currently accepted, so won’t show up in practice.
	 */
	type: 'link' | 'photo' | 'video' | 'rich';
	/**
	 * Fediverse account of the authors of the original resource.
	 */
	authors?: MastodonPreviewCardAuthor[];
}

/**
 * Represents a rich preview card that is generated using OpenGraph tags from a URL.
 * @see https://docs.joinmastodon.org/entities/PreviewCard/
 */
export interface MastodonPreviewCardAuthor {
	/**
	 * The original resource author’s name.
	 */
	name: string;
	/**
	 * A link to the author of the original resource.
	 */
	url: string;
	/**
	 * The fediverse account of the author.
	 */
	account: MastodonAccount;
}

/**
 * Represents a file or media attachment that can be added to a status.
 * @see https://docs.joinmastodon.org/entities/MediaAttachment/
 */
export interface MastodonMediaAttachment {
	/**
	 * A hash computed by the BlurHash algorithm, for generating colorful preview thumbnails when
	 * media has not been downloaded yet.
	 */
	blurhash: string | null;
	/**
	 * Alternate text that describes what is in the media attachment, to be used for the visually
	 * impaired or when media attachments do not load.
	 */
	description: string | null;
	/**
	 * Metadata returned by Paperclip.
	 */
	meta: null | {
		/** Original dimensions of an image or video attachment. */
		original?: {
			height: number;
			width: number;
		};
		/** Scaled down dimensions of an image or video attachment. */
		small?: {
			height: number;
			width: number;
		};
		/**
		 * Coordinates that may be used for smart thumbnail cropping.
		 * @see https://docs.joinmastodon.org/api/guidelines/#focal-points
		 */
		focus?: {
			/** Horizontal focal point (±1.0) */
			x: number | null;
			/** Vertical focal point (±1.0) */
			y: number | null;
		};
		/** Human-readable duration for video and audio, e.g. `"0:01:28.65"` */
		length?: string;
		/** Duration for video and audio in seconds, e.g. `88.65` */
		duration?: number;
	};
	/**
	 * The location of a scaled-down preview of the attachment.
	 */
	preview_url: string | null;
	/**
	 * The type of the attachment.
	 *
	 * `unknown` = unsupported or unrecognized file type;
	 * `image` = Static image;
	 * `gifv` = Looping, soundless animation; `video` = Video clip;
	 * `audio` = Audio track;
	 */
	type: 'image' | 'gifv' | 'video' | 'audio' | 'unknown';
	/**
	 * The location of the original full-size attachment. Url may be null if the file is still being processed.
	 */
	url: string | null;
}

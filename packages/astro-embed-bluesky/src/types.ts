import {
	AppBskyFeedPost,
	AppBskyFeedDefs,
	AppBskyEmbedRecord,
	AppBskyEmbedExternal,
	AppBskyEmbedImages,
	AppBskyEmbedRecordWithMedia,
	AppBskyEmbedVideo,
} from '@atproto/api';

export interface Post extends AppBskyFeedDefs.PostView {
	record: AppBskyFeedPost.Record;
}

export type EmbedView =
	| AppBskyEmbedRecord.View
	| AppBskyEmbedImages.View
	| AppBskyEmbedVideo.View
	| AppBskyEmbedExternal.View
	| AppBskyEmbedRecordWithMedia.View
	| { [k: string]: unknown; $type: string };

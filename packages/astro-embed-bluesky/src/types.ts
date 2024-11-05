import { AppBskyFeedPost, AppBskyFeedDefs } from '@atproto/api';

export interface Post extends AppBskyFeedDefs.PostView {
	record: AppBskyFeedPost.Record;
}

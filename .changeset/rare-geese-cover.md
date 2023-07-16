---
"astro-embed": minor
"@astro-community/astro-embed-integration": minor
"@astro-community/astro-embed-twitter": minor
---

Switch to more basic Twitter component that does not require authentication

**⚠️ BREAKING CHANGE** Due to upheaval at Twitter, the `<Tweet />` component is no longer able to fetch detailed information from Twitter’s API, limiting what a static embed can easily do.

Key differences:

- The `<Tweet />` component must now receive a full URL to a tweet, not just an ID. You will need to update these if you have any:

   ```diff
   - <Tweet id="1511750228428435457" />
   + <Tweet id="https://twitter.com/astrodotbuild/status/1511750228428435457" />
   ```

- The rendered component is more minimal: no avatar for the tweet author; no header containing author name and handle; images and video are not expanded, only showing as links

- The CSS class name on the resulting HTML is now `twitter-tweet` instead of `tweet-card` and none of the internal class names like `tweet-author`, `tweet-header` etc. are available. If you set any custom CSS to control appearance, this will likely need updating.

- Authentication is no longer required. If you previously configured a `SECRET_TWITTER_TOKEN` environment variable, you can safely remove it from your project.

---
"@astro-community/astro-embed-youtube": minor
"astro-embed": minor
---

Replaces `lite-youtube-embed` with `@justinribeiro/lite-youtube` and adds a `playlistId` prop to embed YouTube playlists

Also adds `showTitle` and `staticFallback` props to opt out of the visible title overlay and the poster and link shown before JavaScript loads.

**⚠️ BREAKING CHANGE:** The embed no longer has a `max-width` of `720px` and fills the width of its container. The undocumented `js-api` attribute is no longer supported.

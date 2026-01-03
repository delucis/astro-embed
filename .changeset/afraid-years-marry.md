---
'@astro-community/astro-embed-bluesky': minor
---

Reduces install size by ~60%

The `<Bluesky>` component now uses [atcute](https://github.com/mary-ext/atcute) instead of `@atproto/api` internally. Because of this the `Post` TypeScript type has changed slightly. If you were passing Bluesky data directly to the component (instead of a post URL), it should still work, but in some circumstances you may see type errors and need to adjust things slightly. [Let us know if you run into issues upgrading](https://github.com/delucis/astro-embed/issues/new/choose).

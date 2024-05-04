---
'@astro-community/astro-embed-integration': patch
---

Fixes an issue where the integration would match links that take up an entire paragraph even if they included a custom link.

For example, `[Check it out!](https://example.com)` would be converted to a `<LinkPreview>` component instead of rendering an `<a>` tag. This is now fixed and only plain URLs like `https://example.com` will match.

---
"@astro-community/astro-embed-integration": minor
"astro-embed": minor
---

MDX integration embeds replace their parent paragraph instead of their link node

⚠️ **Potentially breaking change:** embeds automatically injected in MDX using the Astro integration were previously wrapped in a `<p>` tag.
This is no longer the case. This may cause changes in vertical spacing between embeds depending on your site’s CSS.

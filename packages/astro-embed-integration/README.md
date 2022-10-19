# @astro-community/astro-embed-integration

This is an experimental Astro integration that allows you to auto-convert URLs in Markdown file to a corresponding embed component.

## Install

```bash
npm i @astro-community/astro-embed-integration
```

## Usage

To enable the integration, add it to the `integrations` array in your `astro.config.mjs` file and enable the [`legacy.astroFlavoredMarkdown` flag](https://docs.astro.build/en/reference/configuration-reference/#legacyastroflavoredmarkdown) to support components in Markdown files.

```js
import { defineConfig } from 'astro/config';
import embeds from '@astro-community/astro-embed-integration';

export default defineConfig({
  integrations: [embeds()],
  legacy: {
    astroFlavoredMarkdown: true,
  },
});
```

With the integration enabled any isolated URL in a Markdown file that matches one of the `astro-embed` component types will be converted to the appropriate component.

For example, Markdown like this

```md
I saw this cool Tweet the other day:

https://twitter.com/astrodotbuild/status/1511750228428435457
```

Will render a static Tweet component in place of the URL.

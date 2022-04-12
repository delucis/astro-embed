# astro-embed

Embed components for your Astro sites built by the Astro community 🚀

## Install

```bash
npm i astro-embed
```

## Using the components

### `.astro` files

To use components in your `.astro` files, first import them in the component script.

```astro
---
import { Tweet, YouTube } from 'astro-embed';
---

<Tweet id="https://twitter.com/astrodotbuild/status/1512144306898976768" />

<YouTube id="https://youtu.be/xtTy5nKay_Y" />
```

### Markdown pages

You can also import an embed component for use on a Markdown page.

```md
---
setup: |
  import { Tweet, YouTube } from 'astro-embed';
---

Hey look! I can embed a tweet _in Markdown_!

<Tweet id="https://twitter.com/astrodotbuild/status/1512144306898976768" />

YouTube videos work too :-)

<YouTube id="https://youtu.be/xtTy5nKay_Y" />
```

## Using the integration

You can use the provided integration to automatically convert standalone URLs in Markdown files to embed components.

To enable the integration, add it to the `integrations` array in your `astro.config.mjs` file.

```js
import { defineConfig } from 'astro/config';
import embeds from 'astro-embed/integration';

export default defineConfig({
  integrations: [embeds()],
});
```

> ⚠️ Astro integrations are still experimental currently, so you will need to add the `--experimental-integrations` flag to your `astro dev/build` commands to enable this unofficial integration.

With the integration enabled any isolated URL in a Markdown file that matches one of the `astro-embed` component types will be converted to the appropriate component.

For example, Markdown like this

```md
I saw this cool Tweet the other day:

https://twitter.com/astrodotbuild/status/1511750228428435457
```

Will render the `Tweet` component in place of the URL.

## Docs

See individual packages for how to use the component for each service:

- [Twitter](https://github.com/astro-community/astro-embed/tree/main/packages/astro-embed-twitter#readme)
- [YouTube](https://github.com/astro-community/astro-embed/tree/main/packages/astro-embed-youtube#readme)

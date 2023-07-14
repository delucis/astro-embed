# astro-embed

Embed components for your Astro sites built by the Astro community 🚀

## Install

```bash
npm i astro-embed
```

> **Note**
> Using the `<Tweet />` component? add a `SECRET_TWITTER_TOKEN` environment variable with your Twitter API bearer token. [Learn more in the component docs →](https://github.com/delucis/astro-embed/tree/main/packages/astro-embed-twitter#readme)

## Using the components

### `.astro` files

To use components in your `.astro` files, first import them in the component script.

```astro
---
import { Tweet, Vimeo, YouTube } from 'astro-embed';
---

<Tweet id="https://twitter.com/astrodotbuild/status/1512144306898976768" />

<Vimeo id="https://vimeo.com/32001208" />

<YouTube id="https://youtu.be/xtTy5nKay_Y" />
```

### Markdown pages

You can also import an embed component for use on a Markdown page.

```md
---
setup: |
  import { Tweet, Vimeo, YouTube } from 'astro-embed';
---

Hey look! I can embed a tweet _in Markdown_!

<Tweet id="https://twitter.com/astrodotbuild/status/1512144306898976768" />

Vimeo and YouTube videos work too :-)

<Vimeo id="https://vimeo.com/32001208" />
<YouTube id="https://youtu.be/xtTy5nKay_Y" />
```

> **Warning:**
> This requires the [`legacy.astroFlavoredMarkdown` flag](https://docs.astro.build/en/reference/configuration-reference/#legacyastroflavoredmarkdown) to be turned on in your `astro.config.mjs` file.

## Using the integration

You can use the provided integration to automatically convert standalone URLs in Markdown files to embed components.

To enable the integration, add it to the `integrations` array in your `astro.config.mjs` file and enable the [`legacy.astroFlavoredMarkdown` flag](https://docs.astro.build/en/reference/configuration-reference/#legacyastroflavoredmarkdown) to support components in Markdown files.

```js
import { defineConfig } from 'astro/config';
import embeds from 'astro-embed/integration';

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

Will render the `Tweet` component in place of the URL.

## Docs

See individual packages for how to use the component for each service:

- [Twitter](https://github.com/delucis/astro-embed/tree/main/packages/astro-embed-twitter#readme)
- [Vimeo](https://github.com/delucis/astro-embed/tree/main/packages/astro-embed-vimeo#readme)
- [YouTube](https://github.com/delucis/astro-embed/tree/main/packages/astro-embed-youtube#readme)

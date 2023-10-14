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
// src/components/Example.astro
import { Tweet, Vimeo, YouTube } from 'astro-embed';
---

<Tweet id="https://twitter.com/astrodotbuild/status/1512144306898976768" />

<Vimeo id="https://vimeo.com/32001208" />

<YouTube id="https://youtu.be/xtTy5nKay_Y" />
```

### MDX pages

You can also import an embed component for use in MDX pages when using the [Astro MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/).

```mdx
---
# src/content/examples/page.mdx
title: My MDX page with embed components
---

import { Tweet, Vimeo, YouTube } from 'astro-embed';

Hey look! I can embed a tweet _in Markdown_!

<Tweet id="https://twitter.com/astrodotbuild/status/1512144306898976768" />

Vimeo and YouTube videos work too :-)

<Vimeo id="https://vimeo.com/32001208" />
<YouTube id="https://youtu.be/xtTy5nKay_Y" />
```

## Using the integration

You can use the provided integration to automatically convert standalone URLs in MDX files to embed components.

To enable the integration, add it to the `integrations` array in your `astro.config.mjs` file:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import embeds from 'astro-embed/integration';

export default defineConfig({
  integrations: [embeds(), mdx()],
});
```

> [!IMPORTANT]
> The `embeds()` integration must be listed before the `mdx()` integration.

With the integration enabled, any isolated URL in an MDX file that matches one of the `astro-embed` component types will be converted to the appropriate component.

For example, MDX like this will render an optimised YouTube player component in place of the URL.

```mdx
I saw this cool video the other day:

http://www.youtube.com/watch?v=Hoe-woAhq_k
```

## Docs

See individual packages for how to use the component for each service:

- [Twitter](https://github.com/delucis/astro-embed/tree/main/packages/astro-embed-twitter#readme)
- [Vimeo](https://github.com/delucis/astro-embed/tree/main/packages/astro-embed-vimeo#readme)
- [YouTube](https://github.com/delucis/astro-embed/tree/main/packages/astro-embed-youtube#readme)

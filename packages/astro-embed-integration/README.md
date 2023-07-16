# @astro-community/astro-embed-integration

This is an experimental Astro integration that allows you to auto-convert URLs in MDX files to a corresponding embed component.

## Install

```bash
npm i @astro-community/astro-embed-integration
```

## Usage

To enable the integration, add it to the `integrations` array in your `astro.config.mjs` file:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import embeds from '@astro-community/astro-embed-integration';

export default defineConfig({
  integrations: [embeds(), mdx()],
});
```

With the integration enabled, any isolated URL in an MDX file that matches one of the `astro-embed` component types will be converted to the appropriate component.

For example, MDX like this will render an optimised YouTube player component in place of the URL.

```mdx
I saw this cool Tweet the other day:

http://www.youtube.com/watch?v=Hoe-woAhq_k
```

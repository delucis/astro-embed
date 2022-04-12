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

## Docs

See individual packages for how to use the component for each service:

- [Twitter](https://github.com/astro-community/astro-embed/tree/main/packages/astro-embed-twitter#readme)
- [YouTube](https://github.com/astro-community/astro-embed/tree/main/packages/astro-embed-youtube#readme)

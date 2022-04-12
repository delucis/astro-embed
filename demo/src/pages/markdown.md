---
title: Components in Markdown
layout: ../layouts/Base.astro
setup: |
  import { Tweet, YouTube } from 'astro-embed';
---

The embeds on this page are imported as components in the Markdown frontmatter’s `setup` block and then used in the document body.

```md
---
setup: |
  import { Tweet, YouTube } from 'astro-embed';
---

<Tweet id="1511750228428435457" />
```

## `<Tweet />`

<Tweet id="1511750228428435457" />

## `<YouTube />`

<YouTube id="Hoe-woAhq_k" />

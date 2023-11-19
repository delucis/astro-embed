# `@astro-community/astro-embed-og`

This package contains a component for embedding OpenGraph page data as static card in Astro projects.

## Install

```bash
npm i @astro-community/astro-embed-og
```

## Usage

### `<OpenGraphEmbed url={pageUrl} />`

The **OpenGraphEmbed** component generates a static card for a given URL.

```astro
---
import { OpenGraphEmbed } from '@astro-community/astro-embed-og';
---

<OpenGraphEmbed url="https://astro.build/blog/welcome-world" />
```

### Styling

The card has basic styling. You can customise it by targeting the following classes:

```css
  :root {
    --image-width: 400px;
    --image-height: 210px;
    --card-radius: 4px;
  }
  .social-embed-card {
    width: var(--image-width);
    cursor: pointer;
  }
  .social-embed-image {
    height: var(--image-height);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--card-radius) var(--card-radius) 0 0;
  }
  .social-embed-contents {
    padding: 1em;
    user-select: none;
    border: 1px solid lightgray;
    border-radius: 0 0 var(--card-radius) var(--card-radius);
  }
  .social-embed-hostname {
    font-size: smaller;
    text-transform: uppercase;
    color: gray;
  }
  .social-embed-description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .social-embed-title {
    font-weight: bolder;
  }
```
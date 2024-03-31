# `@astro-community/astro-embed-link-preview`

This package contains a component for embedding OpenGraph page data as static card in Astro projects.

## Install

```bash
npm i @astro-community/astro-embed-link-preview
```

## Usage

### `<LinkPreview id={pageUrl} />`

The **LinkPreview** component generates a static card for a given URL.

```astro
---
import { LinkPreview } from '@astro-community/astro-embed-link-preview';
---

<LinkPreview id="https://astro.build/blog/welcome-world" />
```

### Options

Availible options are:

`id` URL to fetch data

optional:

`imageWidth`: CSS size for image and card width.

`imageHeight`: CSS size for image height.

the image size defaults to w="400px", h="210px" that is 1.91:1 aspect ratio from OpenGraph image

`styled` Boolean value whether to apply basic styles. Defaults to false. \*/

### Styling

The card has minimal styling. You can customise it by targeting the following classes:
`.social-embed-wrapper`, `social-embed-image`, `social-embed-contents`, `social-embed-hostname`, `social-embed-title`, and `social-embed-description`.

Here is the default styles:

```css
.social-embed-wrapper {
  cursor: pointer;
  user-select: none;
  width: var(--imageWidth);
}
.social-embed-image {
  width: var(--imageWidth);
  height: var(--imageHeight);
}
```

Optionally you can enable basic styling with the option `styled`:

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

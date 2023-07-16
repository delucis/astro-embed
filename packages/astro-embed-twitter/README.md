# `@astro-community/astro-embed-twitter`

This package contains a component for embedding tweets in Astro projects.

## Install

```bash
npm i @astro-community/astro-embed-twitter
```

## Usage

### `<Tweet id={tweetUrl} />`

The **Tweet** component generates a static Twitter card for a single Tweet using [Twitter’s oEmbed API](https://developer.twitter.com/en/docs/twitter-for-websites/oembed-api).

```astro
---
import { Tweet } from '@astro-community/astro-embed-twitter';
---

<Tweet id="https://twitter.com/astrodotbuild/status/1511750228428435457" />
```

### Loading Twitter’s JavaScript

By design, this is a minimal component and loads zero JavaScript, only rendering some static HTML content.
However, this HTML is compatible with Twitter’s widget system.
Loading Twitter‘s large bundle of widget JavaScript will convert each `<Tweet />` into an interactive embed.

You can do this by including a `<script>` tag in your Astro layout file:

```html
<script async src="https://platform.twitter.com/widgets.js"></script>
```

### Styling

By default the card has minimal styling, which should adapt to your site’s font settings etc.

You can customise it by targeting the `.twitter-tweet` class, for example:

```css
.twitter-tweet {
  background: floralwhite;
  font-family: sans-serif;
  border: 0;
}

.twitter-tweet a {
  color: purple;
  font-weight: bold;
}
```

# `@delucis/astro-embed-twitter`

This package contains a component for embedding tweets in Astro projects.

## Install

```bash
npm i @delucis/astro-embed-twitter
```

## Usage

### `<Tweet id={tweetIdOrUrl} />`

The **Tweet** component generates a static Twitter card for a single Tweet.

```astro
---
import { Tweet } from '@delucis/astro-embed-twitter';
---

<Tweet id="1511750228428435457" />
```

It also supports passing a full URL instead of just the ID.

```astro
---
import { Tweet } from '@delucis/astro-embed-twitter';
---

<Tweet id="https://twitter.com/astrodotbuild/status/1511750228428435457" />
```

### Styling

By default the card has minimal styling, which should adapt to your site’s font settings etc.

You can customise it by targeting any of the `.tweet-` classes, for example:

```css
.tweet-card {
  background: floralwhite;
  font-family: sans-serif;
  border: 0;
}

.tweet-card a {
  color: purple;
  font-weight: bold;
}

.tweet-author-name {
  font-family: cursive;
  font-size: 1.5em;
}
```

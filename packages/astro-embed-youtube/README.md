# `@astro-community/astro-embed-youtube`

This package contains a component for embedding YouTube videos in Astro projects.

## Install

```bash
npm i @astro-community/astro-embed-youtube
```

## Usage

### `<YouTube id={video_id} />`

The **YouTube** component generates an embed using [the `lite-youtube-embed` custom element](https://github.com/paulirish/lite-youtube-embed). YouTube embeds will always require some JavaScript, but this is one of the most minimal and performant ways to embed a YouTube video.

```astro
---
import { YouTube } from '@astro-community/astro-embed-youtube';
---

<YouTube id="xtTy5nKay_Y" />
```

You can also pass in a URL in one of the various YouTube formats.

```astro
<YouTube id="https://youtu.be/xtTy5nKay_Y" />
```

#### Optional props

##### `poster`

You can provide an alternative poster image by passing in a URL to the `poster` prop.

```astro
<YouTube
  id="xtTy5nKay_Y"
  poster="https://images-assets.nasa.gov/image/0302063/0302063~orig.jpg"
/>
```

##### `params`

As when using `lite-youtube-embed` directly, you can pass in a `params` prop to set the [YouTube player parameters](https://developers.google.com/youtube/player_parameters#Parameters). This looks like a series of URL search params.

```astro
<YouTube id="xtTy5nKay_Y" params="start=10&end=30" />
```

##### `playlabel`

By default, the play button in the embed has an accessible label set to “Play”. If you want to customise this, you can set the `playlabel` prop.

```astro
<YouTube id="xtTy5nKay_Y" playlabel="Play the video" />
```

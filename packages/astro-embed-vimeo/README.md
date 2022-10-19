# `@astro-community/astro-embed-vimeo`

This package contains a component for embedding Vimeo videos in Astro projects.

## Install

```bash
npm i @astro-community/astro-embed-vimeo
```

## Usage

### `<Vimeo id={video_id_or_url} />`

The **Vimeo** component generates an embed using a `lite-vimeo` custom element. Vimeo embeds will always require some JavaScript, but this is one of the most minimal and performant ways to embed a Vimeo video.

```astro
---
import { Vimeo } from '@astro-community/astro-embed-vimeo';
---

<Vimeo id="32001208" />
```

You can also pass in the full URL for the video:

```astro
<Vimeo id="https://vimeo.com/32001208" />
```

#### Optional props

##### `poster`

You can provide an alternative poster image by passing in a URL to the `poster` prop.

```astro
<Vimeo
  id="32001208"
  poster="https://images-assets.nasa.gov/image/0302063/0302063~orig.jpg"
/>
```

##### `params`

You can pass a `params` prop to set the [player parameters supported by Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview). This looks like a series of URL search params.

```astro
<!-- Example: Set the UI color to red and mute by default. -->
<Vimeo id="32001208" params="color=ff0000&muted=1" />
```

##### `playlabel`

By default, the play button in the embed has an accessible label set to “Play”. If you want to customise this, you can set the `playlabel` prop.

```astro
<Vimeo id="32001208" playlabel="Play the video" />
```

# `@astro-community/astro-embed-spotify`

This package contains a component for embedding Spotify in Astro projects.

## Install

```bash
npm i @astro-community/astro-embed-spotify
```

## Usage

### `<Spotify options id={spotifyUrl} />`

The **Spotify** component generates a interactive iframe and supports tracks, albums, artists, podcast episodes, and playlists embeds.

```astro
---
import { Spotify } from '@astro-community/astro-embed-spotify';
---

<Spotify id="https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli" />
```

### Options

There are a few options you can use:

`dark = false` - Enable dark mode

`compact = false` - Enable compact sizing

`widthPercent = 100` - Set iframe width in percent

example: 

```ts
<Spotify
    dark
    compact
    widthPercent="80"
    id="https://open.spotify.com/track/3d1ZZs7GvwSN43muHqgPh1"
  />
```

### Remark Plugin

```mdx
{/* <!-- Works with individual tracks, show, albums, artists, podcast episodes, and playlists: --> */}

https://open.spotify.com/album/6XXGJ69eGc1pjZCWcPuKm3
https://open.spotify.com/artist/3QVolfxko2UyCOtexhVTli
https://open.spotify.com/track/3d1ZZs7GvwSN43muHqgPh1
https://open.spotify.com/episode/4UGL97d1NkhUN2wsd2Dzou
https://open.spotify.com/show/2kiOI0PCB2jXMU0cdqUy4z

{/* <!-- Playlists work with or without usernames: --> */}

https://open.spotify.com/user/username/playlist/37i9dQZF1E4uRSDrLkjaE9
https://open.spotify.com/playlist/37i9dQZF1E4uRSDrLkjaE9

{/* <!-- With or without HTTPS: --> */}

https://open.spotify.com/episode/4UGL97d1NkhUN2wsd2Dzou
http://open.spotify.com/episode/4UGL97d1NkhUN2wsd2Dzou

{/* <!-- URLs with extra parameters: --> */}

https://open.spotify.com/track/3d1ZZs7GvwSN43muHqgPh1?si=3qc9p-sGR3es3e8kkP9VFA

```


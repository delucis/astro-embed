# @astro-community/astro-embed-twitter

## 0.2.0

### Minor Changes

- [#25](https://github.com/astro-community/astro-embed/pull/25) [`194657d`](https://github.com/astro-community/astro-embed/commit/194657dabaad0aae7183698ee556d289ceed2da7) Thanks [@delucis](https://github.com/delucis)! - Migrate `<Tweet />` component to use Twitter API v2

  ⚠️ BREAKING CHANGE: The `<Tweet />` component now requires a bearer token to authorize with the Twitter API. Set your token as a `SECRET_TWITTER_TOKEN` environment variable.

## 0.1.3

### Patch Changes

- [`01ca843`](https://github.com/astro-community/astro-embed/commit/01ca8433c9110a164c45fe1784f48ee4324d8661) Thanks [@delucis](https://github.com/delucis)! - Add astro keywords to packages with .astro file exports (#13) — thanks @scottaw66!

## 0.1.2

### Patch Changes

- Updated dependencies [[`a3af6db`](https://github.com/astro-community/astro-embed/commit/a3af6db0b74002b6477ad243acf9078b6b243ce0)]:
  - @astro-community/astro-embed-utils@0.0.3

## 0.1.1

### Patch Changes

- [`b1286ff`](https://github.com/astro-community/astro-embed/commit/b1286ff5f989f423679a960ba11568af079c7fd5) Thanks [@delucis](https://github.com/delucis)! - Fix slight layout shift in `<Tweet />` header. Gets that Lighthouse performance score right up to 💯!

* [`4578f68`](https://github.com/astro-community/astro-embed/commit/4578f68a468e5b5d14e00e4945ebf69494d7a2ea) Thanks [@delucis](https://github.com/delucis)! - a11y: Don’t link to original Tweet from image grid

## 0.1.0

### Minor Changes

- [`1150c69`](https://github.com/astro-community/astro-embed/commit/1150c69099cca8dc15dc1492b0367e9ec7bf5cf9) Thanks [@delucis](https://github.com/delucis)! - Require peer dependency of astro@^1.0.0-beta.10

## 0.0.5

### Patch Changes

- [`4dca30d`](https://github.com/astro-community/astro-embed/commit/4dca30d6752359febaed0f01d2ca4e22a0a3dc34) Thanks [@delucis](https://github.com/delucis)! - Refactor to separate URL matcher from component

## 0.0.4

### Patch Changes

- [`0426265`](https://github.com/astro-community/astro-embed/commit/0426265413503db9f5dffc57f17b7f1c1e8b87ee) Thanks [@delucis](https://github.com/delucis)! - Move `safeGet` to a shared utils package

* [`0e7e632`](https://github.com/astro-community/astro-embed/commit/0e7e6327a0befba450d97bffd3b789fa6f3dd415) Thanks [@delucis](https://github.com/delucis)! - Lazy load Twitter avatar images

- [`da0cf79`](https://github.com/astro-community/astro-embed/commit/da0cf795f87cda1e478ecfa02e2492a7b405616e) Thanks [@delucis](https://github.com/delucis)! - Add `cite` attribute to blockquote in Tweet component

- Updated dependencies [[`0426265`](https://github.com/astro-community/astro-embed/commit/0426265413503db9f5dffc57f17b7f1c1e8b87ee)]:
  - @astro-community/astro-embed-utils@0.0.2

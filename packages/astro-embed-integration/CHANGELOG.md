# @astro-community/astro-embed-integration

## 0.3.0

### Minor Changes

- [#44](https://github.com/delucis/astro-embed/pull/44) [`db3dca2`](https://github.com/delucis/astro-embed/commit/db3dca2af19c98a210c5b26649f9299d7251f3a0) Thanks [@delucis](https://github.com/delucis)! - Support MDX in integration and drop support for injecting components into `.md` files

  **⚠️ BREAKING CHANGE** If you were relying on Astro-flavored Markdown support in `.md` files, you will need to convert those files to MDX and install the MDX integration.

* [#44](https://github.com/delucis/astro-embed/pull/44) [`db3dca2`](https://github.com/delucis/astro-embed/commit/db3dca2af19c98a210c5b26649f9299d7251f3a0) Thanks [@delucis](https://github.com/delucis)! - Drop support for Astro v1. Minimum required version of Astro is now 2.0.0

  **⚠️ BREAKING CHANGE** You will need to upgrade Astro to v2 to update to this version. This also means dropping support for Astro-flavored Markdown and `astro-embed` support in `.md` files. You can continue using components in content by [switching to MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/).

### Patch Changes

- Updated dependencies [[`db3dca2`](https://github.com/delucis/astro-embed/commit/db3dca2af19c98a210c5b26649f9299d7251f3a0)]:
  - @astro-community/astro-embed-twitter@0.3.0
  - @astro-community/astro-embed-vimeo@0.2.0
  - @astro-community/astro-embed-youtube@0.3.0

## 0.2.1

### Patch Changes

- [#36](https://github.com/delucis/astro-embed/pull/36) [`afce531`](https://github.com/delucis/astro-embed/commit/afce531e92efe4c14f48f7c0bfee0cf591dbfef2) Thanks [@ankushg](https://github.com/ankushg)! - Allow use with Astro v2

- Updated dependencies [[`afce531`](https://github.com/delucis/astro-embed/commit/afce531e92efe4c14f48f7c0bfee0cf591dbfef2)]:
  - @astro-community/astro-embed-twitter@0.2.2
  - @astro-community/astro-embed-vimeo@0.1.2
  - @astro-community/astro-embed-youtube@0.2.2

## 0.2.0

### Minor Changes

- [#25](https://github.com/delucis/astro-embed/pull/25) [`194657d`](https://github.com/delucis/astro-embed/commit/194657dabaad0aae7183698ee556d289ceed2da7) Thanks [@delucis](https://github.com/delucis)! - Migrate `<Tweet />` component to use Twitter API v2

  ⚠️ BREAKING CHANGE: The `<Tweet />` component now requires a bearer token to authorize with the Twitter API. Set your token as a `SECRET_TWITTER_TOKEN` environment variable.

### Patch Changes

- Updated dependencies [[`194657d`](https://github.com/delucis/astro-embed/commit/194657dabaad0aae7183698ee556d289ceed2da7)]:
  - @astro-community/astro-embed-twitter@0.2.0

## 0.1.2

### Patch Changes

- Updated dependencies [[`6694f6a`](https://github.com/delucis/astro-embed/commit/6694f6abbdc5f36a3a587071727b14207731d725), [`719e685`](https://github.com/delucis/astro-embed/commit/719e6859a1cc49a6a0441942d62882ec683dff5d)]:
  - @astro-community/astro-embed-youtube@0.2.0

## 0.1.1

### Patch Changes

- [`3950055`](https://github.com/delucis/astro-embed/commit/395005508d66555a23a35cc202d41b8081ee8b3d) Thanks [@delucis](https://github.com/delucis)! - Mention legacy flag in integration set-up guide

* [#19](https://github.com/delucis/astro-embed/pull/19) [`5b6efd0`](https://github.com/delucis/astro-embed/commit/5b6efd0d27c4a8b06035c070046c7d73d906f6c0) Thanks [@delucis](https://github.com/delucis)! - Add Vimeo embed support

* Updated dependencies [[`ecf1638`](https://github.com/delucis/astro-embed/commit/ecf1638e68f7c31ca6a4fcba1f0034bd6f661203), [`5b6efd0`](https://github.com/delucis/astro-embed/commit/5b6efd0d27c4a8b06035c070046c7d73d906f6c0)]:
  - @astro-community/astro-embed-youtube@0.1.2
  - @astro-community/astro-embed-vimeo@0.1.0

## 0.1.0

### Minor Changes

- [`1150c69`](https://github.com/delucis/astro-embed/commit/1150c69099cca8dc15dc1492b0367e9ec7bf5cf9) Thanks [@delucis](https://github.com/delucis)! - Require peer dependency of astro@^1.0.0-beta.10

### Patch Changes

- [`a155844`](https://github.com/delucis/astro-embed/commit/a155844bbf974c3cffddf6f1bb00d6f6cf09805f) Thanks [@delucis](https://github.com/delucis)! - Remove unnecessary `global` prefix on auto-imported components

- Updated dependencies [[`1de84e5`](https://github.com/delucis/astro-embed/commit/1de84e541dbb71fdbdf84212f0767bd17a304834), [`1150c69`](https://github.com/delucis/astro-embed/commit/1150c69099cca8dc15dc1492b0367e9ec7bf5cf9)]:
  - @astro-community/astro-embed-youtube@0.1.0
  - @astro-community/astro-embed-twitter@0.1.0

## 0.0.1

### Patch Changes

- [`8db1515`](https://github.com/delucis/astro-embed/commit/8db1515c23a160ead790063a54603a359c6ee661) Thanks [@delucis](https://github.com/delucis)! - Add Markdown integration for auto-embeds

- Updated dependencies [[`73cad90`](https://github.com/delucis/astro-embed/commit/73cad907749a9269b58b915718466eb8a327a9bf), [`4dca30d`](https://github.com/delucis/astro-embed/commit/4dca30d6752359febaed0f01d2ca4e22a0a3dc34)]:
  - @astro-community/astro-embed-youtube@0.0.4
  - @astro-community/astro-embed-twitter@0.0.5

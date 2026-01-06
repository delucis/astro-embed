# @astro-community/astro-embed-integration

## 0.10.0

### Minor Changes

- [#140](https://github.com/delucis/astro-embed/pull/140) [`30121f2`](https://github.com/delucis/astro-embed/commit/30121f2111d45325d76b20c5622a048f2d6e2cb1) Thanks [@HiDeoo](https://github.com/HiDeoo)! - Adds a new `MastodonPost` component for embedding posts to Mastodon servers

### Patch Changes

- Updated dependencies [[`30121f2`](https://github.com/delucis/astro-embed/commit/30121f2111d45325d76b20c5622a048f2d6e2cb1)]:
  - @astro-community/astro-embed-mastodon@0.1.0

## 0.9.0

### Minor Changes

- [#227](https://github.com/delucis/astro-embed/pull/227) [`a2201be`](https://github.com/delucis/astro-embed/commit/a2201be8335923af70452266b2d164c2e00b3a0d) Thanks [@delucis](https://github.com/delucis)! - Drops official support for Astro 2, 3, and 4. Use Astro 5 instead.

### Patch Changes

- Updated dependencies [[`101466c`](https://github.com/delucis/astro-embed/commit/101466c35630e2cd636f0efff2c811d77311dc00), [`a2201be`](https://github.com/delucis/astro-embed/commit/a2201be8335923af70452266b2d164c2e00b3a0d), [`a186fa1`](https://github.com/delucis/astro-embed/commit/a186fa149d3367d735db233a8f0954eba12bee99)]:
  - @astro-community/astro-embed-bluesky@0.1.6
  - @astro-community/astro-embed-twitter@0.5.10
  - @astro-community/astro-embed-youtube@0.5.10
  - @astro-community/astro-embed-vimeo@0.3.12
  - @astro-community/astro-embed-link-preview@0.3.0

## 0.8.3

### Patch Changes

- [#219](https://github.com/delucis/astro-embed/pull/219) [`d90ce7a`](https://github.com/delucis/astro-embed/commit/d90ce7aee92bcfafc66ae82a89a463dafed39992) Thanks [@delucis](https://github.com/delucis)! - No code changes. This release is the first published using OIDC trusted publisher configuration for improved security.

- Updated dependencies [[`d90ce7a`](https://github.com/delucis/astro-embed/commit/d90ce7aee92bcfafc66ae82a89a463dafed39992)]:
  - @astro-community/astro-embed-bluesky@0.1.5
  - @astro-community/astro-embed-link-preview@0.2.3
  - @astro-community/astro-embed-twitter@0.5.9
  - @astro-community/astro-embed-vimeo@0.3.11
  - @astro-community/astro-embed-youtube@0.5.9

## 0.8.2

### Patch Changes

- [#212](https://github.com/delucis/astro-embed/pull/212) [`b684968`](https://github.com/delucis/astro-embed/commit/b6849687f9a312e086b1a5269ae940fe42219942) Thanks [@delucis](https://github.com/delucis)! - Updates internal dependencies

- Updated dependencies [[`4668c58`](https://github.com/delucis/astro-embed/commit/4668c58036a1ed8f36287d8fc874a201f059a040)]:
  - @astro-community/astro-embed-youtube@0.5.8

## 0.8.1

### Patch Changes

- [#182](https://github.com/delucis/astro-embed/pull/182) [`8ff2793843c108ad5c22caf172aa0c966e2a8f69`](https://github.com/delucis/astro-embed/commit/8ff2793843c108ad5c22caf172aa0c966e2a8f69) Thanks [@DaniFoldi](https://github.com/DaniFoldi)! - fix: Add missing dependency to astro-embed-bluesky

## 0.8.0

### Minor Changes

- [#167](https://github.com/delucis/astro-embed/pull/167) [`22779f0a7b48283e4c6a71f7b01641d93fdb2a6f`](https://github.com/delucis/astro-embed/commit/22779f0a7b48283e4c6a71f7b01641d93fdb2a6f) Thanks [@ascorbic](https://github.com/ascorbic)! - Adds Bluesky Post embed

## 0.7.2

### Patch Changes

- [#148](https://github.com/delucis/astro-embed/pull/148) [`78346ae846925fa3ce90378d2f03c437620adcec`](https://github.com/delucis/astro-embed/commit/78346ae846925fa3ce90378d2f03c437620adcec) Thanks [@prototypa](https://github.com/prototypa)! - Adds support for Astro v5

- Updated dependencies [[`78346ae846925fa3ce90378d2f03c437620adcec`](https://github.com/delucis/astro-embed/commit/78346ae846925fa3ce90378d2f03c437620adcec)]:
  - @astro-community/astro-embed-twitter@0.5.5
  - @astro-community/astro-embed-vimeo@0.3.9
  - @astro-community/astro-embed-youtube@0.5.4

## 0.7.1

### Patch Changes

- [#121](https://github.com/delucis/astro-embed/pull/121) [`93a5ca7aeefab7514bcde86fbe080d404a3169f8`](https://github.com/delucis/astro-embed/commit/93a5ca7aeefab7514bcde86fbe080d404a3169f8) Thanks [@delucis](https://github.com/delucis)! - Fixes an issue where the integration would match links that take up an entire paragraph even if they included a custom link.

  For example, `[Check it out!](https://example.com)` would be converted to a `<LinkPreview>` component instead of rendering an `<a>` tag. This is now fixed and only plain URLs like `https://example.com` will match.

- Updated dependencies [[`732a6cfac5038f82ccdd4df7c2dacf036deceae5`](https://github.com/delucis/astro-embed/commit/732a6cfac5038f82ccdd4df7c2dacf036deceae5)]:
  - @astro-community/astro-embed-link-preview@0.2.0

## 0.7.0

### Minor Changes

- [#73](https://github.com/delucis/astro-embed/pull/73) [`495cf6fb66e4fd7ca6b25ae8c95078d268b1c078`](https://github.com/delucis/astro-embed/commit/495cf6fb66e4fd7ca6b25ae8c95078d268b1c078) Thanks [@vasfvitor](https://github.com/vasfvitor)! - Adds a new `<LinkPreview>` component for rendering Open Graph media and metadata

### Patch Changes

- [#73](https://github.com/delucis/astro-embed/pull/73) [`495cf6fb66e4fd7ca6b25ae8c95078d268b1c078`](https://github.com/delucis/astro-embed/commit/495cf6fb66e4fd7ca6b25ae8c95078d268b1c078) Thanks [@vasfvitor](https://github.com/vasfvitor)! - Adds a `services` option to the Astro Embed integration to support disabling specific services.

- Updated dependencies [[`495cf6fb66e4fd7ca6b25ae8c95078d268b1c078`](https://github.com/delucis/astro-embed/commit/495cf6fb66e4fd7ca6b25ae8c95078d268b1c078), [`929b1eeef166dfbd21c9dcaf64d2427f549548da`](https://github.com/delucis/astro-embed/commit/929b1eeef166dfbd21c9dcaf64d2427f549548da)]:
  - @astro-community/astro-embed-link-preview@0.1.0
  - @astro-community/astro-embed-vimeo@0.3.6

## 0.6.2

### Patch Changes

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Simplifies README.md to link to docs site

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Updates documentation links in `package.json`

- Updated dependencies [[`4d7c9f334b61d3e7f73d230b149645da6e7a4b37`](https://github.com/delucis/astro-embed/commit/4d7c9f334b61d3e7f73d230b149645da6e7a4b37), [`c6939bc60dff6c30c9389a4f220a15b4aefe3ece`](https://github.com/delucis/astro-embed/commit/c6939bc60dff6c30c9389a4f220a15b4aefe3ece), [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7), [`4d7c9f334b61d3e7f73d230b149645da6e7a4b37`](https://github.com/delucis/astro-embed/commit/4d7c9f334b61d3e7f73d230b149645da6e7a4b37), [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7)]:
  - @astro-community/astro-embed-youtube@0.5.0
  - @astro-community/astro-embed-vimeo@0.3.4
  - @astro-community/astro-embed-twitter@0.5.4

## 0.6.1

### Patch Changes

- [#77](https://github.com/delucis/astro-embed/pull/77) [`b0f153d`](https://github.com/delucis/astro-embed/commit/b0f153dd414985abb49916cdd8a581580095e863) Thanks [@silent1mezzo](https://github.com/silent1mezzo)! - Adds support for a peer dependency of Astro 4

- Updated dependencies [[`b0f153d`](https://github.com/delucis/astro-embed/commit/b0f153dd414985abb49916cdd8a581580095e863)]:
  - @astro-community/astro-embed-twitter@0.5.3
  - @astro-community/astro-embed-vimeo@0.3.2
  - @astro-community/astro-embed-youtube@0.4.3

## 0.6.0

### Minor Changes

- [#69](https://github.com/delucis/astro-embed/pull/69) [`58c3d80`](https://github.com/delucis/astro-embed/commit/58c3d8069f37996d4cf79394c56e6fda532e6886) Thanks [@delucis](https://github.com/delucis)! - Error if astro-embed integration is configured after the MDX integration

* [#66](https://github.com/delucis/astro-embed/pull/66) [`9fba8ef`](https://github.com/delucis/astro-embed/commit/9fba8ef667e28edba793a4941163f2f5b48fb1df) Thanks [@delucis](https://github.com/delucis)! - MDX integration embeds replace their parent paragraph instead of their link node

  ⚠️ **Potentially breaking change:** embeds automatically injected in MDX using the Astro integration were previously wrapped in a `<p>` tag.
  This is no longer the case. This may cause changes in vertical spacing between embeds depending on your site’s CSS.

### Patch Changes

- Updated dependencies [[`18e7921`](https://github.com/delucis/astro-embed/commit/18e792114abd4588f29e2d61c5c6d05c30888335)]:
  - @astro-community/astro-embed-twitter@0.5.2

## 0.5.1

### Patch Changes

- [#55](https://github.com/delucis/astro-embed/pull/55) [`495abf3`](https://github.com/delucis/astro-embed/commit/495abf3dd9ae5bfaf36d9d3b8bb7fe98833c0303) Thanks [@Marocco2](https://github.com/Marocco2)! - Add Astro v3 support

- Updated dependencies [[`495abf3`](https://github.com/delucis/astro-embed/commit/495abf3dd9ae5bfaf36d9d3b8bb7fe98833c0303)]:
  - @astro-community/astro-embed-twitter@0.5.1
  - @astro-community/astro-embed-vimeo@0.3.1
  - @astro-community/astro-embed-youtube@0.4.1

## 0.5.0

### Minor Changes

- [#50](https://github.com/delucis/astro-embed/pull/50) [`744ddc8`](https://github.com/delucis/astro-embed/commit/744ddc8c3a5af1201dbee1cf2e042dbb60a74740) Thanks [@delucis](https://github.com/delucis)! - Convert all files to TypeScript to provide full type information to users

### Patch Changes

- Updated dependencies [[`744ddc8`](https://github.com/delucis/astro-embed/commit/744ddc8c3a5af1201dbee1cf2e042dbb60a74740)]:
  - @astro-community/astro-embed-twitter@0.5.0
  - @astro-community/astro-embed-vimeo@0.3.0
  - @astro-community/astro-embed-youtube@0.4.0

## 0.4.0

### Minor Changes

- [#46](https://github.com/delucis/astro-embed/pull/46) [`3494d64`](https://github.com/delucis/astro-embed/commit/3494d642e5f56e5ad3695095be2b92b377f68761) Thanks [@delucis](https://github.com/delucis)! - Switch to more basic Twitter component that does not require authentication

  **⚠️ BREAKING CHANGE** Due to upheaval at Twitter, the `<Tweet />` component is no longer able to fetch detailed information from Twitter’s API, limiting what a static embed can easily do.

  Key differences:
  - The `<Tweet />` component must now receive a full URL to a tweet, not just an ID. You will need to update these if you have any:

    ```diff
    - <Tweet id="1511750228428435457" />
    + <Tweet id="https://twitter.com/astrodotbuild/status/1511750228428435457" />
    ```

  - The rendered component is more minimal: no avatar for the tweet author; no header containing author name and handle; images and video are not expanded, only showing as links

  - The CSS class name on the resulting HTML is now `twitter-tweet` instead of `tweet-card` and none of the internal class names like `tweet-author`, `tweet-header` etc. are available. If you set any custom CSS to control appearance, this will likely need updating.

  - Authentication is no longer required. If you previously configured a `SECRET_TWITTER_TOKEN` environment variable, you can safely remove it from your project.

### Patch Changes

- Updated dependencies [[`3494d64`](https://github.com/delucis/astro-embed/commit/3494d642e5f56e5ad3695095be2b92b377f68761)]:
  - @astro-community/astro-embed-twitter@0.4.0

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

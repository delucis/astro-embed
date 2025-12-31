# @astro-community/astro-embed-twitter

## 0.5.9

### Patch Changes

- [#219](https://github.com/delucis/astro-embed/pull/219) [`d90ce7a`](https://github.com/delucis/astro-embed/commit/d90ce7aee92bcfafc66ae82a89a463dafed39992) Thanks [@delucis](https://github.com/delucis)! - No code changes. This release is the first published using OIDC trusted publisher configuration for improved security.

- Updated dependencies [[`d90ce7a`](https://github.com/delucis/astro-embed/commit/d90ce7aee92bcfafc66ae82a89a463dafed39992)]:
  - @astro-community/astro-embed-utils@0.1.5

## 0.5.8

### Patch Changes

- [#161](https://github.com/delucis/astro-embed/pull/161) [`a024bf2072062d142a193826b24d22cd8c8dd0c2`](https://github.com/delucis/astro-embed/commit/a024bf2072062d142a193826b24d22cd8c8dd0c2) Thanks [@flo-bit](https://github.com/flo-bit)! - Fixes support for newer `x.com` URLs

## 0.5.7

### Patch Changes

- [#155](https://github.com/delucis/astro-embed/pull/155) [`11f10861177beb06fc80137e1ca918b08f317bd0`](https://github.com/delucis/astro-embed/commit/11f10861177beb06fc80137e1ca918b08f317bd0) Thanks [@anotheri](https://github.com/anotheri)! - Adds `theme` prop support to `Tweet` component

## 0.5.6

### Patch Changes

- [`91e70e72e1f3efe2db37e9de1e721eaabfd292bc`](https://github.com/delucis/astro-embed/commit/91e70e72e1f3efe2db37e9de1e721eaabfd292bc) Thanks [@delucis](https://github.com/delucis)! - Add additional `ui` keyword for better categorization in Astro’s integrations library

## 0.5.5

### Patch Changes

- [#148](https://github.com/delucis/astro-embed/pull/148) [`78346ae846925fa3ce90378d2f03c437620adcec`](https://github.com/delucis/astro-embed/commit/78346ae846925fa3ce90378d2f03c437620adcec) Thanks [@prototypa](https://github.com/prototypa)! - Adds support for Astro v5

## 0.5.4

### Patch Changes

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Simplifies README.md to link to docs site

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Updates documentation links in `package.json`

## 0.5.3

### Patch Changes

- [#77](https://github.com/delucis/astro-embed/pull/77) [`b0f153d`](https://github.com/delucis/astro-embed/commit/b0f153dd414985abb49916cdd8a581580095e863) Thanks [@silent1mezzo](https://github.com/silent1mezzo)! - Adds support for a peer dependency of Astro 4

## 0.5.2

### Patch Changes

- [#67](https://github.com/delucis/astro-embed/pull/67) [`18e7921`](https://github.com/delucis/astro-embed/commit/18e792114abd4588f29e2d61c5c6d05c30888335) Thanks [@delucis](https://github.com/delucis)! - Remove unused JavaScript from Tweet component

## 0.5.1

### Patch Changes

- [#55](https://github.com/delucis/astro-embed/pull/55) [`495abf3`](https://github.com/delucis/astro-embed/commit/495abf3dd9ae5bfaf36d9d3b8bb7fe98833c0303) Thanks [@Marocco2](https://github.com/Marocco2)! - Add Astro v3 support

## 0.5.0

### Minor Changes

- [#50](https://github.com/delucis/astro-embed/pull/50) [`744ddc8`](https://github.com/delucis/astro-embed/commit/744ddc8c3a5af1201dbee1cf2e042dbb60a74740) Thanks [@delucis](https://github.com/delucis)! - Convert all files to TypeScript to provide full type information to users

### Patch Changes

- Updated dependencies [[`744ddc8`](https://github.com/delucis/astro-embed/commit/744ddc8c3a5af1201dbee1cf2e042dbb60a74740)]:
  - @astro-community/astro-embed-utils@0.1.0

## 0.4.1

### Patch Changes

- [#48](https://github.com/delucis/astro-embed/pull/48) [`b4c0fa6`](https://github.com/delucis/astro-embed/commit/b4c0fa649b6c042a67723b6c1f3c969a4a4686b2) Thanks [@delucis](https://github.com/delucis)! - Remove unused Twitter API SDK dependency

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

## 0.3.0

### Minor Changes

- [#44](https://github.com/delucis/astro-embed/pull/44) [`db3dca2`](https://github.com/delucis/astro-embed/commit/db3dca2af19c98a210c5b26649f9299d7251f3a0) Thanks [@delucis](https://github.com/delucis)! - Drop support for Astro v1. Minimum required version of Astro is now 2.0.0

  **⚠️ BREAKING CHANGE** You will need to upgrade Astro to v2 to update to this version. This also means dropping support for Astro-flavored Markdown and `astro-embed` support in `.md` files. You can continue using components in content by [switching to MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/).

## 0.2.2

### Patch Changes

- [#36](https://github.com/delucis/astro-embed/pull/36) [`afce531`](https://github.com/delucis/astro-embed/commit/afce531e92efe4c14f48f7c0bfee0cf591dbfef2) Thanks [@ankushg](https://github.com/ankushg)! - Allow use with Astro v2

## 0.2.1

### Patch Changes

- [#28](https://github.com/delucis/astro-embed/pull/28) [`d140e1f`](https://github.com/delucis/astro-embed/commit/d140e1fa3128dca28c533e71cb56c3cee7a61235) Thanks [@nirtamir2](https://github.com/nirtamir2)! - Check `entities` is defined before reading from it

## 0.2.0

### Minor Changes

- [#25](https://github.com/delucis/astro-embed/pull/25) [`194657d`](https://github.com/delucis/astro-embed/commit/194657dabaad0aae7183698ee556d289ceed2da7) Thanks [@delucis](https://github.com/delucis)! - Migrate `<Tweet />` component to use Twitter API v2

  ⚠️ BREAKING CHANGE: The `<Tweet />` component now requires a bearer token to authorize with the Twitter API. Set your token as a `SECRET_TWITTER_TOKEN` environment variable.

## 0.1.3

### Patch Changes

- [`01ca843`](https://github.com/delucis/astro-embed/commit/01ca8433c9110a164c45fe1784f48ee4324d8661) Thanks [@delucis](https://github.com/delucis)! - Add astro keywords to packages with .astro file exports (#13) — thanks @scottaw66!

## 0.1.2

### Patch Changes

- Updated dependencies [[`a3af6db`](https://github.com/delucis/astro-embed/commit/a3af6db0b74002b6477ad243acf9078b6b243ce0)]:
  - @astro-community/astro-embed-utils@0.0.3

## 0.1.1

### Patch Changes

- [`b1286ff`](https://github.com/delucis/astro-embed/commit/b1286ff5f989f423679a960ba11568af079c7fd5) Thanks [@delucis](https://github.com/delucis)! - Fix slight layout shift in `<Tweet />` header. Gets that Lighthouse performance score right up to 💯!

* [`4578f68`](https://github.com/delucis/astro-embed/commit/4578f68a468e5b5d14e00e4945ebf69494d7a2ea) Thanks [@delucis](https://github.com/delucis)! - a11y: Don’t link to original Tweet from image grid

## 0.1.0

### Minor Changes

- [`1150c69`](https://github.com/delucis/astro-embed/commit/1150c69099cca8dc15dc1492b0367e9ec7bf5cf9) Thanks [@delucis](https://github.com/delucis)! - Require peer dependency of astro@^1.0.0-beta.10

## 0.0.5

### Patch Changes

- [`4dca30d`](https://github.com/delucis/astro-embed/commit/4dca30d6752359febaed0f01d2ca4e22a0a3dc34) Thanks [@delucis](https://github.com/delucis)! - Refactor to separate URL matcher from component

## 0.0.4

### Patch Changes

- [`0426265`](https://github.com/delucis/astro-embed/commit/0426265413503db9f5dffc57f17b7f1c1e8b87ee) Thanks [@delucis](https://github.com/delucis)! - Move `safeGet` to a shared utils package

* [`0e7e632`](https://github.com/delucis/astro-embed/commit/0e7e6327a0befba450d97bffd3b789fa6f3dd415) Thanks [@delucis](https://github.com/delucis)! - Lazy load Twitter avatar images

- [`da0cf79`](https://github.com/delucis/astro-embed/commit/da0cf795f87cda1e478ecfa02e2492a7b405616e) Thanks [@delucis](https://github.com/delucis)! - Add `cite` attribute to blockquote in Tweet component

- Updated dependencies [[`0426265`](https://github.com/delucis/astro-embed/commit/0426265413503db9f5dffc57f17b7f1c1e8b87ee)]:
  - @astro-community/astro-embed-utils@0.0.2

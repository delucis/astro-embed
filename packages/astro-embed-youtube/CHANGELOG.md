# @astro-community/astro-embed-youtube

## 0.5.10

### Patch Changes

- [#227](https://github.com/delucis/astro-embed/pull/227) [`a2201be`](https://github.com/delucis/astro-embed/commit/a2201be8335923af70452266b2d164c2e00b3a0d) Thanks [@delucis](https://github.com/delucis)! - Removes unnecessary `astro` peer dependency

## 0.5.9

### Patch Changes

- [#219](https://github.com/delucis/astro-embed/pull/219) [`d90ce7a`](https://github.com/delucis/astro-embed/commit/d90ce7aee92bcfafc66ae82a89a463dafed39992) Thanks [@delucis](https://github.com/delucis)! - No code changes. This release is the first published using OIDC trusted publisher configuration for improved security.

## 0.5.8

### Patch Changes

- [#217](https://github.com/delucis/astro-embed/pull/217) [`4668c58`](https://github.com/delucis/astro-embed/commit/4668c58036a1ed8f36287d8fc874a201f059a040) Thanks [@Mikescops](https://github.com/Mikescops)! - Fixes compatibility with the latest release of `lite-youtube-embed` to make sure the play button displays

## 0.5.7

### Patch Changes

- [#202](https://github.com/delucis/astro-embed/pull/202) [`c00ac0ab0253d7439d57de0b986317f55c66f291`](https://github.com/delucis/astro-embed/commit/c00ac0ab0253d7439d57de0b986317f55c66f291) Thanks [@echolocator](https://github.com/echolocator)! - Add support for `style` attribute in `<YouTube>` component

## 0.5.6

### Patch Changes

- [#165](https://github.com/delucis/astro-embed/pull/165) [`a97b51bbeba66f94aea8bfc07f115c1f201aa4ef`](https://github.com/delucis/astro-embed/commit/a97b51bbeba66f94aea8bfc07f115c1f201aa4ef) Thanks [@anotheri](https://github.com/anotheri)! - Fixes missing accessible name for `<YouTube>` component play button

## 0.5.5

### Patch Changes

- [`91e70e72e1f3efe2db37e9de1e721eaabfd292bc`](https://github.com/delucis/astro-embed/commit/91e70e72e1f3efe2db37e9de1e721eaabfd292bc) Thanks [@delucis](https://github.com/delucis)! - Add additional `ui` keyword for better categorization in Astro’s integrations library

## 0.5.4

### Patch Changes

- [#148](https://github.com/delucis/astro-embed/pull/148) [`78346ae846925fa3ce90378d2f03c437620adcec`](https://github.com/delucis/astro-embed/commit/78346ae846925fa3ce90378d2f03c437620adcec) Thanks [@prototypa](https://github.com/prototypa)! - Adds support for Astro v5

## 0.5.3

### Patch Changes

- [#138](https://github.com/delucis/astro-embed/pull/138) [`e74c4233c5e2bb088e6bca642b09a5a6ef5f9df7`](https://github.com/delucis/astro-embed/commit/e74c4233c5e2bb088e6bca642b09a5a6ef5f9df7) Thanks [@delucis](https://github.com/delucis)! - Fixes accessibility of play button in YouTube embed by upgrading `lite-youtube-embed`

## 0.5.2

### Patch Changes

- [#117](https://github.com/delucis/astro-embed/pull/117) [`c16d622eca47cd08d9455cc8be3a2a688f07c145`](https://github.com/delucis/astro-embed/commit/c16d622eca47cd08d9455cc8be3a2a688f07c145) Thanks [@jrouleau](https://github.com/jrouleau)! - Revert to `jpg` for `<YouTube>` poster

## 0.5.1

### Patch Changes

- [#104](https://github.com/delucis/astro-embed/pull/104) [`7e4fa54f6d75df3d87d14857306b26bf9036913a`](https://github.com/delucis/astro-embed/commit/7e4fa54f6d75df3d87d14857306b26bf9036913a) Thanks [@delucis](https://github.com/delucis)! - Adds a new `posterQuality` prop to the `<YouTube>` component to control the resolution of the poster image.

- [#106](https://github.com/delucis/astro-embed/pull/106) [`add2a1e6afd3f1c9fdb6608037d1e0e7698e6c41`](https://github.com/delucis/astro-embed/commit/add2a1e6afd3f1c9fdb6608037d1e0e7698e6c41) Thanks [@delucis](https://github.com/delucis)! - Improves support for the `title` attribute in the YouTube component

## 0.5.0

### Minor Changes

- [#102](https://github.com/delucis/astro-embed/pull/102) [`4d7c9f334b61d3e7f73d230b149645da6e7a4b37`](https://github.com/delucis/astro-embed/commit/4d7c9f334b61d3e7f73d230b149645da6e7a4b37) Thanks [@delucis](https://github.com/delucis)! - Uses the WebP version of YouTube poster images by default for smaller file size.

- [#102](https://github.com/delucis/astro-embed/pull/102) [`4d7c9f334b61d3e7f73d230b149645da6e7a4b37`](https://github.com/delucis/astro-embed/commit/4d7c9f334b61d3e7f73d230b149645da6e7a4b37) Thanks [@delucis](https://github.com/delucis)! - Uses a progressive enhancement pattern to improve YouTube component experience for users with JavaScript disabled

  `<YouTube>` now renders its play button as a link to the video. This means if JavaScript is disabled or fails to load, users can still click through to the original video.

### Patch Changes

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Simplifies README.md to link to docs site

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Updates documentation links in `package.json`

## 0.4.5

### Patch Changes

- [#93](https://github.com/delucis/astro-embed/pull/93) [`40ec350`](https://github.com/delucis/astro-embed/commit/40ec350dae316cfa02674eb9a8f24be2e709e2ac) Thanks [@delucis](https://github.com/delucis)! - Updates internal `lite-youtube-embed` dependency from 0.2.0 to 0.3.2

## 0.4.4

### Patch Changes

- [#86](https://github.com/delucis/astro-embed/pull/86) [`ee42a36`](https://github.com/delucis/astro-embed/commit/ee42a36f3fb36921a526d9774fc6f95160013b6d) Thanks [@delucis](https://github.com/delucis)! - Add support for `/shorts/` URLs in YouTube URL matcher

## 0.4.3

### Patch Changes

- [#77](https://github.com/delucis/astro-embed/pull/77) [`b0f153d`](https://github.com/delucis/astro-embed/commit/b0f153dd414985abb49916cdd8a581580095e863) Thanks [@silent1mezzo](https://github.com/silent1mezzo)! - Adds support for a peer dependency of Astro 4

## 0.4.2

### Patch Changes

- [#74](https://github.com/delucis/astro-embed/pull/74) [`d415ab9`](https://github.com/delucis/astro-embed/commit/d415ab9a420aab67ff3816b58b70442ae961d9f3) Thanks [@vasfvitor](https://github.com/vasfvitor)! - Fix YouTube embed styling in environments that already apply `<iframe>` styles

## 0.4.1

### Patch Changes

- [#55](https://github.com/delucis/astro-embed/pull/55) [`495abf3`](https://github.com/delucis/astro-embed/commit/495abf3dd9ae5bfaf36d9d3b8bb7fe98833c0303) Thanks [@Marocco2](https://github.com/Marocco2)! - Add Astro v3 support

## 0.4.0

### Minor Changes

- [#50](https://github.com/delucis/astro-embed/pull/50) [`744ddc8`](https://github.com/delucis/astro-embed/commit/744ddc8c3a5af1201dbee1cf2e042dbb60a74740) Thanks [@delucis](https://github.com/delucis)! - Convert all files to TypeScript to provide full type information to users

## 0.3.0

### Minor Changes

- [#44](https://github.com/delucis/astro-embed/pull/44) [`db3dca2`](https://github.com/delucis/astro-embed/commit/db3dca2af19c98a210c5b26649f9299d7251f3a0) Thanks [@delucis](https://github.com/delucis)! - Drop support for Astro v1. Minimum required version of Astro is now 2.0.0

  **⚠️ BREAKING CHANGE** You will need to upgrade Astro to v2 to update to this version. This also means dropping support for Astro-flavored Markdown and `astro-embed` support in `.md` files. You can continue using components in content by [switching to MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/).

## 0.2.2

### Patch Changes

- [#36](https://github.com/delucis/astro-embed/pull/36) [`afce531`](https://github.com/delucis/astro-embed/commit/afce531e92efe4c14f48f7c0bfee0cf591dbfef2) Thanks [@ankushg](https://github.com/ankushg)! - Allow use with Astro v2

## 0.2.1

### Patch Changes

- [`cb43356`](https://github.com/delucis/astro-embed/commit/cb433565134f2c26565c5024f89e5ab0994c6d2c) Thanks [@delucis](https://github.com/delucis)! - Revert erroneous type fix

## 0.2.0

### Minor Changes

- [`719e685`](https://github.com/delucis/astro-embed/commit/719e6859a1cc49a6a0441942d62882ec683dff5d) Thanks [@delucis](https://github.com/delucis)! - Switch to using a hoisted import for YouTube custom element

### Patch Changes

- [`6694f6a`](https://github.com/delucis/astro-embed/commit/6694f6abbdc5f36a3a587071727b14207731d725) Thanks [@delucis](https://github.com/delucis)! - Fix type error in YouTube component

## 0.1.2

### Patch Changes

- [`ecf1638`](https://github.com/delucis/astro-embed/commit/ecf1638e68f7c31ca6a4fcba1f0034bd6f661203) Thanks [@delucis](https://github.com/delucis)! - Improved type for `<Youtube>` props

## 0.1.1

### Patch Changes

- [`01ca843`](https://github.com/delucis/astro-embed/commit/01ca8433c9110a164c45fe1784f48ee4324d8661) Thanks [@delucis](https://github.com/delucis)! - Add astro keywords to packages with .astro file exports (#13) — thanks @scottaw66!

## 0.1.0

### Minor Changes

- [`1150c69`](https://github.com/delucis/astro-embed/commit/1150c69099cca8dc15dc1492b0367e9ec7bf5cf9) Thanks [@delucis](https://github.com/delucis)! - Require peer dependency of astro@^1.0.0-beta.10

### Patch Changes

- [`1de84e5`](https://github.com/delucis/astro-embed/commit/1de84e541dbb71fdbdf84212f0767bd17a304834) Thanks [@delucis](https://github.com/delucis)! - Remove empty fragment hack now that withastro/astro#3070 is fixed

## 0.0.4

### Patch Changes

- [`73cad90`](https://github.com/delucis/astro-embed/commit/73cad907749a9269b58b915718466eb8a327a9bf) Thanks [@delucis](https://github.com/delucis)! - Refactor to separate URL matcher from component

## 0.0.3

### Patch Changes

- [`2ef6aaf`](https://github.com/delucis/astro-embed/commit/2ef6aafda66632c4028a409b8f1c3a1e78b20586) Thanks [@delucis](https://github.com/delucis)! - Use fragment instead of span to avoid withastro/astro#3070

## 0.0.2

### Patch Changes

- [#4](https://github.com/delucis/astro-embed/pull/4) [`853fd18`](https://github.com/delucis/astro-embed/commit/853fd18441ae99f3caab6ef8e55e1998bdd08584) Thanks [@delucis](https://github.com/delucis)! - Add astro-embed-youtube

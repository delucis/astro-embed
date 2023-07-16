# @astro-community/astro-embed-youtube

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

# @astro-community/astro-embed-vimeo

## 0.3.11

### Patch Changes

- [#219](https://github.com/delucis/astro-embed/pull/219) [`d90ce7a`](https://github.com/delucis/astro-embed/commit/d90ce7aee92bcfafc66ae82a89a463dafed39992) Thanks [@delucis](https://github.com/delucis)! - No code changes. This release is the first published using OIDC trusted publisher configuration for improved security.

- Updated dependencies [[`d90ce7a`](https://github.com/delucis/astro-embed/commit/d90ce7aee92bcfafc66ae82a89a463dafed39992)]:
  - @astro-community/astro-embed-utils@0.1.5

## 0.3.10

### Patch Changes

- [`91e70e72e1f3efe2db37e9de1e721eaabfd292bc`](https://github.com/delucis/astro-embed/commit/91e70e72e1f3efe2db37e9de1e721eaabfd292bc) Thanks [@delucis](https://github.com/delucis)! - Add additional `ui` keyword for better categorization in Astro’s integrations library

## 0.3.9

### Patch Changes

- [#148](https://github.com/delucis/astro-embed/pull/148) [`78346ae846925fa3ce90378d2f03c437620adcec`](https://github.com/delucis/astro-embed/commit/78346ae846925fa3ce90378d2f03c437620adcec) Thanks [@prototypa](https://github.com/prototypa)! - Adds support for Astro v5

## 0.3.8

### Patch Changes

- [#142](https://github.com/delucis/astro-embed/pull/142) [`5227cf6fa58ab372d08e5efba707caad8db254a5`](https://github.com/delucis/astro-embed/commit/5227cf6fa58ab372d08e5efba707caad8db254a5) Thanks [@BryceRussell](https://github.com/BryceRussell)! - Fix issue with invalid Vimeo links causing build errors

## 0.3.7

### Patch Changes

- [#113](https://github.com/delucis/astro-embed/pull/113) [`17d556e9acb33635a75a5e3c75a84c2ba7849f12`](https://github.com/delucis/astro-embed/commit/17d556e9acb33635a75a5e3c75a84c2ba7849f12) Thanks [@KristianH](https://github.com/KristianH)! - Add `astro-embed-utils` as dependency to package `astro-embed-vimeo`

## 0.3.6

### Patch Changes

- [`929b1eeef166dfbd21c9dcaf64d2427f549548da`](https://github.com/delucis/astro-embed/commit/929b1eeef166dfbd21c9dcaf64d2427f549548da) Thanks [@delucis](https://github.com/delucis)! - Fix play button layout bug on Firefox

## 0.3.5

### Patch Changes

- [#107](https://github.com/delucis/astro-embed/pull/107) [`2bf675cc53fa2a8559182c33f646a412a94016ec`](https://github.com/delucis/astro-embed/commit/2bf675cc53fa2a8559182c33f646a412a94016ec) Thanks [@delucis](https://github.com/delucis)! - Tweaks the play button styles to match Vimeo style more closely

- [#107](https://github.com/delucis/astro-embed/pull/107) [`2bf675cc53fa2a8559182c33f646a412a94016ec`](https://github.com/delucis/astro-embed/commit/2bf675cc53fa2a8559182c33f646a412a94016ec) Thanks [@delucis](https://github.com/delucis)! - Uses progressive enhancement pattern to display a link to the Vimeo video until the `<lite-vimeo>` JavaScript loads

- [#107](https://github.com/delucis/astro-embed/pull/107) [`2bf675cc53fa2a8559182c33f646a412a94016ec`](https://github.com/delucis/astro-embed/commit/2bf675cc53fa2a8559182c33f646a412a94016ec) Thanks [@delucis](https://github.com/delucis)! - Adds a `posterQuality` prop to `<Vimeo>`

  The new default resolution is 480px instead of 640px. Set `posterQuality="high"` to use the previous 640px resolution.

- [#83](https://github.com/delucis/astro-embed/pull/83) [`3b4ecfacb83cb4bc07aeb3742ceee8bbe809ba6b`](https://github.com/delucis/astro-embed/commit/3b4ecfacb83cb4bc07aeb3742ceee8bbe809ba6b) Thanks [@hesselberg](https://github.com/hesselberg)! - Adds support for passing arbitrary props to the `<lite-vimeo>` element

## 0.3.4

### Patch Changes

- [#103](https://github.com/delucis/astro-embed/pull/103) [`c6939bc60dff6c30c9389a4f220a15b4aefe3ece`](https://github.com/delucis/astro-embed/commit/c6939bc60dff6c30c9389a4f220a15b4aefe3ece) Thanks [@delucis](https://github.com/delucis)! - Fixes risk of Vimeo custom element trying to redefine itself

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Simplifies README.md to link to docs site

- [#100](https://github.com/delucis/astro-embed/pull/100) [`39e3d162b1e380c85e451b37001d82c7813794e7`](https://github.com/delucis/astro-embed/commit/39e3d162b1e380c85e451b37001d82c7813794e7) Thanks [@delucis](https://github.com/delucis)! - Updates documentation links in `package.json`

## 0.3.3

### Patch Changes

- [#97](https://github.com/delucis/astro-embed/pull/97) [`77a1228b9a2057b59194b649b6d203a3e8d15e13`](https://github.com/delucis/astro-embed/commit/77a1228b9a2057b59194b649b6d203a3e8d15e13) Thanks [@delucis](https://github.com/delucis)! - Fixes styling for the Vimeo `<iframe>` so user styles don’t override it

## 0.3.2

### Patch Changes

- [#77](https://github.com/delucis/astro-embed/pull/77) [`b0f153d`](https://github.com/delucis/astro-embed/commit/b0f153dd414985abb49916cdd8a581580095e863) Thanks [@silent1mezzo](https://github.com/silent1mezzo)! - Adds support for a peer dependency of Astro 4

## 0.3.1

### Patch Changes

- [#55](https://github.com/delucis/astro-embed/pull/55) [`495abf3`](https://github.com/delucis/astro-embed/commit/495abf3dd9ae5bfaf36d9d3b8bb7fe98833c0303) Thanks [@Marocco2](https://github.com/Marocco2)! - Add Astro v3 support

## 0.3.0

### Minor Changes

- [#50](https://github.com/delucis/astro-embed/pull/50) [`744ddc8`](https://github.com/delucis/astro-embed/commit/744ddc8c3a5af1201dbee1cf2e042dbb60a74740) Thanks [@delucis](https://github.com/delucis)! - Convert all files to TypeScript to provide full type information to users

## 0.2.1

### Patch Changes

- [#48](https://github.com/delucis/astro-embed/pull/48) [`b4c0fa6`](https://github.com/delucis/astro-embed/commit/b4c0fa649b6c042a67723b6c1f3c969a4a4686b2) Thanks [@delucis](https://github.com/delucis)! - Remove unused lite-vimeo-embed dependency

## 0.2.0

### Minor Changes

- [#44](https://github.com/delucis/astro-embed/pull/44) [`db3dca2`](https://github.com/delucis/astro-embed/commit/db3dca2af19c98a210c5b26649f9299d7251f3a0) Thanks [@delucis](https://github.com/delucis)! - Drop support for Astro v1. Minimum required version of Astro is now 2.0.0

  **⚠️ BREAKING CHANGE** You will need to upgrade Astro to v2 to update to this version. This also means dropping support for Astro-flavored Markdown and `astro-embed` support in `.md` files. You can continue using components in content by [switching to MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/).

## 0.1.2

### Patch Changes

- [#36](https://github.com/delucis/astro-embed/pull/36) [`afce531`](https://github.com/delucis/astro-embed/commit/afce531e92efe4c14f48f7c0bfee0cf591dbfef2) Thanks [@ankushg](https://github.com/ankushg)! - Allow use with Astro v2

## 0.1.1

### Patch Changes

- [`d2d10b4`](https://github.com/delucis/astro-embed/commit/d2d10b495baca58bae023780260bf88d5bba6f65) Thanks [@delucis](https://github.com/delucis)! - Include `Vimeo.css` in npm bundle!

## 0.1.0

### Minor Changes

- [#19](https://github.com/delucis/astro-embed/pull/19) [`5b6efd0`](https://github.com/delucis/astro-embed/commit/5b6efd0d27c4a8b06035c070046c7d73d906f6c0) Thanks [@delucis](https://github.com/delucis)! - Add Vimeo embed support

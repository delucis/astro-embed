# Contributing

👋 Hi there! Welcome! Thanks for your interest in contributing to `astro-embed`.

We welcome all kinds of contributions, from one-line bug fixes or updates to documentation, to adding entire new packages. Here is some guidance on getting involved.

## 🐛 Ew! A bug!

It’s really helpful to know if you encounter a bug with any of the components in this repo. You can let us know by [opening a new issue on GitHub](https://github.com/astro-community/astro-embed/issues/new/choose). (You might want to take a look at any [open issues](https://github.com/astro-community/astro-embed/issues) first to see if anyone else has had the same problem.)

If you can see what’s causing the bug, a pull request fixing it would be amazing.

## ✨ Adding a component

This is a community effort, so we’d love for you to add an embed component for your favourite service. The aim is for the components here to be as lightweight and performant as possible. You can open an issue to discuss your idea if you’re not sure exactly how to implement it.

If you think you’re ready to go, let’s get started.

### Create a package for your component

1. Each `astro-embed` component lives in a separate directory in the `packages` directory. Create a directory for your component:

   ```bash
   mkdir packages/astro-embed-[SERVICE-NAME]
   ```

2. Create a `package.json` file in your new directory that looks something like this (replacing `[SERVICE-NAME]` with the website your embed is for, e.g. Twitter, YouTube, etc.).

   ```json
   {
     "name": "@astro-community/astro-embed-[SERVICE-NAME]",
     "version": "0.0.1",
     "description": "Component to easily embed [SERVICE-NAME] on your Astro site",
     "type": "module",
     "exports": {
       ".": "./index.js",
       "./matcher": "./matcher.js"
     },
     "repository": {
       "type": "git",
       "url": "git+https://github.com/astro-community/astro-embed.git"
     },
     "license": "MIT",
     "bugs": {
       "url": "https://github.com/astro-community/astro-embed/issues"
     },
     "homepage": "https://github.com/astro-community/astro-embed/tree/main/packages/astro-embed-[SERVICE-NAME]#readme"
   }
   ```

### Create your Astro component

Add an Astro component to your package and call it something understandable like `Tweet.astro` or `YouTube.astro`. This is the tricky bit — this part’s down to you! This is normal Astro component, so you can import styles, node modules etc. just like you would inside an Astro project.

One important thing: to support auto-embeds using the Astro integration, we’ll need access to a method that will extract an ID from a valid URL from the integration. The recommended way to do that is to create a `matcher.js` file and export a function that converts a URL to an ID. You can import and use that in your component, but having it in a separate file helps us hook up the integration functionality more easily.

### Expose your component

In order for other projects to easily import your Astro component, we need to expose it to them.

To do this, create an `index.js` file. It usually will look something like this:

```js
export { default as Tweet } from './Tweet.astro';
```

### Preview your component

While working, you’ll likely want to to see how — or if! — your component renders.

You can use the Astro project in the `/demo` directory to do this. Add a page to `/demo/src/pages` for your component and try using different props etc. to see how it responds.

Running `npm start` will start Astro’s development server for the demo project.

### Test your component

You can write tests to make sure the component is rendering as you expect. These will also be run in CI on GitHub, so you can be sure behaviour remains consistent as things change.

See the README in the `/tests` directory for more details on how to write tests.

### Document your component

Add a README file to your component package that shows how to use it. You can check out existing READMEs for the other components for inspiration.

### Add your plugin to the integration

Import your URL matcher function and add it and your component name to the `matchers` array in `astro-embed-integration/remark-plugin.js`.

### Open a PR!

Wow, you made it this far! Open a pull request and let’s get even more things embedded!

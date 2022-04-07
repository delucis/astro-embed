# Astro Component Template 🧑‍🚀

This is a template meant to ease the development of components for [Astro](https://astro.build/) that are intended for distribution. It does so by providing you with:

- A clear default directory structure
- Proper TypeScript settings for working with Astro
- Default settings for ESLint, Prettier and EditorConfig inspired by the formatting used in the Astro project itself (also, [the config files are typed 👀](https://princesseuh.netlify.app/article/youshouldtypeyourconfigfiles/))
- Ready-to-use testing tools powered by the libraries also used by the Astro project (Mocha and Chai), also contain [astro-component-tester](https://github.com/Princesseuh/astro-component-tester) to help you test the output of your component(s)
- Preconfigured VS Code workspace settings file with settings meant to make development cozy and nice

Hopefully, all of this together will provide you with a fun and comfortable development environnement for working on your Astro component! 🚀 Also, never forget that this is only a template to get you started, if you don't agree with any of the choices made, feel free to change it to fit your project better!

**⚠️ Don't forget:** You should edit `package.json` with the info relevant to your project, such as a proper `name`, a license, a link to the repository for the npm website and other settings. You should also adjust the Astro `peerDependency` to the lowest version of Astro you support

## Folder Structure

```plaintext
├── .vscode/                    # VS Code settings folder
│   ├── settings.json           # Workspace settings
│   └── extensions.json         # Very strongly recommended extensions to install
├── src/                        # Your component source code
│   ├── Component.astro         # Example component file
│   └── main.ts                 # Example source code file
├── test/                       # Your component tests
│   └── example.test.js         # Example tests
└── index.ts                    # Should contain all the exports your component provide to users
```

ESLint, Prettier and EditorConfig settings are respectively located in the following files: `.eslintrc.js`, `.prettierrc.js` and `.editorconfig` at the root of this template project.

## Commands

The following npm scripts are provided to lint and format your project

| Command          | Action                                                        |
| :--------------- | :------------------------------------------------------------ |
| `npm run test`   | Run tests using Mocha                                         |
| `npm run format` | Format your project using Prettier, this edits files in-place |
| `npm run lint`   | Lint your project using ESLint                                |

In VS Code, you can access those commands in the Explorer in the `NPM Scripts` section

## Frequently asked questions

### Is this official?

No, Astro does not have an official template for component and other options than this one exists. You should choose the one that fits your needs the best!

### Which package manage should I use?

The one you prefer! This template makes no assumption.

The only package manager related thing in this repo is that the prettier plugins has the proper configuration needed to work with pnpm (but it works with the other too, pnpm just need additional settings)

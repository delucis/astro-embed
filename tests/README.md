# Testing Components

This directory contains tests that check the output of the embed components matches expectations.

## Running tests

You can run tests from the project root:

```bash
npm run test
```

### Running a single test file

If you’re working on a particular component you might want to only run its tests. You can pass a pattern to the test command. Only test files that match the pattern will run.

```bash
npm run test -- youtube
```

## What a test looks like

Here’s a minimal example of what a test file might look like.

```js
// uvu is the test framework — it’s like Jest, Mocha, Ava, etc.…
import { test } from 'uvu';
// uvu exports some assertion helpers that you can use to compare value
import * as assert from 'uvu/assert';
// This utility helps us render our component. See details in the next section.
import { renderScreen } from './utils/render';

// The `test` method queues up a test to run.
// In this example we first render our component and then assert some content
// looks like we expect it to.
test('it should render user information in the header', async () => {
  const screen = await renderScreen(
    './packages/astro-embed-twitter/Tweet.astro',
    { id: '1511750228428435457' }
  );
  const username = screen.getByText('@astrodotbuild');
  assert.is(username.getAttribute('href'), 'https://twitter.com/astrodotbuild');
});

// Don’t forget to call `test.run()` at the end of the file!
test.run();
```

## Rendering your component in a test

You can choose from two helpers in `utils/render` to render your component in a test and inspect the output. Both are based on [the `astro-component-tester` package](https://github.com/Princesseuh/astro-component-tester), and both take a path to a `.astro` file and an object for its props. For example, `renderDOM('./Component.astro', { count: 5 })` is similar to `<Component count={5}>` in a page.

> ⚠️ It’s important to note that the path to your component should be relative to the root of the `astro-embed` monorepo. See some of the existing tests for examples.

### `renderDOM(componentPath[, props])`

This method returns a new [`linkedom`](https://github.com/WebReflection/linkedom#readme) instance containing the HTML for the component at `componentPath`.

This gives you something similar to a browser environment which you can inspect.

```js
const dom = await renderDOM('./Component.astro', { title: 'Test' });
const title = dom.window.document.querySelector('#title');
assert.is(title.innerText, 'Test');
```

### `renderScreen(componentPath[, props])`

This method returns a slightly higher-level API to inspect your rendered component. It is equivalent to Testing Library’s `screen` interface, which allows you to easily use any of [Testing Library’s DOM queries](https://testing-library.com/docs/queries/about). These are usually slightly more restricted than directly querying the DOM, but are designed to make tests more easily reflect user behaviour and focus on accessible text labelling etc.

```js
const screen = await renderScreen('./Component.astro', { title: 'Test' });
const title = screen.getByRole('heading', { level: 1 });
assert.is(title.innerText, 'Test');
```

> ℹ️ Can’t figure out the correct query? Adding `screen.logTestingPlaygroundURL()` to your test will log a URL to your console that will open a page showing your DOM that can help you find the right query for a given node.

## Useful links

- [`uvu` test framework](https://github.com/lukeed/uvu) — see this for details of the test and assertion APIs.
- [DOM Testing Libray cheatsheet](https://testing-library.com/docs/dom-testing-library/cheatsheet) — a helpful resource for the queries provided by the `renderScreen` API

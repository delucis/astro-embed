/* eslint-disable no-console */
import { prettyDOM, queries, screen } from '@testing-library/dom';
import { getComponentOutput } from 'astro-component-tester';
import { parseHTML } from 'linkedom';
import lzString from 'lz-string';
const { compressToEncodedURIComponent } = lzString;

/**
 * Get a `JSDOM` instance for an Astro component
 * @param path Path to an Astro component to render (relative to monorepo root)
 * @param props Any props to pass to the component
 * @returns A Promise for a `JSDOM` instance
 */
export const renderDOM = async (
	path: string,
	props?: Record<string, unknown>
) => {
	const { raw } = await getComponentOutput(path, props);
	return parseHTML(raw);
};

/**
 * Render an Astro component to an interface matching
 * `@testing-library/dom`’s `screen` API.
 * @param path Path to an Astro component to render (relative to monorepo root)
 * @param props Any props to pass to the component
 * @returns A `@testing-library/dom` “screen” containing the rendered component
 */
export const renderScreen = async (
	path: string,
	props?: Record<string, unknown>
) => getScreen(await renderDOM(path, props));

/**
 * Create an interface matching `@testing-library/dom`’s `screen`, but without
 * needing a global DOM environment.
 */
function getScreen(container: Window): typeof screen {
	const { document } = container.window;

	const debug: typeof screen.debug = (
		element: Parameters<typeof screen.debug>[0] = document,
		maxLength?: Parameters<typeof screen.debug>[1],
		options?: Parameters<typeof screen.debug>[2]
	) =>
		Array.isArray(element)
			? element.forEach((el) => logDOM(el, maxLength, options))
			: logDOM(element, maxLength, options);

	const logTestingPlaygroundURL: typeof screen.logTestingPlaygroundURL = (
		element = document.body
	) => {
		if (!element || !('innerHTML' in element)) {
			console.log(`The element you're providing isn't a valid DOM element.`);
			return;
		}
		if (!element.innerHTML) {
			console.log(`The provided element doesn't have any children.`);
			return;
		}
		console.log(
			`Open this URL in your browser\n\n${getPlaygroundUrl(element.innerHTML)}`
		);
	};

	const fakeScreen = { debug, logTestingPlaygroundURL } as typeof screen;
	for (const [key, query] of Object.entries(queries)) {
		fakeScreen[key] = (...args) =>
			query(container.window.document as unknown as HTMLElement, ...args);
	}
	return fakeScreen;
}

// Below are utilities borrowed from Testing Library’s screen implementation.
// See: https://github.com/testing-library/dom-testing-library/blob/main/src/screen.ts

function unindent(string: string) {
	return string.replace(/[ \t]*[\n][ \t]*/g, '\n');
}

function encode(value: string) {
	return compressToEncodedURIComponent(unindent(value));
}

function getPlaygroundUrl(markup: string) {
	return `https://testing-playground.com/#markup=${encode(markup)}`;
}

function logDOM(...args) {
	console.log(prettyDOM(...args));
}

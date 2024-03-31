/* eslint-disable no-console */
import { prettyDOM, queries } from '@testing-library/dom';
import { getComponentOutput } from 'astro-component-tester';
import { parseHTML } from 'linkedom';
import lzString from 'lz-string';
const { compressToEncodedURIComponent } = lzString;

/**
 * Get a `JSDOM` instance for an Astro component
 * @param path {string} Path to an Astro component to render (relative to monorepo root)
 * @param [props] {Record<string, unknown>} Any props to pass to the component
 * @returns A Promise for a `JSDOM` instance
 */
export const renderDOM = async (path, props) => {
	const { raw } = await getComponentOutput(path, props);
	return parseHTML(raw);
};

/**
 * Render an Astro component to an interface matching
 * `@testing-library/dom`’s `screen` API.
 * @param path {string} Path to an Astro component to render (relative to monorepo root)
 * @param [props] {Record<string, unknown>} Any props to pass to the component
 * @returns A `@testing-library/dom` “screen” containing the rendered component
 */
export const renderScreen = async (path, props) =>
	getScreen(await renderDOM(path, props));

/**
 * Create an interface matching `@testing-library/dom`’s `screen`, but without
 * needing a global DOM environment.
 * @param container {Window}
 * @returns {typeof import('@testing-library/dom').screen}
 */
function getScreen(container) {
	const { document } = container.window;

	/** @type {typeof import('@testing-library/dom').screen.debug} */
	const debug = (element = document, maxLength, options) =>
		Array.isArray(element)
			? element.forEach((el) => logDOM(el, maxLength, options))
			: logDOM(element, maxLength, options);

	/** @type {typeof import('@testing-library/dom').screen.logTestingPlaygroundURL} */
	const logTestingPlaygroundURL = (element = document.body) => {
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

	const fakeScreen =
		/** @type {typeof import('@testing-library/dom').screen} */ ({
			debug,
			logTestingPlaygroundURL,
		});
	for (const [key, query] of Object.entries(queries)) {
		fakeScreen[key] = (...args) =>
			query(
				/** @type {HTMLElement} */ (
					/** @type {unknown} */ (container.window.document)
				),
				...args
			);
	}
	return fakeScreen;
}

// Below are utilities borrowed from Testing Library’s screen implementation.
// See: https://github.com/testing-library/dom-testing-library/blob/main/src/screen.ts

/** @param {string} string */
function unindent(string) {
	return string.replace(/[ \t]*[\n][ \t]*/g, '\n');
}

/** @param {string} value */
function encode(value) {
	return compressToEncodedURIComponent(unindent(value));
}

/** @param {string} markup */
function getPlaygroundUrl(markup) {
	return `https://testing-playground.com/#markup=${encode(markup)}`;
}

/** @param {Parameters<typeof prettyDOM>} args */
function logDOM(...args) {
	console.log(prettyDOM(...args));
}

import { defineConfig, globalIgnores } from 'eslint/config';

import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import js from '@eslint/js';

import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	{
		languageOptions: {
			globals: globals.node,
			parser: tsParser,
		},

		plugins: {
			'@typescript-eslint': typescriptEslint,
			prettier,
		},

		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:prettier/recommended'
		),

		rules: {
			// We don't want to leak logging into our user's console unless it's an error
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'@typescript-eslint/no-explicit-any': ['warn'],
		},
	},

	globalIgnores(['**/dist/**/*', '**/.astro/**/*']),

	{
		files: ['**/*.d.ts'],
		rules: {
			'@typescript-eslint/triple-slash-reference': 0,
		},
	},
]);

/** @type {import("prettier").Config} */
module.exports = {
	printWidth: 80,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
	],
};

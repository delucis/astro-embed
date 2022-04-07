/** @type {import("@types/prettier").Options */
module.exports = {
	printWidth: 180,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	plugins: ['./node_modules/prettier-plugin-astro'],
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

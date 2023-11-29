import antfu from '@antfu/eslint-config';

/* Using custom configuration of Antfu's code style: https://github.com/antfu/eslint-config */
export default await antfu(
	{
		typescript: true,
		stylistic: {
			quotes: 'single',
			indent: 'tab',
			semi: true,
		},
		ignores: [
			'**/dist',
			'.idea',
		],
	},
	{
		rules: {
			'style/no-tabs': ['error', { allowIndentationTabs: true }],
			'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'style/array-bracket-newline': ['error', { multiline: true }],
			'style/array-element-newline': ['error', 'consistent'],
		},
	},
	{
		files: ['tsconfig.json', 'package.json'],
		rules: {
			'jsonc/sort-keys': 'off',
		},
	},
);

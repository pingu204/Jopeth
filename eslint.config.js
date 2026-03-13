import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from 'eslint-plugin-import';

export default [
	{ ignores: ["dist"] },
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"import": importPlugin,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			'import/no-unresolved': 'error', // This marks missing files in red
			'import/named': 'error',         // Marks missing named exports (the { curly } ones)
			'import/default': 'error',       // Marks missing default exports
		},
		settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx']
                }
            }
        }
	},
];

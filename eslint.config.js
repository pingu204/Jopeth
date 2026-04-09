import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ["dist"] },
  {
    // Extend the recommended JS and TS configs
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"], // Focus on TS files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // Use the TypeScript parser
      parser: tseslint.parser,
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
      ...reactHooks.configs.recommended.rules,
      // Use the TS version of no-unused-vars
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      
      // Import plugin rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
    },
    settings: {
      'import/resolver': {
        // You need to tell the import plugin how to resolve TS files
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code
          project: './tsconfig.json',
        },
        // typescript: true, 
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },
);
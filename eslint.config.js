import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';

export default tseslint.config(
  {
    ignores: ['dist', 'eslint.config.js'],
  },
  {
    rules: {
      'no-unused-vars': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreMixedLogicalExpressions: true }],
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    files: ['**.*{jsx,tsx}'],
    plugins: {
      'react-refresh': reactRefresh,
      'react-hooks': fixupPluginRules(reactHooks),
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

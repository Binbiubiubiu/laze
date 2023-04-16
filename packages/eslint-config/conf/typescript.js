const fs = require('fs');
const path = require('path');
const globals = require('globals');

const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json';
const isTs = fs.existsSync(path.join(process.cwd(), tsconfig));

const languageOptions = {
  sourceType: 'module',
  parser: tsParser,
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: process.cwd(),
    project: [tsconfig, './packages/*/tsconfig.json'],
    warnOnUnsupportedTypeScriptVersion: true,
  },
};

const configs = [
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs.recommended.rules,

      'no-useless-constructor': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: false, variables: true },
      ],
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': ['error', 'functions'],
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': 'error',

      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',

      // handled by unused-imports/no-unused-imports
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    ignores: ['**/*.md/**'],
    languageOptions,
    rules: {
      ...tsPlugin.configs['recommended-requiring-type-checking'].rules,
    },
  },
  {
    files: ['**/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
    plugins: {
      jest: require('eslint-plugin-jest'),
    },
    languageOptions: {
      ...languageOptions,
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // you should turn the original rule off *only* for test files
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
    },
  },
];

module.exports = isTs ? configs : [];

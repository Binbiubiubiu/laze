'use strict';

const fs = require('fs');
const path = require('path');

const base = require('./base.old');

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json';
const isTs = fs.existsSync(path.join(process.cwd(), tsconfig));

const { jsExts, tsExts } = require('./constants');

const allExtensions = [...jsExts, ...tsExts];

module.exports = {
  extends: [
    require.resolve('./base.js'),
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],

  settings: {
    'import/extensions': allExtensions,
    'import/resolver': {
      node: { extensions: allExtensions },
    },
    'import/parsers': {
      '@typescript-eslint/parser': tsExts,
    },
  },
  overrides: [
    ...base.overrides,
    isTs && {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      excludedFiles: ['**/*.md/**'],
      parser: require.resolve('@typescript-eslint/parser'),
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: [tsconfig, './packages/*/tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {},
    },
    {
      files: ['**/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
      plugins: ['jest'],
      rules: {
        // you should turn the original rule off *only* for test files
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
  rules: {
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
};

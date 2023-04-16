const recommended = require('eslint-plugin-import/config/recommended');
const typescript = require('eslint-plugin-import/config/recommended');

const { jsExts, tsExts } = require('../constants');

const allExtensions = [...jsExts, ...tsExts, '.json'];

module.exports = {
  recommended: {
    languageOptions: {
      ecmaVersion: recommended.parserOptions.ecmaVersion,
      sourceType: recommended.parserOptions.sourceType,
      parserOptions: recommended.parserOptions,
    },
    settings: {
      'import/extensions': jsExts,
      'import/resolver': {
        node: { extensions: jsExts },
      },
    },
    rules: recommended.rules,
  },
  typescript: {
    settings: {
      ...typescript.settings,
      'import/extensions': allExtensions,
      'import/resolver': {
        node: { extensions: allExtensions },
      },
    },
    rules: typescript.rules,
  },
};

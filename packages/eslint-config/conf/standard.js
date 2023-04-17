const standard = require('eslint-config-standard');
const importPlugin = require('eslint-plugin-import');
const n = require('eslint-plugin-n');
const promisePlugin = require('eslint-plugin-promise');
const globals = require('globals');

module.exports = {
  languageOptions: {
    ecmaVersion: standard.parserOptions.ecmaVersion,
    sourceType: standard.parserOptions.sourceType,
    parserOptions: standard.parserOptions,
    globals: {
      ...globals.node,
      ...globals.es2021,
      ...standard.globals,
    },
  },
  plugins: {
    import: importPlugin,
    n,
    promise: promisePlugin,
  },
  rules: standard.rules,
};

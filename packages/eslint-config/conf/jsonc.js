const jsonc = require('eslint-plugin-jsonc');
const jsoncParser = require('jsonc-eslint-parser');

const overrides = jsonc.configs.base.overrides[0];
module.exports = {
  files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
  languageOptions: {
    parser: jsoncParser,
  },
  plugins: {
    jsonc,
  },
  rules: {
    ...overrides.rules,
    ...jsonc.configs['recommended-with-jsonc'].rules,
    ...jsonc.configs.prettier.rules,
  },
};

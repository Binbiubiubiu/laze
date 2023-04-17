const config = require('@commitlint/config-conventional');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always', Infinity],
    'scope-case': [2, 'always', 'kebab-case'],
    'type-enum': [2, 'always', [...config.rules['type-enum'][2], 'wip']],
  },
};

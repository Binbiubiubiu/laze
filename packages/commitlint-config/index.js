const config = require('@commitlint/config-conventional');

config.prompt.questions.type.enum.wip = {
  description: 'Work in progress, do not merge yet',
  title: 'Work in progress',
  emoji: '🚧',
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always', Infinity],
    'scope-case': [2, 'always', 'kebab-case'],
    'type-enum': [2, 'always', [...config.rules['type-enum'][2], 'wip']],
  },
};

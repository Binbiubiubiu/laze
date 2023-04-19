const ymlParser = require('yaml-eslint-parser');
const yml = require('eslint-plugin-yml');

const overrides = yml.configs.base.overrides[0];

module.exports = {
  files: ['**/*.yaml', '**/*.yml'],
  languageOptions: {
    parser: ymlParser,
  },
  plugins: {
    yml,
  },
  rules: {
    ...overrides.rules,
    ...yml.configs.recommended.rules,
    ...yml.configs.prettier.rules,
  },
};

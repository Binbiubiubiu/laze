const react = require('eslint-plugin-react');
const hooks = require('eslint-plugin-react-hooks');

module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react,
    'react-hooks': hooks,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...hooks.configs.recommended.rules,
  },
};

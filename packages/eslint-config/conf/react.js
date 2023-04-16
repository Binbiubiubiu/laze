const react = require('eslint-plugin-react');
const hooks = require('eslint-plugin-react-hooks');

module.exports = {
  plugins: {
    react,
    'react-hooks': hooks,
  },
  ...react.configs.recommended,
  rules: {
    ...react.configs.recommended.rules,
    ...hooks.configs.recommended.rules,
  },
};

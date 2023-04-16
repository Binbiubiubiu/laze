const markdown = require('eslint-plugin-markdown');

const [md, asserts] = markdown.configs.recommended.overrides;
module.exports = [
  {
    plugins: {
      markdown,
    },
    ...md,
  },
  {
    files: asserts.files,
    languageOptions: {
      parserOptions: asserts.parserOptions,
    },
    rules: {
      ...asserts.rules,
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      'import/no-unresolved': 'off',
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
    },
  },
];

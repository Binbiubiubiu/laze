const vue = require('eslint-plugin-vue');

module.exports = {
  files: ['**/*.vue'],
  plugins: {
    vue,
  },
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    parser: require('vue-eslint-parser'),
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      ecmaVersion: 2020,
    },
  },
  rules: {
    ...vue.configs.base.rules,
    ...vue.configs['vue3-essential'].rules,
    ...vue.configs['vue3-strongly-recommended'].rules,
    ...vue.configs['vue3-recommended'].rules,

    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/no-v-text-v-html-on-component': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',

    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-'],
      },
    ],
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-useless-v-bind': 'error',
    'vue/no-unused-refs': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',

    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],

    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    'vue/no-sparse-arrays': 'error',
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/prefer-template': 'error',
  },
};

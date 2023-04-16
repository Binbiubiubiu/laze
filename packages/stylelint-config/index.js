module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-css-modules'),
    require.resolve('stylelint-config-recess-order'),
  ],
  plugins: [require.resolve('stylelint-declaration-block-no-ignored-properties')],
  rules: {
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null, // iconfont
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'plugin/declaration-block-no-ignored-properties': true,
    // webcomponent
    'selector-type-no-unknown': null,
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*(-[a-z0-9]+)*|[a-z][a-zA-Z0-9]+)$',
      {
        message: 'Expected class selector to be kebab-case or lowerCamelCase',
      },
    ],
  },
  ignoreFiles: [
    'node_modules',
    'bower_components',
    // Compiled binary addons (https://nodejs.org/api/addons.html)
    'build/Release',
    // Dependency directories
    'jspm_packages/',
    // Snowpack dependency directory (https://snowpack.dev/)
    'web_modules/',
    // Next.js build output
    'out',
    // Nuxt.js build / generate output
    'dist',
    // Comment in the public line in if your project uses Gatsby and not Next.js
    // https://nextjs.org/blog/next-9-1#public-directory-support
    'public',
    'temp',
    '_site',
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: require.resolve('postcss-scss'),
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: require.resolve('postcss-less'),
    },
    {
      files: ['*.stylus', '*.styl', '**/*.stylus', '**/*.styl'],
      customSyntax: require.resolve('postcss-styl'),
    },
  ],
};

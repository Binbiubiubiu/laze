💅🏼 @laze/prettier-config

@laze/prettier-config 是一个 prettier 配置，它可以帮助您在项目中统一代码风格，从而使代码更易于阅读和维护。

## 安装

你可以使用 npm 或者 pnpm 进行安装：

```shell
npm install --save-dev prettier @laze/prettier-config
```

```shell
pnpm add --save-dev prettier @laze/prettier-config
```

## 使用

在您的项目中创建一个 `.prettierrc.js` 文件，并将其内容设置为以下内容：

```js
module.exports = require('@laze/prettier-config');
```

现在，您可以使用 prettier 格式化您的代码，并应用 @laze/prettier-config 的配置。

例如，在您的 `package.json` 文件中，您可以添加以下命令：

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.js\""
  }
}
```

运行 `npm run format`（或 `pnpm format`）时，将自动使用 @laze/prettier-config 格式化您的代码。

## vscode 配置

```json
{
  "editor.tabSize": 2,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true
}
```

## 选项

@laze/prettier-config 基于 [prettier 的默认选项](https://prettier.io/docs/en/options.html)，并进行了以下更改：

- 将 `tabWidth` 设置为 2
- 将 `printWidth` 设置为 100
- 将 `singleQuote` 设置为 true

您可以在 `.prettierrc.js` 文件中修改这些选项，例如：

```js
module.exports = {
  ...require('@laze/prettier-config'),
  tabWidth: 4,
  printWidth: 120,
  singleQuote: false,
};
```

## 贡献

如果你发现了一个 bug 或者有一个建议，欢迎 [提交 issue](https://github.com/laze/issues) 或者 [pull request](https://github.com/laze/pulls)。

## 许可证

MIT License (MIT)

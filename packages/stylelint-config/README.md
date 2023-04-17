# 🎨 @laze/stylelint-config

`@laze/stylelint-config` 是一个 [stylelint](https://stylelint.io/) 配置，支持 `scss`，`less` 和 `stylus` 样式预处理器。

## 安装

你可以使用 npm 或者 pnpm 进行安装：

```shell
npm install --save-dev stylelint @laze/stylelint-config
```

```shell
pnpm add --save-dev stylelint @laze/stylelint-config
```

## 使用

在你的项目根目录下创建 `stylelint.config.js` 文件，并添加以下内容：

```js
module.exports = {
  extends: '@laze/stylelint-config',
};
```

然后，你可以在你的 `package.json` 中添加一条 `lint` 命令，例如：

```json
{
  "scripts": {
    "lint": "stylelint \"src/**/*.scss\""
  }
}
```

## 规则

`@laze/stylelint-config` 包含了以下规则：

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) 中的所有规则
- [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules) 中的所有规则
- [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) 中的所有规则
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties) 中的所有规则

你可以根据你的需求通过 `stylelint.config.js` 文件进行覆盖和修改。更多规则请参考 [stylelint 官方文档](https://stylelint.io/user-guide/rules/)。

## 贡献

如果你发现了一个 bug 或者有一个建议，欢迎 [提交 issue](https://github.com/laze/issues) 或者 [pull request](https://github.com/laze/pulls)。

## 许可证

MIT License (MIT)

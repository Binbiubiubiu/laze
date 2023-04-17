# 🚀 @laze/eslint-config

`@laze/eslint-config` 是一个基于 [ESLint](https://eslint.org/) 的配置文件，支持 TypeScript、Vue 和 React 项目。它能够帮助你保持项目代码的一致性和可读性，提高团队协作效率。

## 安装

你可以使用 npm 或者 pnpm 进行安装：

```shell
npm install --save-dev eslint @laze/eslint-config
```

```shell
pnpm add --save-dev eslint @laze/eslint-config
```

## 使用

在你的项目中，创建一个 `eslint.config.js` 文件并将以下内容复制到其中：

```js
module.exports = require('@laze/eslint-config');
```

如果你的项目是 TypeScript、Vue 或 React 项目，可以使用以下方式进行扩展：

### TypeScript 项目

```js
module.exports = require('@laze/eslint-config/typescript');
```

### Vue 项目

```js
module.exports = require('@laze/eslint-config/vue');
```

### React 项目

```js
module.exports = require('@laze/eslint-config/react');
```

## 规则

`@laze/eslint-config` 规则的基础来源于 [eslint-config-standard](https://github.com/standard/eslint-config-standard)，在此基础上做了一些个性化的调整。详细的规则可以查看对应的配置文件：

- `@laze/eslint-config`：基础规则
- `@laze/eslint-config/typescript`：TypeScript 规则
- `@laze/eslint-config/vue`：Vue 规则
- `@laze/eslint-config/react`：React 规则

## 贡献

如果你发现了一个 bug 或者有一个建议，欢迎 [提交 issue](https://github.com/laze/issues) 或者 [pull request](https://github.com/laze/pulls)。

## 许可证

MIT License (MIT)

# 📦 @laze/tsconfig

@laze/tsconfig 是一个 TypeScript 配置项目，旨在为 TypeScript 项目提供一组可靠的配置。该项目基于最新的 TypeScript 版本，并包含了一些常用的配置选项，以支持各种不同的应用程序场景。

## 安装

你可以使用 npm 或者 pnpm 进行安装：

```shell
npm install --save-dev typescript @laze/tsconfig
```

```shell
pnpm add --save-dev typescript @laze/tsconfig
```

## 使用

要使用 @laze/tsconfig，请将以下内容添加到你的项目根目录下的 `tsconfig.json` 文件中：

```json
{
  "extends": "@laze/tsconfig"
}
```

这将自动使用 @laze/tsconfig 中的默认配置选项。

## 示例

以下是一个示例 `tsconfig.json` 文件：

```json
{
  "extends": "@laze/tsconfig",
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "target": "es6"
  },
  "include": ["./src/**/*"],
  "exclude": ["./node_modules"]
}
```

## 贡献

如果你发现了一个 bug 或者有一个建议，欢迎 [提交 issue](https://github.com/laze/issues) 或者 [pull request](https://github.com/laze/pulls)。

## 许可证

MIT License (MIT)

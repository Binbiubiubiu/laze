# 📝 @laze/commitlint-config

`@laze/commitlint-config` 是一个基于 [commitlint](https://github.com/conventional-changelog/commitlint) 的配置文件，该配置文件继承了 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

## 快速开始

你可以使用 npm 或者 pnpm 进行安装：

```shell
npm install --save-dev @commitlint/cli @laze/commitlint-config
```

```shell
pnpm add --save-dev @commitlint/cli @laze/commitlint-config
```

## 使用

在你的项目中，创建一个 `commitlint.config.js` 文件并将以下内容复制到其中：

```js
module.exports = {
  extends: ['@laze/commitlint-config'],
};
```

在 `husky` 中添加 `commit-msg` 配置:

```sh
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx commitlint --edit $1 --config commitlint.config.js
```

现在，你的项目已经配置好了 `commitlint`，只要你在提交代码时遵循[约定式提交规范](https://www.conventionalcommits.org/en/v1.0.0/)，就可以保证提交信息的一致性和可读性。

## 配置说明

`@laze/commitlint-config` 继承了 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)，并在其基础上进行了一些定制化配置。

以下是 `@laze/commitlint-config` 的具体规则：

- `type-enum`: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `revert`, `build`, `ci`, `wip` 和 `perf` 是允许的提交类型。

- `scope-case`: `scope` 必须为 `kebab-case`。

- `body-max-line-length`: `body` 无限制。

## 贡献

如果你发现了一个 bug 或者有一个建议，欢迎 [提交 issue](https://github.com/laze/issues) 或者 [pull request](https://github.com/laze/pulls)。

## 许可证

MIT License (MIT)

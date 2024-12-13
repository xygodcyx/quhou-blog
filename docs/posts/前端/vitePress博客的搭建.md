---
title: 使用VitePress设计具有个人风格的博客
date: 2024-12-13
tags: ["前端","VitePress"]
author: QuHou
excerpt: 笔者分享了如何使用 VitePress 设计具有个人风格的博客，并从实际需求出发，阐述了选择 VitePress 的原因：自定义程度高、无需服务器、支持 Markdown 等。相比传统的 vue+nodejs 搭建方式和 Hexo 的繁琐配置，VitePress 更加轻量和便捷。文章详细介绍了从安装到项目配置的完整流程，包括前置准备、安装方式、文件结构和配置文件的作用。笔者还提供了通过命令行快速初始化项目的操作方法，强调了在现有项目中嵌套使用 VitePress 的最佳实践，如在 ./docs 目录中搭建站点。对于开发者关心的 Markdown 文件处理，文章指出 VitePress 基于文件路由，将 .md 文件直接编译为 .html，并支持灵活的主题定制。最后，笔者演示了如何通过内置的 npm 脚本启动本地开发服务器，并使用热更新功能快速预览效果。总体而言，VitePress 是搭建简洁、高效、富有个性化博客的理想工具。
---

## 前言

之前一直想自己写一个博客，之前尝试过使用`vue+nodejs`使用前端+后台的方式搭建博客，但是这种方式局限性太大而且非常麻烦，还需要支付服务器的费用，所以就放弃了。
后来又研究了一段时间的`hexo`，不得不说，确实非常方便，但是`hexo`有点太“花哨”了，而且配置项太多，太繁琐，自己也没有时间去研究。
再后来发现了`vitepress`，怎么说呢，就是非常符合我对写博客网址的要求：自定义程度高，写作方便，不需要服务器，用`markdown`写完博客后自动生成`html`非常方便，而且样式和布局完全可以自定义，可以设计出属于自己风格的博客。

---

## 在线尝试 {#try-it-online}

可以直接在 [StackBlitz](https://vitepress.new) 上进行在线尝试。

## 安装 {#installation}

### 前置准备 {#prerequisites}

- [Node.js](https://nodejs.org/) 18 及以上版本。
- 通过命令行界面 (CLI) 访问 VitePress 的终端。
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的编辑器。
  - 推荐 [VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：

::: code-group

```sh [npm]
npm add -D vitepress
```

```sh [pnpm]
pnpm add -D vitepress
```

```sh [yarn]
yarn add -D vitepress
```

```sh [yarn (pnp)]
yarn add -D vitepress vue
```

```sh [bun]
bun add -D vitepress
```

:::

::: details 遇到了 missing peer deps 警告？
如果使用 PNPM，会注意到对 `@docsearch/js` 的 missing peer deps 警告。这不会影响 VitePress 运行。如果希望禁止显示此警告，请将以下内容添加到 `package.json`：

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "search-insights"
    ]
  }
}
```

:::

::: tip 注意

VitePress 是仅 ESM 的软件包。不要使用 `require()` 导入它，并确保最新的 `package.json` 包含 `"type": "module"`，或者更改相关文件的文件扩展名，例如 `.vitepress/config.js` 到 `.mjs`/`.mts`。更多详情请参考 [Vite 故障排除指南](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only)。此外，在异步 CJS 上下文中，可以使用 `await import('vitepress')` 代替。

:::

### 安装向导 {#setup-wizard}

VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：

::: code-group

```sh [npm]
npx vitepress init
```

```sh [pnpm]
pnpm vitepress init
```

```sh [yarn]
yarn vitepress init
```

```sh [bun]
bun vitepress init
```

:::

:::tip Vue 作为 peer dependency
如果打算使用 Vue 组件或 API 进行自定义，还应该明确地将 `vue` 安装为 dependency。
:::

## 文件结构 {#file-structure}

如果正在构建一个独立的 VitePress 站点，可以在当前目录 (`./`) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 (例如 `./docs`) 中，以便它与项目的其余部分分开。

假设选择在 `./docs` 中搭建 VitePress 项目，生成的文件结构应该是这样的：

``` 目录结构
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

 `docs` 目录作为 VitePress 站点的项目**根目录**。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。

### 配置文件 {#the-config-file}

配置文件 (`.vitepress/config.js`) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：

```js
// .vitepress/config.js
export default {
  // 站点级选项
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // 主题级选项
  }
}
```

### 源文件 {#source-files}

`.vitepress` 目录之外的 Markdown 文件被视为**源文件**。

VitePress 使用 **基于文件的路由**：每个 `.md` 文件将在相同的路径被编译成为 `.html` 文件。例如，`index.md` 将会被编译成 `index.html`，可以在生成的 VitePress 站点的根路径 `/` 进行访问。

## 启动并运行 {#up-and-running}

该工具还应该将以下 npm 脚本注入到 `package.json` 中：

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

`docs:dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

::: code-group

```sh [npm]
npm run docs:dev
```

```sh [pnpm]
pnpm run docs:dev
```

```sh [yarn]
yarn docs:dev
```

```sh [bun]
bun run docs:dev
```

:::

除了 npm 脚本，还可以直接调用 VitePress：

::: code-group

```sh [npm]
npx vitepress dev docs
```

```sh [pnpm]
pnpm vitepress dev docs
```

```sh [yarn]
yarn vitepress dev docs
```

```sh [bun]
bun vitepress dev docs
```

:::

开发服务应该会运行在 `http://localhost:5173` 上。在浏览器中访问 URL 以查看新站点的运行情况吧！

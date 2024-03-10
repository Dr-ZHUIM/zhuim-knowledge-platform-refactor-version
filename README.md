## 📖 Dr.Zhuim 知识平台

你好! 👋 欢迎来到 Dr.Zhuim 的知识平台, 你能在这里获取我的一些文章、代码以及一些有趣的小玩具。

本平台最近从 vite + react + mdx 的架构更改成了 next + mdx + mdx-bundler 的架构，很高兴能够与大家分享在本架构中如何写文章：

我使用了约定式开发的方式，要求文章的目录必须保持如下的格式：

```markdown
- [name]
  - page.mdx
  - components.tsx
  - index.module.css
```

在文章的 metaData 同样有约定要求：

```markdown
---

title: [标题]
category: [分类]
sidecategory: [副分类]
abstract: [摘要]
cover: [封面]
layer: [板块]
createdat: [时间] //由 Vscode snippet variables提供

---
```

在这样的模式下，比起使用 next-mdx-remote, mdx-bundler 可以更加轻松提供动态路由、组件引入的功能，同时不需要另外自开发 esbuild 组件。

因此书写文章就变成了轻松的事情：

```mdx
---
{ /* metadata */ }
---

import { ThisIsAComponent } from "./component.tsx";

## Whaterver Heading 😄

<ThisisAComponent />
```

**为什么不使用 next-mdx-remote?**

next-mdx-remote 并不存在 bundler 功能，在使用 fs 模块/数据库
获取文章后，获取的 mdx 文件本质上仍是字符串，next-mdx-remote 只提供了词义解析、服务端支持的功能，
这会导致很难将本地或者服务端储存的组件引入 mdx 中。
# miiyakumo

一个放文章、二创、个人项目与在线作品的个人站点。网站使用 Astro 静态生成；文章以 Markdown 保存，新增内容文件即可自动出现在相应列表。

## 本地开发

```bash
npm install
npm run dev
```

站点默认在 `http://localhost:4321/`。现有游戏是独立应用，源代码位于 `apps/phantom-air-raid/`，构建后直接部署在 `/projects/phantom-air-raid/`。

## 添加文章

复制 `templates/article.md` 到 `src/content/articles/`，填写 frontmatter 并写 Markdown 正文。首页、文章归档、分类列表和文章详情页会在站点构建时自动生成。完整说明见 [添加内容](docs/content-authoring.md)。

栏目：

- `/articles/`：文章，含日志、随笔和教程
- `/fanworks/`：二创作品
- `/projects/`：项目入口，可直接链接到部署好的网站或应用

## 项目与发布

- `apps/phantom-air-raid/`：Phaser 游戏源码和游戏专用验证脚本
- `public/projects/spotted-dove-cycling/`：直接部署的独立互动网页
- `public/legacy/touhou-chess.html`：保留的旧东方棋页面
- `.github/workflows/pages.yml`：构建个人站和游戏，然后发布到 GitHub Pages

提交到 `main` 会触发 GitHub Pages 部署，地址为 https://miiyakumo.github.io/miiyakumo/ 。

工作流通过 `SITE_BASE_PATH=/miiyakumo` 设置发布路径，本地开发默认使用根路径。要在本地检查 Pages 构建，运行 `SITE_BASE_PATH=/miiyakumo npm run build`，再运行 `SITE_BASE_PATH=/miiyakumo npm run preview`。

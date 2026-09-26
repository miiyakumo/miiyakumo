# 添加内容

## 发布文章

1. 在 `src/content/articles/` 新建一个 `.md` 文件，文件名会成为文章 URL 的一部分，例如 `my-first-post.md` 对应 `/articles/my-first-post/`。
2. 从 `templates/article.md` 复制 frontmatter，并填写标题、发布日期、类型、摘要和标签。
3. 写 Markdown 正文。文章默认是草稿；发布时删除 `draft: true` 或改成 `draft: false`。
4. 提交文件并部署。首页、文章列表、对应类型列表和文章详情页都会从内容集合自动生成，不需要编辑页面代码。

`kind` 只能填以下值之一：

- `log`：近期记录或进展
- `essay`：个人观察与思考
- `tutorial`：面向明确目标的步骤型教程
- `fanwork`：同人故事、图文或设定

可选字段 `cover` 用于封面图片路径。图片放在 `public/images/`，例如 `cover: /images/my-cover.png`。

二创也放在 `src/content/articles/`，将 `kind` 设为 `fanwork`。可选填写 `fandom` 和 `contentNote`。发布后会出现在文章列表的二创分类中，并自动生成详情页。

## 添加项目

在 `src/content/projects/` 新建 `.md` 文件，可参考 `templates/project.md`。项目会自动进入项目列表；`demoUrl` 可以填站内部署路径或外部演示链接，`sourceUrl` 可选。首页只展示 `featured: true` 的项目。

## 目前栏目

| 页面 | 内容来源 |
| --- | --- |
| `/articles/` | `src/content/articles/*.md` |
| `/articles/logs/`、`/articles/essays/`、`/articles/tutorials/`、`/articles/fanworks/` | 文章 frontmatter 的 `kind` |
| `/projects/` | `src/content/projects/*.md` |

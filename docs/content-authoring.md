# 添加内容

## 发布文章

1. 在 \`src/content/articles/\` 新建一个 \`.md\` 文件，文件名会成为文章 URL 的一部分，例如 \`my-first-post.md\` 对应 \`/articles/my-first-post/\`。
2. 从 \`templates/article.md\` 复制 frontmatter，并填写标题、发布日期、类型、摘要和标签。
3. 写 Markdown 正文。文章默认是草稿；发布时删除 \`draft: true\` 或改成 \`draft: false\`。
4. 提交文件并部署。首页、文章列表、对应类型列表和文章详情页都会从内容集合自动生成，不需要编辑页面代码。

\`kind\` 只能填以下值之一：

- \`log\`：近期记录或进展
- \`essay\`：个人观察与思考
- \`tutorial\`：面向明确目标的步骤型教程
- \`fanwork\`：同人故事、图文或设定

可选字段 \`cover\` 用于封面图片路径。图片放在 \`public/images/\`，例如 \`cover: /images/my-cover.png\`。

普通单篇二创也放在 \`src/content/articles/\`，将 \`kind\` 设为 \`fanwork\`。可选填写 \`fandom\` 和 \`contentNote\`。发布后会出现在文章列表的二创分类中，并自动生成详情页。

## 连载小说

连载小说使用独立的 \`fiction\` 内容集合，不混入普通文章流。每部小说放在一个稳定的目录 ID 下：

\`\`\`text
src/content/fiction/
└── novel-slug/
    ├── index.md
    ├── 01.md
    ├── 02.md
    └── 03.md
\`\`\`

### 作品主页

从 \`templates/fiction-work.md\` 复制到 \`src/content/fiction/<series>/index.md\`。目录名 \`<series>\` 是作品的稳定 ID；以后改小说标题时不需要改目录名。

作品主页可填写：

- \`kind: original\` 或 \`kind: fanwork\`
- \`status: ongoing\`、\`completed\` 或 \`hiatus\`
- \`updatedDate\`：最近更新日期
- \`fandom\`：二创原作
- \`contentNote\`：整部作品共用的内容提示
- \`cover\`：封面路径

发布后自动生成 \`/fiction/<series>/\` 作品主页，包含简介、状态、章节数和目录。

### 章节

从 \`templates/fiction-chapter.md\` 创建章节文件。章节必须填写：

- \`series\`：与作品目录名完全一致
- \`chapter\`：用于目录和上下章排序，可以使用 \`3.5\` 这样的幕间编号

例如 \`src/content/fiction/vio-miyako/02.md\`：

\`\`\`yaml
series: "vio-miyako"
chapter: 2
\`\`\`

会生成 \`/fiction/vio-miyako/02/\`。章节页会自动生成“上一章 / 目录 / 下一章”导航，不需要手写链接。

如果一个已发布章节引用了不存在的作品主页，构建会直接报错，避免产生孤立章节。

## 添加项目

在 \`src/content/projects/\` 新建 \`.md\` 文件，可参考 \`templates/project.md\`。项目会自动进入项目列表；\`demoUrl\` 可以填站内部署路径或外部演示链接，\`sourceUrl\` 可选。首页只展示 \`featured: true\` 的项目。

## 目前栏目

| 页面 | 内容来源 |
| --- | --- |
| \`/articles/\` | \`src/content/articles/*.md\` |
| \`/articles/logs/\`、\`/articles/essays/\`、\`/articles/tutorials/\`、\`/articles/fanworks/\` | 文章 frontmatter 的 \`kind\` |
| \`/fiction/\` | \`src/content/fiction/*/index.md\` |
| \`/fiction/<series>/\` | 小说作品主页与自动章节目录 |
| \`/fiction/<series>/<chapter>/\` | 小说章节 |
| \`/projects/\` | \`src/content/projects/*.md\` |

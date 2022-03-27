# Sunny

## 快速开始

进入目录后，执行如下命令：


```bash
npm i
```

## 本地预览

进入目录后，执行如下命令：

```bash
npm run dev
```

## 文档规则

### 目录结构

创建一个 `guide.md` 文件，那么对应的路由就是 `/guide`。

假设你的目录结构如下：

```
.
└── docs
    ├── README.md
    ├── guide.md
    └── sub
        ├── README.md
        └── guide.md
```

那么对应的访问页面将是

```
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/guide
docs/sub/README.md    => http://domain.com/sub/
docs/sub/guide.md     => http://domain.com/sub/guide
```

### 文档配置

使用 `yaml` 格式，放置在文档顶部。

|    参数     |                  说明                  |    类型    |          示例           |
| :---------: | :------------------------------------: | :--------: | :---------------------: |
|    title    |                  标题                  |  `string`  |      这是一个标题       |
|  keywords   | 关键词，空值时取 `tags` 字段，用于 SEO | `string[]` | [HTML, CSS, JavaScript] |
| description |        描述，用于 SEO、文章摘要        |  `string`  |      这是一段描述       |
|    date     |                发布日期                |  `string`  |       2022-03-01        |
|   updated   |                更新日期                |  `string`  |       2022-03-21        |
|    link     |                外部链接                |  `string`  |   https://github.com/   |
|    tags     |                文章标签                | `string[]` | [HTML, CSS, JavaScript] |
|     toc     |     目录层级，0-6 区间，0 为不展示     |  `number`  |            6            |
|    hide     |   值为 `true`时，生产环境不生成页面    | `boolean`  |          true           |

如：
```yaml
---
title: 标题
date: 2022-03-18
updated: 2022-03-20
---
```

## 站点配置

|     参数      |              说明              |     类型      | 默认值 |
|:-----------:| :----------------------------: |:-----------:| :----: |
|    title    |            站点标题            |  `string`   |        |
| description |            站点描述            |  `string`   |        |
|     url     |            站点网址            |  `string`   |        |
|   algolia   | 配置 Algolia 的 DocSearch 服务 |  `object`   |        |
|   navbar    |             导航栏             | `Navbar[]`  |        |
|   sidebar   |             侧边栏             | `Sidebar[]` |        |
|   social    |            社交媒体            |  `object`   |        |
| highlights  |          首页推荐内容          | `string[]`  |        |
|   license   |            内容协议            |  `object`   |        |
|  copyright  |            版权所属            |  `string`   |        |

### Navbar

| 参数  |  说明  |    类型    | 默认值 |
| :---: | :----: | :--------: | :----: |
| text  |  标题  |  `string`  |        |
| link  |  链接  |  `string`  |        |
| items | 子菜单 | `NavBar[]` |        |

### Sidebar

|   参数    |  说明  |    类型     | 默认值 |
| :-------: | :----: | :---------: | :----: |
|   text    |  标题  |  `string`   |        |
|   link    |  链接  |  `string`   |        |
| collapsed |  展开  |  `boolean`  |        |
|   items   | 子菜单 | `Sidebar[]` |        |

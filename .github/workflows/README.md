# Github Actions 说明

## 链接检测
- 本 repo 使用 [markdown-link-check](https://github.com/gaurav-nelson/github-action-markdown-link-check) 检测 markdown 文件中的链接是否有效。
- 由于检测所有文件耗时长（约 10 分钟），提交 PR 时仅检测新增或者有改动的文件（参见 [check-link-pr.yaml](check-link-pr.yaml)）。每天定时检测一次 `master` 上的所有文件（参见 [check-link-schedule.yaml](check-link-schedule.yaml)）。两者的差异在于 `check-modified-files-only` 的设置不同。
- 要临时跳过检测某个链接，可以在链接前一行加入注释：`<!-- markdown-link-check-disable-next-line -->`。更多方法参见[插件文档](https://github.com/gaurav-nelson/github-action-markdown-link-check#disable-check-for-some-links)。
- 要永久跳过某类链接的检测，可以在 [markdown-link-check.json](markdown-link-check.json) 配置文件中，加入需要跳过的网址模式
  ```json
  {
    "ignorePatterns": [
      {
        "reason": "以下链接来自 private repo，github action 无法访问",
        "pattern": "https://github.com/xyz/"
      }
    ]
  }
  ```
  注意，其中 `reason` 字段相当于注释，不一定要填写。
- 目前 repo 中存在大量已知无效的链接，大多是因为 URL 指向的网页年代久远，不复存在。
  - 为了避免不必要的噪音，这些链接已经被永久忽略。参见[配置文件](markdown-link-check.json)中所有带有 `TODO` 字段的网址模式。
  - 正确的修正方法是，从 markdown 文件中把这些链接替换或者删除掉。

# Github Actions 说明

## 链接检测
- 本 repo 使用 [markdown-link-check](https://github.com/gaurav-nelson/github-action-markdown-link-check) 检测 markdown 文件中的链接。
- 提交 PR 时仅检测新增或者有改动的文件。
- Master branch 检测所有文件。
- 如果需要手动跳过检测，请在需要跳过的链接前一行加入注释：`<!-- markdown-link-check-disable-next-line -->`
- 如果需要永久跳过某一类链接的检测，请在 [markdown-link-check.json](./markdown-link-check.json) 配置文件中，加入需要跳过的网址
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
  注意，其中的 `reason` 字段可以不写。

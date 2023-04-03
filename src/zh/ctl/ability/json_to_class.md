---
title: json转class对象
index: true
icon: discover
---

`_class_name`: 类名称
`_type`: 类的类型（DTO 或 Entity）
`_namespace`: 类的命名空间

调用 `php generator.php rice:json_to_class xxx\basic\tests\Generate\tsconfig.json xxx\basic\tests\Generate\`

第一个参数是输入的 `json` 文件路径，第二个参数是生成文件所在的目录

```json
{
  "_class_name": "Test",
  "_type": "Entity",
  "_namespace": "Tests\\Generate",
  "data": [
    {
      "insights": {
        "data": [
          {
            "name": "post_impressions",
            "period": "lifetime",
            "values": [
              {
                "value": 614
              }
            ],
            "title": "Lifetime Post Total Impressions",
            "description": "Lifetime: The number of times your Page's post entered a person's screen. Posts include statuses, photos, links, videos and more. (Total Count)"
          }
        ],
        "paging": {
          "previous": "xxxxxxxxxxxxxxx",
          "next": "yyyyyyyyyyyyyyy"
        }
      },
      "created_time": "2021-10-13T16:11:55+0000",
      "message": "Very important message"
    }
  ],
  "paging": {
    "cursors": {
      "before": "xxxxxxxxxxxxxxx",
      "after": "yyyyyyyyyyyyyyy"
    },
    "next": "zzzzzzzzzz"
  }
}
```
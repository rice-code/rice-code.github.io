---
title: 简介
index: true
icon: discover
---

## php工具包 （php basic tool）

### 安装

```shell script
composer require rice/basic
```

### 功能点
1. 提供基础框架组件
2. 参数自动填充
3. 请求客户端封装

### 使用场景
1. 数组替换为对象进行管理
2. 转换为对象后需要填充属性，可以使用参数自动填充功能
3. 封装字段

### 框架组件
```text
BaseAssembler
BaseDTO
BaseEntity
BaseEnum
BaseException
```

![继承对象关系图解](/imgs/base_relation.png)

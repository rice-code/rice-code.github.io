---
title: 简介
index: true
icon: discover
---


## Assembler

数据装配器，主要继承 `BaseAssembler` 类。该层主要是统一将 `DTO` 和 `Entity` 相互转换，如果缺少了
装配这一层，大部分代码可能就会落在 `Service` 层里面，而且参数这些会比较多，就会造成函数膨胀起来。代码
整洁的原理就是尽量细分，归类，所以提供装配器接口（面向接口编程而非实现）。

> 可选，代码重构时可做优化，提高代码可读性

```php
<?php

namespace App\Assembler;

use App\DTO\TestDTO;
use Illuminate\Http\Request;

class TestAssembler implements BaseAssembler
{
    public function toDTO(Request $request)
    {
        return (new TestDTO())
            ->setName($request->name)
            ->setPassword($request->password);
    }
}

```

## DTO
数据传输层对象，主要继承 `BaseDTO` 类。该层主要是聚合业务层中的多个参数变量，保证编写的代码更加整洁，
并且参数变量更加直观。

> 采用失血模型，基本上只做数据传输，不存在业务行为

![dto](/imgs/dto.png)

## Entity
实体对象目录，主要继承 `BaseEntity` 类，业务逻辑中构建的具体实体模型。继承该抽象类的主体是业务中的
实体对象，主要考验个人对于建模的能力。这里和数据库的模型区别在于，模型是基于数据表进行建模的，实体是
基于业务进行建模的。

> 采用充血模型，提高实体的内聚性

## Enum
枚举类目录，通常存放 `const` 变量, `ReturnCodeEnum` 类，按照阿里巴巴Java手册（泰山版）进行设计。

```php
class ReturnCodeEnum extends BaseEnum
    implements ClientErrorCode, SystemErrorCode, ServiceErrorCode
{
    /**
     * @default OK
     */
    public const OK = '00000';
}
```
使用该包，默认强制要求使用枚举类进行定义返回码和异常码。这样子做可以使代码更可读，并且国际化的信息也能够
与枚举类配合使用。例如：
```php
    /**
     * @level 一级宏观错误码
     * @zh-CN 用户端错误
     */
    public const CLIENT_ERROR = 'A0001';
```
`@zh-CN` 就是中文的描述,具体的标识可以参考国际化地区码。之前有使用过文件配置的方式进行配置结果发现，
使用起来不方便。需要新建不同地区码文件，而且 `Enum` 类对应相关国际化文件过于分散，导致不直观。现在
使用注解的形式进行捆绑在一起，变量与国际化信息更加聚合。

而且使用自动生成国际化文件可以直接使用 `json` 文件, 相对来说不需要可读性，比使用 `php` 更小。


### 使用场景
对接第三方接口会存在请求 `uri` ，大多数时候我们可能会直接写在了 `service`
类中。这样子写其实就把该变量耦合到该类中了，会导致如果我要做一个并发请求的
`service` 类的话，那么我要么定义多次 `uri` 路由。要么就直接用 `service::const`
直接从 `service2` 调用 `service1` 的代码。
为了更好的解耦代码，我们就需要使用到 `Enum` 类，因为枚举类只保存数据，而没有
业务行为，所以可以给多个 `service` 进行调用。

> 为变量调用，提供解耦

## Exception
异常类目录, 与 `Enum` 类配合使用。按照功能模块等进行类的细化，做到单一责任。这样
可以更好的在异常抛出后做出不同的兜底措施。

## phpunit 配置
添加测试用例，保证源代码流程跑通，修改后的代码主流程不会报错。
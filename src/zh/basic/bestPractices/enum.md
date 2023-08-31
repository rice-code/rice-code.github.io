---
title: 枚举类
index: true
icon: discover
---

### 怎么正确使用 Enum 类？

`Basic` 包提供开箱即用的 `Enum` 类文件，一般情况下可以直接使用 `BizEnum` 这个业务枚举类来实现
异常的抛出。如果是需要更丰富的类型，可以继承 `BaseEnum` 来实现。

```php
<?php

namespace Rice\Basic\Components\Enum;

class BizEnum extends BaseEnum
{
    /**
     * @en Business Error
     * @zh-CN 业务错误
     */
    public const DEFAULT = 'default';
}

```

多语言这里采用的是注释的形式进行获取，枚举类是强绑定在异常类的，所以正常情况下要抛出异常，通常是以下的方式进行

```php
throw new BizException(BizEnum::DEFAULT);

throw new BizException('user_id是必传项'); // 自定义信息
```

这里就会底层自动拿到注释内容作为异常信息抛出，这里也可以不使用 `BizEnum::DEFAULT` 的形式，直接写入自定义的
信息也是可以的，不过这样子是不太推荐的。这样直接使用异常信息抛出就会缺少多语言的功能，如果项目不考虑的话，那这
样子的用法也是能接受的。

枚举类提供有获取所有常量的静态方法
```php
BizEnum::getConstants() // 获取所有常量
BizEnum::getParentConstants() // 获取父类所有常量
BizEnum::getChildConstants() // 获取当前类所有常量（所有常量 - 父类常量）
```


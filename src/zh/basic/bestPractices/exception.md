---
title: 异常类
index: true
icon: discover
---

### 怎么正确使用 Exception 类？

`Basic` 包提供开箱即用的 `Exception` 类文件，一般情况下可以直接使用 `BizException` 这个业务异常类来实现
异常的抛出。如果是需要更丰富的类型，可以继承 `BaseException` 来实现。

```php
<?php

namespace Rice\Basic\Components\Exception;

use Rice\Basic\Components\Enum\BizEnum;

class BizException extends BaseException
{
    public static function enumClass(): string
    {
        return BizEnum::class;
    }
}
```
`BaseException` 的实现类需要实现 `enumClass` 返回 `BaseEnum` 相关实现类，之后我们抛异常就可以这样子处理

```php
        try {
            throw new BizException(BizEnum::DEFAULT);
        } catch (BizException $e) {
            $this->assertEquals('Business Error', $e->getMessage());
        }
```

### 注意点

错误返回必须通过异常进行处理，不推荐使用状态码一层层传递数据到控制器层，因为这里会加深犯错的成本，而且代码会深
度耦合起来。控制器层其实只会做 `service` 流程编排和异常捕获处理，把异常放在控制器层会使层级更加清晰。

```php
        try {
            throw new BizException(BizEnum::DEFAULT);
        } catch (BizException $e) {
            return $this->failure(ClientErrorCode::CLIENT_ERROR, $e->getMessage());
        } catch (\Throwable $e) {
            Log::error($e->getMessage());

            return $this->failure(ClientErrorCode::CLIENT_ERROR, '系统出错');
        }
```

使用多层 `catch` 逻辑保证业务异常类直接返回异常信息内容，这里业务复杂的话还能在中间多加几个需要捕获的异常处理，
最后 `Throwable` 类兜底未预料到的错误。这里错误是不能够直接返回给用户的，所以只能是打日志的形式，然后返回***系统出错***就可以
了。


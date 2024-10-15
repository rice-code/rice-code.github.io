---
title: 异常类
index: true
icon: discover
---

### 怎么正确使用 Exception 类？

`Basic` 包的异常类包含多语言和 `http status code` 指定两大功能，通过继承 `BaseException` 就能实现该功能，这
样设计的好处在于：
1. 可以根据异常对象获得状态码返回，便于与框架融合自动返回对应 `http status code`
2. 与 `http status code` 强绑定后，每定义一个异常类都要知道接口返回具体的含义
3. 多语言结合枚举类进行返回，让逻辑更加内聚
4. 只要维护该 `Exception` 注释就能获取到具体返回的状态码和具体异常返回信息

```php
<?php

namespace Rice\Basic\Components\Exception;

use Rice\Basic\Components\Enum\BaseEnum;
use Rice\Basic\Components\Enum\HttpStatusCodeEnum;
use Rice\Basic\Components\Enum\InvalidRequestEnum;

class InvalidRequestException extends BaseException
{
    public static function httpStatusCode(): int
    {
        return HttpStatusCodeEnum::INVALID_REQUEST;
    }

    public static function enumClass(): string
    {
        return InvalidRequestEnum::class;
    }

    /**
     * @throws InvalidRequestException
     */
    public static function default(): void
    {
        throw new self(InvalidRequestEnum::DEFAULT);
    }

    /**
     * 如果这里是控制器的话，我们只要维护好 `phpstorm` 自带注释，那在做注解自动获取异常返回时
     * 我们就能为 openApi 生成一个异常返回
     *
     * @throws InvalidRequestException
     */
    public static function InvalidParam(): void
    {
        throw new self(BaseEnum::INVALID_PARAM);
    }
}

```
`BaseException` 的实现类需要实现 `enumClass` 返回 `BaseEnum` 相关实现类，之后我们抛异常就可以这样子处理

```php
        try {
            throw new InvalidRequestException(InvalidRequestEnum::DEFAULT);
        } catch (InvalidRequestException $e) {
            // 获取验证码
            $e::httpStatusCode();
            // 获取异常信息
            $e->getMessage();
        }
```

### 注意点

错误返回必须通过异常进行处理，不推荐使用状态码一层层传递数据到控制器层，因为这里会加深犯错的成本，而且代码会深
度耦合起来。控制器层其实只会做 `service` 流程编排和异常捕获处理，把异常放在控制器层会使层级更加清晰。

```php
        try {
            throw new InvalidRequestException(InvalidRequestEnum::DEFAULT);
        } catch (BaseException $e) {
            // 直接异常抛出，在框架处进行统一异常返回
            throw $e;
        } catch (\Throwable $e) {
            // 非继承 `BaseException` 异常返回
            Log::error($e->getMessage());

            return $this->failure(ClientErrorCode::CLIENT_ERROR, '系统出错');
        }
```

使用多层 `catch` 逻辑保证业务异常类直接返回异常信息内容，这里业务复杂的话还能在中间多加几个需要捕获的异常处理，
最后 `Throwable` 类兜底未预料到的错误。这里错误是不能够直接返回给用户的，所以只能是打日志的形式，然后返回***系统出错***就可以
了。


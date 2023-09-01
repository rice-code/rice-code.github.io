---
title: DTO类
index: true
icon: discover
---

### 怎么正确使用 DTO 类？

`Basic` 包提供开箱即用的 `DTO` 类文件，`Response` 类是一个返回对象的 `DTO` ，使用这个类可以保证我们的如果是
需要更丰富的类型，可以继承 `BaseDTO` 来实现。

比如现在可以定义一个用户登录 `UserDTO`:

```php
<?php

namespace App\DTO;

use Rice\Basic\Components\DTO\BaseDTO;
use Rice\Basic\Support\Traits\AutoFillProperties;

/**
 * @method self setAccount(string $value)
 * @method string getAccount()
 * @method self setPassword(string $value)
 * @method string getPassword()
 */
class UserDTO extends BaseDTO
{
    use AutoFillProperties;

    /**
     * @var string
     */
    protected $account;

    protected string $password;
}

```

这里的注释可以使用 `rice/ctl` 包的自动生成命令，只要按照上面定义好类属性就行。高版本 `php` 可以直接使用类型
限制，低版本就使用 `@var` 注释进行类型绑定，这样子才能知道类注释生成的类型。

### 参数自动填充
这里为了方便为 `DTO` 赋值，所以会 `use AutoFillProperties;` 引入自动绑定属性参数值。像下面这样

```php
$dto  = new UserDTO($request->all());
```

>前端传的参数可以是下划线 `a_b` 或者是驼峰 `aB` 这两种情况，自动填充参数就会把下划线 `a_b` 转为 `aB` 的形式，
所以前端传值更加灵活，后端也不用关注 `DTO` 赋值的问题，只要保持和前端传参一致就行。

### 属性获取

`BaseDTO` 默认使用 `use Accessor` `trait` 类进行参数获取，避免 `DTO` 类属性暴露。

```php
<?php

namespace Rice\Basic\Components\DTO;

use Rice\Basic\Support\Traits\Accessor;

abstract class BaseDTO
{
    use Accessor;
}
```

```php
$dto  = new UserDTO($request->all());
$dto->getAccount(); // account属性值获取
```

默认 `BaseDTO` 是允许 `getting` 和 `setting` 的，如果你要所有 `DTO` 只允许内部进行赋值，那就可以把 `setting`
禁掉。只要在相关的 `DTO` 类再引入一个 `use Getter;` 就只允许使用 `get` 函数了，这样子的好处就是类的属性修改
只在内部发生，避免 `DTO` 逻辑上到处赋值。

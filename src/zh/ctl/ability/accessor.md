---
title: 访问器自动生成注释
index: true
icon: discover
---

以这个 `tests\Support\Annotation\Cat.php` 文件为例，我们使用了 `Accessor` 这个 `trait`。所以会
存在 `setxxx()` 和 `getxxx()`，但是这里面会造成实例化类后调用没有相关的函数提示。为了解决这个问题，可以
使用 `php ctl.php rice:accessor xxx\tests\Support\Annotation\Cat.php` 去执行自动生成注释。

> 只会生成protected 属性的注释，如果属性没有指定类型，那么会查看注释是否有 @var 指定相关类型，有的
> 话自动获取

生成前：
```php
class Cat
{
    use AutoFillProperties;
    use Accessor;

    /**
     * 眼睛.
     *
     * @return $this
     *
     * @throws \Exception
     *
     * @var string
     * @Param $class
     */
    protected $eyes;

    /**
     * @var S
     */
    protected $speak;
}
```

生成后：
```php
/**
 * Class Cat.
 * @method self     setEyes(string $value)
 * @method string   getEyes()
 * @method self     setSpeak(S $value)
 * @method S        getSpeak()
 */
class Cat
{
    use AutoFillProperties;
    use Accessor;

    /**
     * @var string
     * @Param $class
     */
    protected $eyes;

    /**
     * @var S
     */
    protected $speak;
}

```

#### tips：推荐属性是对象时不要使用长链式调用

##### bad

```php
$cat = new \Tests\Entity\Cat();
$cat->getSpeak()->text();
```

##### better
Cat重写一个方法
```php
public function getSpeakText(): string
{
    return $this->getSpeak()->text();
}

$cat->getSpeakText();
```

这样子做的好处是提高内聚性，虽然直接链式调用会方便使用，但是出现链式的一个
环节要修改名称的时候，如果多个地方都有使用到，那么修改起来就会存在多个地方。
重写方法后，统一使用 `Cat` 类的 `getSpeakText` 方法。需要修改时，就只
改动 `Cat` 类就行了，降低出错成本。
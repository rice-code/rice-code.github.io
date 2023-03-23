import{_ as s,W as n,X as a,a2 as e}from"./framework-5689acd3.js";const t={},c=e(`<h2 id="字段封装" tabindex="-1"><a class="header-anchor" href="#字段封装" aria-hidden="true">#</a> 字段封装</h2><p>在类里面使用 <code>use Accessor</code> 对类的字段属性进行封装，之前设置为 <code>public</code> 权限的全部改为 <code>protected</code> 或 <code>private</code>。 当属性为对象时，<code>getter</code> 会获取其克隆对象。这样子做是为了避免对象 暴漏出去后，不小心修改值，导致破坏内部封装，增加心智负担。</p><blockquote><p><code>Accessor</code> 类默认 <code>setter</code>, <code>getter</code> 都启用，如果只需要 <code>setter</code> 或者 <code>getter</code> 的话，可以再 <code>use Setter</code> 或 <code>use Getter</code></p></blockquote><h3 id="bad" tabindex="-1"><a class="header-anchor" href="#bad" aria-hidden="true">#</a> bad</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$cat</span><span class="token operator">-&gt;</span><span class="token property">speak</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="better" tabindex="-1"><a class="header-anchor" href="#better" aria-hidden="true">#</a> better</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$cat</span><span class="token operator">-&gt;</span><span class="token function">getSpeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$cat</span><span class="token operator">-&gt;</span><span class="token function">setSpeak</span><span class="token punctuation">(</span><span class="token variable">$val</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>面向对象三大特性之一封装，即隐藏对象内部数据的能力。如果都是公共属性的话， 就会造成该对象没有任何限制的进行获取和修改属性数据，导致后续维护变得复杂。</p></blockquote><h2 id="注解使用" tabindex="-1"><a class="header-anchor" href="#注解使用" aria-hidden="true">#</a> 注解使用</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Cat</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">AutoFillProperties</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$eyes</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name">Eat</span>
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$eat</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name">Speak</span>
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$speak</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$hair</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入 <code>AutoFillProperties</code> 类,然后使用 <code>@var</code> 进行编写注解，第一个参数是变量类型，第二个就是注释。这里面 实现原理是使用类反射获取到相关注释的内容，正则进行匹配相关的值。最后判断这个类型是系统类型还是自定义类，是类的 话就需要读取文件的命名空间，获取到相关对象的命名空间，从而实例化对象。这里面提供了缓存，因为类的改动只会在编写 时经常变动。</p><h2 id="请求参数自动数据填充" tabindex="-1"><a class="header-anchor" href="#请求参数自动数据填充" aria-hidden="true">#</a> 请求参数自动数据填充</h2><p><code>Laravel</code> 和 <code>Tp</code> 框架现在都支持自定义 <code>Request</code> 对象，所以这里我们可以定义所有的入参对象。然后使用 <code>basic</code> 包的 <code>AutoFillProperties</code> 类就能实现参数自动填充到 <code>Request</code> 对象的类属性中去了。</p><p><code>trait</code> <code>AutoFillProperties</code> 已使用类属性,使用该类必须避免重写问题。</p><p><code>src/Entity/FrameEntity.php</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">array</span> <span class="token variable">$_filter</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;_setter&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;_getter&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;_readOnly&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;_params&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;_properties&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;_alias&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;_cache&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;_idx&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),i=[c];function p(o,l){return n(),a("div",null,i)}const r=s(t,[["render",p],["__file","sample.html.vue"]]);export{r as default};

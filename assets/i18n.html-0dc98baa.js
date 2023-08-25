import{_ as n,W as s,X as a,$ as e}from"./framework-55e79604.js";const t={},c=e(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">interface</span> <span class="token class-name-definition class-name">Other</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@en</span> one
     * <span class="token keyword">@zh-CN</span> 一
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;1&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestEnum</span> <span class="token keyword">implements</span> <span class="token class-name">Other</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@default</span> OK
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token constant">OK</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;00000&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抛弃传统的单独配置多语言的描述，因为维护起来非常费劲。在新功能添加新的字段时，多语言 要在多个文件中进行映射，使用该形式可以让描述与属性绑定在一起，更加清晰。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php .<span class="token punctuation">\\</span>ctl.php i18n:cache xxx<span class="token punctuation">\\</span>ctl<span class="token punctuation">\\</span>tests<span class="token punctuation">\\</span>Enum xxx<span class="token punctuation">\\</span>ctl<span class="token punctuation">\\</span>tests<span class="token punctuation">\\</span>Lang Tests<span class="token punctuation">\\</span>Enum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一个路径是需要生成缓存的目录，第二个是缓存输出的目录，第三个是生成缓存的命名空间前缀</p>`,4),p=[c];function i(l,o){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","i18n.html.vue"]]);export{u as default};

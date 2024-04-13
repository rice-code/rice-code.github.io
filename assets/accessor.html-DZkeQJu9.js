import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-BCWIfWHd.js";const t={},p=e(`<p>以这个 <code>tests\\Support\\Annotation\\Cat.php</code> 文件为例，我们使用了 <code>Accessor</code> 这个 <code>trait</code>。所以会 存在 <code>setxxx()</code> 和 <code>getxxx()</code>，但是这里面会造成实例化类后调用没有相关的函数提示。为了解决这个问题，可以 使用 <code>php ctl.php rice:accessor xxx\\tests\\Support\\Annotation\\Cat.php</code> 去执行自动生成注释。</p><blockquote><p>只会生成protected 属性的注释，如果属性没有指定类型，那么会查看注释是否有 @var 指定相关类型，有的 话自动获取</p></blockquote><p>生成前：</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Cat</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">AutoFillProperties</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token package">Accessor</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 眼睛.
     *
     * <span class="token keyword">@return</span> $this
     *
     * <span class="token keyword">@throws</span> <span class="token class-name"><span class="token punctuation">\\</span>Exception</span>
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     * @Param $class
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$eyes</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name">S</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$speak</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成后：</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Class Cat.
 * <span class="token keyword">@method</span> self     setEyes(string $value)
 * <span class="token keyword">@method</span> string   getEyes()
 * <span class="token keyword">@method</span> self     setSpeak(S $value)
 * <span class="token keyword">@method</span> S        getSpeak()
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Cat</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">AutoFillProperties</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token package">Accessor</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     * @Param $class
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$eyes</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name">S</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$speak</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tips-推荐属性是对象时不要使用长链式调用" tabindex="-1"><a class="header-anchor" href="#tips-推荐属性是对象时不要使用长链式调用"><span>tips：推荐属性是对象时不要使用长链式调用</span></a></h4><h5 id="bad" tabindex="-1"><a class="header-anchor" href="#bad"><span>bad</span></a></h5><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$cat</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Tests<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$cat</span><span class="token operator">-&gt;</span><span class="token function">getSpeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="better" tabindex="-1"><a class="header-anchor" href="#better"><span>better</span></a></h5><p>Cat重写一个方法</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getSpeakText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getSpeak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$cat</span><span class="token operator">-&gt;</span><span class="token function">getSpeakText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子做的好处是提高内聚性，虽然直接链式调用会方便使用，但是出现链式的一个 环节要修改名称的时候，如果多个地方都有使用到，那么修改起来就会存在多个地方。 重写方法后，统一使用 <code>Cat</code> 类的 <code>getSpeakText</code> 方法。需要修改时，就只 改动 <code>Cat</code> 类就行了，降低出错成本。</p>`,13),c=[p];function o(i,l){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","accessor.html.vue"]]),m=JSON.parse('{"path":"/zh/ctl/ability/accessor.html","title":"访问器自动生成注释","lang":"zh-CN","frontmatter":{"title":"访问器自动生成注释","index":true,"icon":"discover","description":"以这个 tests\\\\Support\\\\Annotation\\\\Cat.php 文件为例，我们使用了 Accessor 这个 trait。所以会 存在 setxxx() 和 getxxx()，但是这里面会造成实例化类后调用没有相关的函数提示。为了解决这个问题，可以 使用 php ctl.php rice:accessor xxx\\\\tests\\\\Support\\\\...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/ctl/ability/accessor.html"}],["meta",{"property":"og:site_name","content":"Rice-Code文档"}],["meta",{"property":"og:title","content":"访问器自动生成注释"}],["meta",{"property":"og:description","content":"以这个 tests\\\\Support\\\\Annotation\\\\Cat.php 文件为例，我们使用了 Accessor 这个 trait。所以会 存在 setxxx() 和 getxxx()，但是这里面会造成实例化类后调用没有相关的函数提示。为了解决这个问题，可以 使用 php ctl.php rice:accessor xxx\\\\tests\\\\Support\\\\..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-03T13:10:30.000Z"}],["meta",{"property":"article:author","content":"dengmf"}],["meta",{"property":"article:modified_time","content":"2023-04-03T13:10:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"访问器自动生成注释\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-03T13:10:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dengmf\\",\\"url\\":\\"https://github.com/dmf-code\\"}]}"]]},"headers":[],"git":{"createdTime":1680527430000,"updatedTime":1680527430000,"contributors":[{"name":"dengminfeng","email":"1015814408@qq.com","commits":1}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"zh/ctl/ability/accessor.md","localizedDate":"2023年4月3日","autoDesc":true}');export{u as comp,m as data};

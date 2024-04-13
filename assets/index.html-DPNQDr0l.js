import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,d as a}from"./app-BCWIfWHd.js";const t="/imgs/dto.png",p={},o=a(`<h2 id="assembler" tabindex="-1"><a class="header-anchor" href="#assembler"><span>Assembler</span></a></h2><p>数据装配器，主要继承 <code>BaseAssembler</code> 类。该层主要是统一将 <code>DTO</code> 和 <code>Entity</code> 相互转换，如果缺少了 装配这一层，大部分代码可能就会落在 <code>Service</code> 层里面，而且参数这些会比较多，就会造成函数膨胀起来。代码 整洁的原理就是尽量细分，归类，所以提供装配器接口（面向接口编程而非实现）。</p><blockquote><p>可选，代码重构时可做优化，提高代码可读性</p></blockquote><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Assembler</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>DTO<span class="token punctuation">\\</span>TestDTO</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestAssembler</span> <span class="token keyword">implements</span> <span class="token class-name">BaseAssembler</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toDTO</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TestDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">password</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dto" tabindex="-1"><a class="header-anchor" href="#dto"><span>DTO</span></a></h2><p>数据传输层对象，主要继承 <code>BaseDTO</code> 类。该层主要是聚合业务层中的多个参数变量，保证编写的代码更加整洁， 并且参数变量更加直观。</p><blockquote><p>采用失血模型，基本上只做数据传输，不存在业务行为</p></blockquote><p><img src="`+t+`" alt="dto"></p><h2 id="entity" tabindex="-1"><a class="header-anchor" href="#entity"><span>Entity</span></a></h2><p>实体对象目录，主要继承 <code>BaseEntity</code> 类，业务逻辑中构建的具体实体模型。继承该抽象类的主体是业务中的 实体对象，主要考验个人对于建模的能力。这里和数据库的模型区别在于，模型是基于数据表进行建模的，实体是 基于业务进行建模的。</p><blockquote><p>采用充血模型，提高实体的内聚性</p></blockquote><h2 id="enum" tabindex="-1"><a class="header-anchor" href="#enum"><span>Enum</span></a></h2><p>枚举类目录，通常存放 <code>const</code> 变量, <code>ReturnCodeEnum</code> 类，按照阿里巴巴Java手册（泰山版）进行设计。</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ReturnCodeEnum</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEnum</span>
    <span class="token keyword">implements</span> <span class="token class-name">ClientErrorCode</span><span class="token punctuation">,</span> SystemErrorCode<span class="token punctuation">,</span> ServiceErrorCode
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@default</span> OK
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token constant">OK</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;00000&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用该包，默认强制要求使用枚举类进行定义返回码和异常码。这样子做可以使代码更可读，并且国际化的信息也能够 与枚举类配合使用。例如：</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>    <span class="token doc-comment comment">/**
     * <span class="token keyword">@level</span> 一级宏观错误码
     * <span class="token keyword">@zh-CN</span> 用户端错误
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token constant">CLIENT_ERROR</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;A0001&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@zh-CN</code> 就是中文的描述,具体的标识可以参考国际化地区码。之前有使用过文件配置的方式进行配置结果发现， 使用起来不方便。需要新建不同地区码文件，而且 <code>Enum</code> 类对应相关国际化文件过于分散，导致不直观。现在 使用注解的形式进行捆绑在一起，变量与国际化信息更加聚合。</p><p>而且使用自动生成国际化文件可以直接使用 <code>json</code> 文件, 相对来说不需要可读性，比使用 <code>php</code> 更小。</p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><p>对接第三方接口会存在请求 <code>uri</code> ，大多数时候我们可能会直接写在了 <code>service</code> 类中。这样子写其实就把该变量耦合到该类中了，会导致如果我要做一个并发请求的 <code>service</code> 类的话，那么我要么定义多次 <code>uri</code> 路由。要么就直接用 <code>service::const</code> 直接从 <code>service2</code> 调用 <code>service1</code> 的代码。 为了更好的解耦代码，我们就需要使用到 <code>Enum</code> 类，因为枚举类只保存数据，而没有 业务行为，所以可以给多个 <code>service</code> 进行调用。</p><blockquote><p>为变量调用，提供解耦</p></blockquote><h2 id="exception" tabindex="-1"><a class="header-anchor" href="#exception"><span>Exception</span></a></h2><p>异常类目录, 与 <code>Enum</code> 类配合使用。按照功能模块等进行类的细化，做到单一责任。这样 可以更好的在异常抛出后做出不同的兜底措施。</p><h2 id="phpunit-配置" tabindex="-1"><a class="header-anchor" href="#phpunit-配置"><span>phpunit 配置</span></a></h2><p>添加测试用例，保证源代码流程跑通，修改后的代码主流程不会报错。</p>`,25),c=[o];function i(l,d){return e(),s("div",null,c)}const m=n(p,[["render",i],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/zh/basic/comp/","title":"简介","lang":"zh-CN","frontmatter":{"title":"简介","index":true,"icon":"discover","description":"Assembler 数据装配器，主要继承 BaseAssembler 类。该层主要是统一将 DTO 和 Entity 相互转换，如果缺少了 装配这一层，大部分代码可能就会落在 Service 层里面，而且参数这些会比较多，就会造成函数膨胀起来。代码 整洁的原理就是尽量细分，归类，所以提供装配器接口（面向接口编程而非实现）。 可选，代码重构时可做优化，提...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/basic/comp/"}],["meta",{"property":"og:site_name","content":"Rice-Code文档"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"Assembler 数据装配器，主要继承 BaseAssembler 类。该层主要是统一将 DTO 和 Entity 相互转换，如果缺少了 装配这一层，大部分代码可能就会落在 Service 层里面，而且参数这些会比较多，就会造成函数膨胀起来。代码 整洁的原理就是尽量细分，归类，所以提供装配器接口（面向接口编程而非实现）。 可选，代码重构时可做优化，提..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/imgs/dto.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-23T14:05:32.000Z"}],["meta",{"property":"article:author","content":"dengmf"}],["meta",{"property":"article:modified_time","content":"2023-03-23T14:05:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgs/dto.png\\"],\\"dateModified\\":\\"2023-03-23T14:05:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dengmf\\",\\"url\\":\\"https://github.com/dmf-code\\"}]}"]]},"headers":[{"level":2,"title":"Assembler","slug":"assembler","link":"#assembler","children":[]},{"level":2,"title":"DTO","slug":"dto","link":"#dto","children":[]},{"level":2,"title":"Entity","slug":"entity","link":"#entity","children":[]},{"level":2,"title":"Enum","slug":"enum","link":"#enum","children":[{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}]},{"level":2,"title":"Exception","slug":"exception","link":"#exception","children":[]},{"level":2,"title":"phpunit 配置","slug":"phpunit-配置","link":"#phpunit-配置","children":[]}],"git":{"createdTime":1679580332000,"updatedTime":1679580332000,"contributors":[{"name":"dengminfeng","email":"1015814408@qq.com","commits":1}]},"readingTime":{"minutes":2.91,"words":873},"filePathRelative":"zh/basic/comp/README.md","localizedDate":"2023年3月23日","autoDesc":true}');export{m as comp,k as data};

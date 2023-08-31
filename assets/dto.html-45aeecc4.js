import{_ as s,W as n,X as a,$ as e}from"./framework-55e79604.js";const c={},p=e(`<h3 id="怎么正确使用-dto-类" tabindex="-1"><a class="header-anchor" href="#怎么正确使用-dto-类" aria-hidden="true">#</a> 怎么正确使用 DTO 类？</h3><p><code>Basic</code> 包提供开箱即用的 <code>DTO</code> 类文件，<code>Response</code> 类是一个返回对象的 <code>DTO</code> ，使用这个类可以保证我们的如果是 需要更丰富的类型，可以继承 <code>BaseDTO</code> 来实现。</p><p>比如现在可以定义一个用户登录 <code>UserDTO</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>DTO</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Rice<span class="token punctuation">\\</span>Basic<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>DTO<span class="token punctuation">\\</span>BaseDTO</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Rice<span class="token punctuation">\\</span>Basic<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>AutoFillProperties</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@method</span> self setAccount(string $value)
 * <span class="token keyword">@method</span> string getAccount()
 * <span class="token keyword">@method</span> self setPassword(string $value)
 * <span class="token keyword">@method</span> string getPassword()
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserDTO</span> <span class="token keyword">extends</span> <span class="token class-name">BaseDTO</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">AutoFillProperties</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$account</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$password</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的注释可以使用 <code>rice/ctl</code> 包的自动生成命令，只要按照上面定义好类属性就行。高版本 <code>php</code> 可以直接使用类型 限制，低版本就使用 <code>@var</code> 注释进行类型绑定，这样子才能知道类注释生成的类型。</p><p>这里为了方便为 <code>DTO</code> 赋值，所以会 <code>use AutoFillProperties;</code> 引入自动绑定属性参数值。像下面这样</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$dto</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDTO</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>前端传的参数可以是下划线 <code>a_b</code> 或者是驼峰 <code>aB</code> 这两种情况，自动填充参数就会把下划线 <code>a_b</code> 转为 <code>aB</code> 的形式， 所以前端传值更加灵活，后端也不用关注 <code>DTO</code> 赋值的问题，只要保持和前端传参一致就行。</p>`,8),o=[p];function t(l,i){return n(),a("div",null,o)}const r=s(c,[["render",t],["__file","dto.html.vue"]]);export{r as default};

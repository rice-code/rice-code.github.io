import{_ as e,W as t,X as p,Y as n,a0 as s,Z as o,$ as c,C as i}from"./framework-55e79604.js";const l={},u=n("h3",{id:"larvel使用-basic-ctl-包-demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#larvel使用-basic-ctl-包-demo","aria-hidden":"true"},"#"),s(" Larvel使用 "),n("code",null,"basic"),s(", "),n("code",null,"ctl"),s(" 包 "),n("code",null,"demo")],-1),r={href:"https://github.com/rice-code/basic-demo-laravel",target:"_blank",rel:"noopener noreferrer"},k=c(`<h3 id="完善-controller-返回结构" tabindex="-1"><a class="header-anchor" href="#完善-controller-返回结构" aria-hidden="true">#</a> 完善 <code>Controller</code> 返回结构</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Rice<span class="token punctuation">\\</span>Basic<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>DTO<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Bus<span class="token punctuation">\\</span>DispatchesJobs</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Routing<span class="token punctuation">\\</span>Controller</span> <span class="token keyword">as</span> BaseController<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>ValidatesRequests</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>Access<span class="token punctuation">\\</span>AuthorizesRequests</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Controller</span> <span class="token keyword">extends</span> <span class="token class-name">BaseController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">AuthorizesRequests</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token package">DispatchesJobs</span><span class="token punctuation">;</span>
    <span class="token keyword">use</span> <span class="token package">ValidatesRequests</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">success</span><span class="token punctuation">(</span><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$resp</span> <span class="token operator">=</span> <span class="token class-name static-context">Response</span><span class="token operator">::</span><span class="token function">buildSuccess</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token variable">$resp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">failure</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$errCode</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$errMessage</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$resp</span> <span class="token operator">=</span> <span class="token class-name static-context">Response</span><span class="token operator">::</span><span class="token function">buildFailure</span><span class="token punctuation">(</span><span class="token variable">$errCode</span><span class="token punctuation">,</span> <span class="token variable">$errMessage</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token variable">$resp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Response</span> <span class="token variable">$resp</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;success&#39;</span>    <span class="token operator">=&gt;</span> <span class="token variable">$resp</span><span class="token operator">-&gt;</span><span class="token function">getSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;errCode&#39;</span>    <span class="token operator">=&gt;</span> <span class="token variable">$resp</span><span class="token operator">-&gt;</span><span class="token function">getErrCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;errMessage&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$resp</span><span class="token operator">-&gt;</span><span class="token function">getErrMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;data&#39;</span>       <span class="token operator">=&gt;</span> <span class="token variable">$resp</span><span class="token operator">-&gt;</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exceptions-增加异常处理" tabindex="-1"><a class="header-anchor" href="#exceptions-增加异常处理" aria-hidden="true">#</a> Exceptions 增加异常处理</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exceptions</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Throwable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Rice<span class="token punctuation">\\</span>Basic<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>DTO<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>ValidationException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Rice<span class="token punctuation">\\</span>Basic<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>Enum<span class="token punctuation">\\</span>ReturnCode<span class="token punctuation">\\</span>ClientErrorCode</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>Handler</span> <span class="token keyword">as</span> ExceptionHandler<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Handler</span> <span class="token keyword">extends</span> <span class="token class-name">ExceptionHandler</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * A list of the exception types that are not reported.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;int, class-string&lt;Throwable&gt;&gt;
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$dontReport</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span>&lt;int, string&gt;
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$dontFlash</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;current_password&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;password_confirmation&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Register the exception handling callbacks for the application.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 运行异常处理</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">renderable</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>RuntimeException</span> <span class="token variable">$e</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span>
                <span class="token class-name static-context">Response</span><span class="token operator">::</span><span class="token function">buildFailure</span><span class="token punctuation">(</span>
                    <span class="token class-name static-context">ClientErrorCode</span><span class="token operator">::</span><span class="token constant">USER_REQUEST_PARAMETER_ERROR</span><span class="token punctuation">,</span>
                    <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 参数校验异常处理</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">renderable</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">ValidationException</span> <span class="token variable">$e</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span>
                <span class="token class-name static-context">Response</span><span class="token operator">::</span><span class="token function">buildFailure</span><span class="token punctuation">(</span>
                    <span class="token class-name static-context">ClientErrorCode</span><span class="token operator">::</span><span class="token constant">USER_REQUEST_PARAMETER_ERROR</span><span class="token punctuation">,</span>
                    <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token property">validator</span><span class="token operator">-&gt;</span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token property">validator</span><span class="token operator">-&gt;</span><span class="token function">getMessageBag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="场景校验" tabindex="-1"><a class="header-anchor" href="#场景校验" aria-hidden="true">#</a> 场景校验</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Requests</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Rice<span class="token punctuation">\\</span>Basic<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>Scene</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>FormRequest</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Rice<span class="token punctuation">\\</span>Basic<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>AutoFillProperties</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserRequest</span> <span class="token keyword">extends</span> <span class="token class-name">FormRequest</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Scene</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get the validation rules that apply to the request.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;account&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|string|max:255&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|string|max:255&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">scenes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;save&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;account&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function d(v,m){const a=i("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[s("basic-demo-laravel"),o(a)])]),k])}const g=e(l,[["render",d],["__file","index.html.vue"]]);export{g as default};

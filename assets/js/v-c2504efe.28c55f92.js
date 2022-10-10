"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[9196],{887:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-c2504efe",path:"/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/babel.html",title:"Babel",lang:"zh-CN",frontmatter:{release:!0,tags:["babel"],desc:"记录下 babel 主要配置"},excerpt:"",headers:[],git:{createdTime:1630400773e3,updatedTime:1647017025e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:2}]}}},7310:(s,n,a)=>{a.r(n),a.d(n,{default:()=>e});var l=a(5393);const p=[(0,l.uE)('<h1 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h1><ul><li>@babel/preset-env：支持所有 es 标准的特性 <ul><li>target <ul><li>@babel/compat-table：babel 会使用 brwoserslist 来把它们转成目标环境具体版本的数据</li><li><code> &quot;presets&quot;: [[&quot;@babel/preset-env&quot;, { &quot;targets&quot;: &quot;defaults&quot; }]]</code></li></ul></li><li>corejs：polyfill <ul><li>polyfill 默认是全局引入的</li></ul></li><li>useBuiltIns：使用 polyfill（corejs）的方式 <ul><li>entry：入口处全部引入</li><li>usage：还是每个文件引入用到的（usage）</li><li>false</li></ul></li></ul></li><li>@babel/plugin-transform-runtime <ul><li>减少重复 helpers 代码</li><li>防止 polyfill 污染全局</li><li>@babel/plugin-transform-runtime 优先级比 @babel/preset-env 高，意味着同时使用 corejs 会冲突，无法根据 target 动态引入 polyfill</li></ul></li></ul><p>项目配置</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">{</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0A3069;">&quot;presets&quot;</span><span style="color:#24292F;">: [</span></span>\n<span class="line"><span style="color:#24292F;">        [</span></span>\n<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">&quot;@babel/preset-env&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">            {</span></span>\n<span class="line"><span style="color:#24292F;">                </span><span style="color:#0A3069;">&quot;targets&quot;</span><span style="color:#24292F;">:</span></span>\n<span class="line"><span style="color:#24292F;">                {</span></span>\n<span class="line"><span style="color:#24292F;">                    </span><span style="color:#0A3069;">&quot;chrome&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;58&quot;</span></span>\n<span class="line"><span style="color:#24292F;">                    </span><span style="color:#6E7781;">// 按自己需要填写</span></span>\n<span class="line"><span style="color:#24292F;">                },</span></span>\n<span class="line"><span style="color:#24292F;">                </span><span style="color:#0A3069;">&quot;useBuiltIns&quot;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">&quot;entry&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">                </span><span style="color:#0A3069;">&quot;corejs&quot;</span><span style="color:#24292F;">:</span></span>\n<span class="line"><span style="color:#24292F;">                {</span></span>\n<span class="line"><span style="color:#24292F;">                    </span><span style="color:#0A3069;">&quot;version&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">3</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">                    </span><span style="color:#0A3069;">&quot;proposals&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">true</span><span style="color:#24292F;"> </span><span style="color:#6E7781;">// @babel/preset-env 不会包含低于 Stage 3 的 JavaScript 语法建议</span></span>\n<span class="line"><span style="color:#24292F;">                }</span></span>\n<span class="line"><span style="color:#24292F;">            }</span></span>\n<span class="line"><span style="color:#24292F;">        ]</span></span>\n<span class="line"><span style="color:#24292F;">    ],</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0A3069;">&quot;plugins&quot;</span><span style="color:#24292F;">: [</span></span>\n<span class="line"><span style="color:#24292F;">        [</span></span>\n<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">            {</span></span>\n<span class="line"><span style="color:#24292F;">                </span><span style="color:#0A3069;">&quot;corejs&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">false</span><span style="color:#24292F;"> </span><span style="color:#6E7781;">// 防止与 @babel/preset-env 冲突</span></span>\n<span class="line"><span style="color:#24292F;">            }</span></span>\n<span class="line"><span style="color:#24292F;">        ]</span></span>\n<span class="line"><span style="color:#24292F;">    ]</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;core-js/stable&#39;</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;regenerator-runtime/runtime&#39;</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#6E7781;">// 入口文件代码</span></span>\n<span class="line"></span></code></pre></div><p>库配置</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">{</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0A3069;">&quot;presets&quot;</span><span style="color:#24292F;">: [</span></span>\n<span class="line"><span style="color:#24292F;">        [</span></span>\n<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">&quot;@babel/preset-env&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">        ]</span></span>\n<span class="line"><span style="color:#24292F;">    ],</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0A3069;">&quot;plugins&quot;</span><span style="color:#24292F;">: [</span></span>\n<span class="line"><span style="color:#24292F;">        [</span></span>\n<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">            {</span></span>\n<span class="line"><span style="color:#24292F;">                </span><span style="color:#0A3069;">&quot;version&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">3</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">                </span><span style="color:#0A3069;">&quot;proposals&quot;</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">true</span></span>\n<span class="line"><span style="color:#24292F;">            }</span></span>\n<span class="line"><span style="color:#24292F;">        ]</span></span>\n<span class="line"><span style="color:#24292F;">    ]</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span></code></pre></div>',6)],o={},e=(0,a(3860).Z)(o,[["render",function(s,n){return(0,l.wg)(),(0,l.iD)("div",null,p)}]])},3860:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,l]of n)a[s]=l;return a}}}]);
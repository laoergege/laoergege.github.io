"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[4349],{4833:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-093d016d",path:"/packages/vuepress-plugin-vssue-next-compat/",title:"Release vuepress-plugin-vssue-next-compat 🎉",lang:"zh-CN",frontmatter:{title:"Release vuepress-plugin-vssue-next-compat 🎉",release:!0,top:2,description:"A compat version for vuepress-next of vuepress-plugin-vssue."},excerpt:"",headers:[{level:2,title:"Why",slug:"why",children:[]},{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"onBeforeOauth",slug:"onbeforeoauth",children:[]}]},{level:2,title:"Changelog",slug:"changelog",children:[]}],git:{createdTime:1655190994e3,updatedTime:1656319507e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:7}]}}},1873:(s,n,a)=>{a.r(n),a.d(n,{default:()=>b});var e=a(5393);const l=(0,e._)("h1",{id:"laoergege-vuepress-plugin-vssue-next-compat",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#laoergege-vuepress-plugin-vssue-next-compat","aria-hidden":"true"},"#"),(0,e.Uk)(" @laoergege/vuepress-plugin-vssue-next-compat")],-1),p=(0,e._)("p",null,"A compat version for vuepress-next of vuepress-plugin-vssue.",-1),o=(0,e._)("h2",{id:"why",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#why","aria-hidden":"true"},"#"),(0,e.Uk)(" Why")],-1),t={href:"https://vssue.js.org/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("Vssue"),c=(0,e.Uk)(" is currently developed based on vue2, so it is not compatible with vuepress-next."),i=(0,e.uE)('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Install from the command line:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292f;">npm install @laoergege/vuepress-plugin-vssue-next-compat</span></span>\n<span class="line"><span style="color:#24292f;"></span></span></code></pre></div><p>Import vssue css:</p><p>In Browser</p><div class="language-html ext-html"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">head</span><span style="color:#24292F;">&gt;</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">&lt;!-- style sheet of Vssue --&gt;</span></span>\n<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">link</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">rel</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;stylesheet&quot;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">href</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;https://unpkg.com/vssue/dist/vssue.min.css&quot;</span><span style="color:#24292F;">&gt;</span></span>\n<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">head</span><span style="color:#24292F;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>or in APP</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">npm install vssue</span></span>\n<span class="line"></span></code></pre></div><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">// .vuepress/clinet.js</span></span>\n<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vssue/dist/vssue.css&#39;</span></span>\n<span class="line"></span></code></pre></div>',9),u=(0,e.Uk)("With this way, you can build your theme. "),y={href:"https://vssue.js.org/guide/styles.html#use-source-code-of-vssue-styles",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("see more"),g=(0,e.uE)('<p>Config plugin:</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">// .vuepress/config.js</span></span>\n<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { VssuePlugin } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;@laoergege/vuepress-plugin-vssue-next-compat&quot;</span><span style="color:#24292F;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// ...</span></span>\n<span class="line"><span style="color:#953800;">plugins</span><span style="color:#24292F;">:[</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">VssuePlugin</span><span style="color:#24292F;">({</span></span>\n<span class="line"><span style="color:#24292F;">      platform: </span><span style="color:#0A3069;">&quot;github&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">      owner: </span><span style="color:#0A3069;">&quot;laoergege&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">      repo: </span><span style="color:#0A3069;">&quot;laoergege-blog&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">      clientId: </span><span style="color:#0A3069;">&quot;xxx&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">      clientSecret: </span><span style="color:#0A3069;">&quot;xxx&quot;</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">      labels: [</span><span style="color:#0A3069;">&quot;note&quot;</span><span style="color:#24292F;">],</span></span>\n<span class="line"><span style="color:#24292F;">      prefix: [</span><span style="color:#0A3069;">&quot;&quot;</span><span style="color:#24292F;">],</span></span>\n<span class="line"><span style="color:#24292F;">    })</span></span>\n<span class="line"><span style="color:#24292F;">]</span></span>\n<span class="line"><span style="color:#6E7781;">// ...</span></span>\n<span class="line"></span></code></pre></div>',2),d={href:"https://vssue.js.org/options/",target:"_blank",rel:"noopener noreferrer"},F=(0,e.Uk)("more vssue options reference"),f=(0,e.uE)('<p>In your md file or vue file.</p><div class="language-markdown ext-md"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">&lt;!-- README.md --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#0550AE;font-weight:bold;"># Vssue Demo</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">&lt;Vssue :title=&quot;$title&quot; /&gt;</span></span>\n<span class="line"></span></code></pre></div>',2),v={href:"https://vssue.js.org/options/#vssue-options",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("Vssue Component Props Reference"),k=(0,e.uE)('<h3 id="onbeforeoauth" tabindex="-1"><a class="header-anchor" href="#onbeforeoauth" aria-hidden="true">#</a> onBeforeOauth</h3><p>A hook which you can modify the oauth url is runing before vssue redirect to the oauth url.</p><blockquote><p>I found that the redirect url （the oauth callback url） is cannot contain chinese path ! So I add a new api which you can modify the redirect_uri query param.</p></blockquote><div class="language-html ext-html"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>\n<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#82071E;font-style:italic;">vssue</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">:title</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;title&quot;</span><span style="color:#24292F;">  </span><span style="color:#0550AE;">:onBeforeOauth</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;onBeforeOauth&quot;</span><span style="color:#24292F;">/&gt;</span></span>\n<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>\n<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { usePageData } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;@vuepress/client&quot;</span></span>\n<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { toRefs } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;vue&quot;</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> {</span></span>\n<span class="line"><span style="color:#953800;">    </span><span style="color:#8250DF;">setup</span><span style="color:#953800;">() </span><span style="color:#24292F;">{</span></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> { </span><span style="color:#0550AE;">title</span><span style="color:#24292F;"> } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">toRefs</span><span style="color:#24292F;">(</span><span style="color:#8250DF;">usePageData</span><span style="color:#24292F;">().value)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">          title,</span></span>\n<span class="line"><span style="color:#24292F;">          </span><span style="color:#8250DF;">onBeforeOauth</span><span style="color:#24292F;">(</span><span style="color:#953800;">url</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">           sessionStorage.</span><span style="color:#8250DF;">setItem</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;redirect_uri&#39;</span><span style="color:#24292F;">, location.pathname)</span></span>\n<span class="line"><span style="color:#24292F;">           </span><span style="color:#6E7781;">// remove the Chinese path</span></span>\n<span class="line"><span style="color:#24292F;">           </span><span style="color:#6E7781;">// change the redirect_uri query            </span></span>\n<span class="line"><span style="color:#24292F;">           </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> url.</span><span style="color:#8250DF;">replace</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">/redirect_uri=(</span><span style="color:#0550AE;">[</span><span style="color:#CF222E;">^</span><span style="color:#0550AE;">&amp;]</span><span style="color:#CF222E;">*</span><span style="color:#0A3069;">)/</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">`redirect_uri=${</span><span style="color:#24292F;">location</span><span style="color:#0A3069;">.</span><span style="color:#24292F;">origin</span><span style="color:#0A3069;">}`</span><span style="color:#24292F;">)</span></span>\n<span class="line"><span style="color:#24292F;">          }</span></span>\n<span class="line"><span style="color:#24292F;">        }</span></span>\n<span class="line"><span style="color:#24292F;">    }</span></span>\n<span class="line"><span style="color:#953800;">}</span></span>\n<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2>',5),E=(0,e.Uk)("CHANGELOG.md"),x={},b=(0,a(3860).Z)(x,[["render",function(s,n){const a=(0,e.up)("ExternalLinkIcon"),x=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)("div",null,[l,p,o,(0,e._)("p",null,[(0,e._)("a",t,[r,(0,e.Wm)(a)]),c]),i,(0,e._)("p",null,[u,(0,e._)("a",y,[h,(0,e.Wm)(a)])]),g,(0,e._)("p",null,[(0,e._)("a",d,[F,(0,e.Wm)(a)])]),f,(0,e._)("p",null,[(0,e._)("a",v,[m,(0,e.Wm)(a)])]),k,(0,e._)("p",null,[(0,e.Wm)(x,{to:"/packages/vuepress-plugin-vssue-next-compat/CHANGELOG.html"},{default:(0,e.w5)((()=>[E])),_:1})])])}]])},3860:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);
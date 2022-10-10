"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[7886],{9182:(e,l,a)=>{a.r(l),a.d(l,{data:()=>i});const i={key:"v-2fc78b4d",path:"/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E5%8F%8AHTTP/http%20%E7%BC%93%E5%AD%98.html",title:"HTTP 缓存",lang:"zh-CN",frontmatter:{release:!0,tags:["http","缓存","浏览器"],desc:"总结 http 缓存、缓存相关控制设置及前端缓存最佳实践"},excerpt:"",headers:[{level:2,title:"Cache-Control",slug:"cache-control",children:[]},{level:2,title:"代理缓存",slug:"代理缓存",children:[]},{level:2,title:"浏览器缓存",slug:"浏览器缓存",children:[{level:3,title:"用户行为",slug:"用户行为",children:[]}]},{level:2,title:"协商缓存",slug:"协商缓存",children:[]},{level:2,title:"缓存控制",slug:"缓存控制",children:[{level:3,title:"通过 response 进行缓存控制",slug:"通过-response-进行缓存控制",children:[]},{level:3,title:"通过 request 进行缓存控制",slug:"通过-request-进行缓存控制",children:[]}]},{level:2,title:"Vary：缓存验证器",slug:"vary-缓存验证器",children:[]},{level:2,title:"SWR：stale-while-revalidate",slug:"swr-stale-while-revalidate",children:[]},{level:2,title:"学习参考",slug:"学习参考",children:[]}],git:{createdTime:1664433214e3,updatedTime:1664433214e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:1}]}}},1689:(e,l,a)=>{a.r(l),a.d(l,{default:()=>j});var i=a(5393);const r=a.p+"assets/img/6561aa12c52e04d459ba53c9d9eaba278a41bcacba1af8a51f64bda2ecfb6db9.5f427858.png",t=a.p+"assets/img/bdc51a403dd95bc66a025a17492f3dab8cd6640484c797b67e2d1e324e3b99b5.cd718286.png",o=a.p+"assets/img/afaff54aeae0a40176e285f89da7fe10d6a1cd77a34b4da13dcb4ffb3b6b67b4.9032a747.png",c=a.p+"assets/img/server-cache-control.510a4474.svg",n=a.p+"assets/img/9b4fa558a294f0716e7dad1d5d8e20b9ffdd5056ac5ad2efa02d3c2ed9cc0756.ded206ce.png",d=a.p+"assets/img/a88d34744c98992ce0bd38df170fbf74743743e010f0f7e558738bd9d1d72dfd.5ea44f32.png",h=a.p+"assets/img/7d679f31875e7cfb7cc3f3f99efc6030698374dbedcc437da771db25f34c7551.122dda72.png",s=(0,i._)("h1",{id:"http-缓存",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#http-缓存","aria-hidden":"true"},"#"),(0,i.Uk)(" HTTP 缓存")],-1),p=(0,i.Uk)("HTTP 缓存 "),u=(0,i.uE)('<li><a href="#cache-control">Cache-Control</a></li><li>缓存位置 <ul><li><a href="#%E4%BB%A3%E7%90%86%E7%BC%93%E5%AD%98">代理缓存</a><ul><li><a href="#Vary%EF%BC%9A%E7%BC%93%E5%AD%98%E9%AA%8C%E8%AF%81%E5%99%A8">Vary：缓存验证器</a></li></ul></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98">浏览器缓存</a></li></ul></li><li><a href="#%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98">协商缓存</a></li><li><a href="#%E7%BC%93%E5%AD%98%E8%AE%BE%E7%BD%AE%E6%8E%A7%E5%88%B6">缓存设置控制</a><ul><li><a href="#%E9%80%9A%E8%BF%87-response-%E8%BF%9B%E8%A1%8C%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6">通过 response 进行缓存控制</a></li><li><a href="#%E9%80%9A%E8%BF%87-request-%E8%BF%9B%E8%A1%8C%E7%BC%93%E5%AD%98%E6%8E%A7%E5%88%B6">通过 request 进行缓存控制</a></li></ul></li>',4),f=(0,i.Uk)("前端缓存最佳实践"),E=(0,i._)("li",null,"SWR：stale-while-revalidate",-1),g=(0,i.uE)('<h2 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> Cache-Control</h2><p>http 中控制缓存的主要字段有一下三个：</p><ol><li>Cache-Control(HTTP/1.1，优先级高)</li><li>Expires(HTTP/1.0) <blockquote><p>HTTP 1.0 的字段，表示缓存到期时间，是一个绝对的时间 (当前时间+缓存时间)</p></blockquote></li><li>Pragma: no-cache(相当于 Cache-Control: no-cache，主要是为了兼容 HTTP/1.0)</li></ol><p>重点学习 <code>Cache-Control</code></p><ul><li>Cache-Control <ul><li>no-store，不允许存储缓存资源</li><li>no-cache，不允许先使用缓存资源，强制发送请求（协商缓存验证）</li><li>max-age，缓存时间，相对响应报文的创建时刻 <blockquote><p>当没有显示设置 cache-control 或是 expires 时, 大部分浏览器会使用<strong>启发式缓存</strong>, 把资源缓存下来; 如果真的不想用缓存, 还是主动设置一下 cache-control: no-store。<br> 启发式计算缓存在 RFC 里的建议是 <strong>(Date - Last-modified) * 10%</strong></p></blockquote></li><li>must-revalidate，当缓存失效时必须与回源服务器验证 <blockquote><p>当缓存失效时，其实带不带 must-revalidate，都会发送请求，那么 must-revalidate 好像没什么作用？主要有一下两个使用场景:</p><ol><li>HTTP 规范是允许客户端在某些特殊情况下直接使用过期缓存的，比如服务器关闭或失去连接，导致请求发送失败的时候，即使设置了 <code>Cache-Control: max-age=0</code> 还是回继续使用缓存；还有比如有配置一些特殊指令（stale-while-revalidate、stale-if-error 等）的时候也会导致继续使用缓存，可以使用 must-revalidate 进行阻止。</li><li>与 proxy-revalidate（下文介绍）做区别，must-revalidate 强调<strong>回源服务器</strong></li></ol></blockquote></li></ul></li></ul><h2 id="代理缓存" tabindex="-1"><a class="header-anchor" href="#代理缓存" aria-hidden="true">#</a> 代理缓存</h2><p><img src="'+r+'" alt="图 6"></p><p>缓存代理身份特殊，即是客户端也是服务端，所以还需要有一些新的“Cache-Control”属性来对它做细致的控制。</p><ul><li>private，表示缓存只能在客户端保存，不能放在代理上与别人共享</li><li>public，缓存完全开放，谁都可以存，谁都可以用</li><li>proxy-revalidate，缓存失效时代理服务器验证即可</li><li>s-maxage，单独设置代理服务器缓存时间，与 max-age 区别开</li><li>no-transform，禁止代理服务对资源做转换</li></ul><h2 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h2><p>浏览器对资源的缓存位置分为：</p><ul><li>内存 <ul><li>预加载器</li><li>preload 指令</li></ul></li><li>service-work</li><li>http-cache</li><li>push-cache</li></ul><blockquote><p>⚠️ 内存缓存的行为，各个浏览器并没有统一规范，而且内存缓存并不关注 HTTP 语义，浏览器导航中会重用资源，即是资源带有 <code>max-age=0</code> 或 <code>no-cache</code>。<br> 唯一可能例外的是 <code>no-store</code> 内存缓存在某些情况下确实会遵守该指令。</p></blockquote><blockquote><p>HTTP Cache 几乎遵从 HTTP 规范，但有一个例外，即是资源带有，HTML 中 prefetch 指令获取的资源会缓存在 HTTP Cache 中一定时间（5分钟）</p></blockquote><p>浏览器 http-cache 策略分为两种：强缓存、协商缓存</p><p><img src="'+t+'" alt="图 18"></p><ol><li>缓存查找：查找不到直接发送请求</li><li>强制缓存：通过 Expires 和 Cache-Control 判断缓存是否有效，如果可用则直接使用，否则协商缓存</li><li><a href="#%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98">协商缓存</a>：服务端返回资源时会带有 Last-modified、ETag信息，当协商缓存时，客户端直接发起请求并且携带 If-Modified-Since 、If-None-Match 去请求后台，服务器根据条件请求字段判断资源是否更新 <ul><li>若资源更新，返回资源和 200 状态码</li><li>否则，返回 304，告诉浏览器直接从缓存获取资源</li></ul></li></ol><h3 id="用户行为" tabindex="-1"><a class="header-anchor" href="#用户行为" aria-hidden="true">#</a> 用户行为</h3><blockquote><p>以下 chrome 实现效果</p></blockquote><p>💡 浏览器某些用户行为会在请求头带上“私货”以控制缓存：</p>',20),b=(0,i._)("li",null,"地址栏访问，链接跳转是正常用户行为，将会触发浏览器缓存机制",-1),m=(0,i.Uk)("前进后退也会触发浏览器缓存机制，但某些情况浏览器会直接缓存内存到时直接读取即可（"),C={href:"https://web.dev/bfcache/",target:"_blank",rel:"noopener noreferrer"},v=(0,i.Uk)("Back/forward cache"),T=(0,i.Uk)(" ）"),_=(0,i._)("li",null,[(0,i.Uk)("刷新行为会对 html 文件自动请求带上 "),(0,i._)("code",null,"Cache-Control:max-age=0")],-1),k=(0,i._)("li",null,[(0,i.Uk)("强刷或者禁止缓存所有请求会带上 "),(0,i._)("code",null,"Cache-Control: no-cache"),(0,i.Uk)(" ，并且不携带 If 条件验证，强制请求，不做协商。")],-1),A=(0,i.uE)('<h2 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h2><p>HTTP 协议就定义了一系列“If”开头的“条件请求”字段，专门用来与服务器检查验证资源是否过期。<strong>当请求带有条件字段，服务器就会验证资源是否过期</strong>。</p><ul><li>If-Modified-Since 、Last-modified，根据文件修改日期做验证</li><li>If-None-Match 、ETag，</li></ul><p>ETag 是“实体标签”（Entity Tag）的缩写，是资源的一个唯一标识，文件内容的 hash 值。比 Last-modified 做判断更精准，做验证时<strong>优先级比 Last-modified 高</strong>， 因为</p><ol><li>Last-Modified 的时间单位是秒，如果某个文件在 1 秒内改变了多次，那么他们的 Last-Modified 其实并没有体现出来修改</li><li>有时一个文件内容没什么变化，但修改时间发生了变化。</li></ol><p>ETag 还有“强”“弱”之分。强 ETag 要求资源在字节级别必须完全相符，弱 ETag 在值前有个“W/”标记，只要求资源在语义上没有变化，但内部可能会有部分发生了改变（例如 HTML 里的标签顺序调整，或者多了几个空格）。</p><p>ETag 工作原理：</p><p><img src="'+o+'" alt="图 7"></p><p>Last-modified 也同样类似。</p><h2 id="缓存控制" tabindex="-1"><a class="header-anchor" href="#缓存控制" aria-hidden="true">#</a> 缓存控制</h2><h3 id="通过-response-进行缓存控制" tabindex="-1"><a class="header-anchor" href="#通过-response-进行缓存控制" aria-hidden="true">#</a> 通过 response 进行缓存控制</h3><p><img src="'+c+'" alt=""></p><h3 id="通过-request-进行缓存控制" tabindex="-1"><a class="header-anchor" href="#通过-request-进行缓存控制" aria-hidden="true">#</a> 通过 request 进行缓存控制</h3><p><code>Cache-Control</code> 是个通用字段，客户端也可以发送附带 <code>Cache-Control</code> 缓存指令的请求（但浏览器对请求缓存控制的支持有限，比如仅支持 <code>Cache-Control: max-age=0</code> 或者 <code>Cache-Control: no-cache</code> 去做刷新）。</p><p><img src="'+n+'" alt="图 1"></p><ul><li>no-cache，不使用缓存，直接发送请求</li><li>max-stale，表明客户端愿意接收一个超过指定过期时间范围内的资源，比如 <code>max-stale: 5</code> 过期后 5 秒内都可以</li><li>min-fresh，相当于缩短过期时间，比如 <code>min-fresh：5</code>，只允许到期前 5 秒之前的时间内</li><li>only-if-cached，表示只接受代理缓存的数据，不接受源服务器的响应</li><li>no-transform，禁止代理服务对资源做转换</li></ul><h2 id="vary-缓存验证器" tabindex="-1"><a class="header-anchor" href="#vary-缓存验证器" aria-hidden="true">#</a> Vary：缓存验证器</h2><p>URL 原则上是一种网络上的资源概念，同个 URL 可以有多种资源版本形式。</p><p><img src="'+d+'" alt="图 10"></p>',19),B=(0,i.Uk)("比如，你可以 "),x=(0,i._)("code",null,"Accept: text/html",-1),U=(0,i.Uk)("，也可以 "),w=(0,i._)("code",null,"Accept: text/csv",-1),y=(0,i.Uk)(" 改为以不同的格式获取相同的资源，这些都是服务器"),D={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation",target:"_blank",rel:"noopener noreferrer"},H=(0,i.Uk)("内容协商"),P=(0,i.Uk)("的结果。"),q=(0,i.uE)('<p>vary 虽然不是 cache-control 的属性值，是内容协商的结果，带在响应头部，表示一个内容版本，可协作缓存决策依据。</p><p>大多数浏览器都支持 vary 缓存验证，但要注意的是浏览器通常不会实现为同个 URL 存储多个变体的功能，只会为唯一 URL 做单一内容版本存储；而代理服务器通常可自定义实现对同个 URL 多个 vary 缓存。</p><p>下图是代理缓存根据 vary 缓存依据流程：</p><p><img src="'+h+'" alt="图 9"></p><h2 id="swr-stale-while-revalidate" tabindex="-1"><a class="header-anchor" href="#swr-stale-while-revalidate" aria-hidden="true">#</a> SWR：stale-while-revalidate</h2><p><code>stale-while-revalidate</code> 是一种缓存策略：优先使用缓存，然后再更新缓存。这与以往常见的缓存策略：“缓存 -&gt; 过期 -&gt; 更新 -&gt; 使用” 有所不同，SWR：“缓存 -&gt; 过期 -&gt; 使用 -&gt; 更新”。</p><h2 id="学习参考" tabindex="-1"><a class="header-anchor" href="#学习参考" aria-hidden="true">#</a> 学习参考</h2>',7),L={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#Cache_validation",target:"_blank",rel:"noopener noreferrer"},W=(0,i.Uk)("MDN HTTP 缓存"),F={href:"https://zhuanlan.zhihu.com/p/60357719",target:"_blank",rel:"noopener noreferrer"},R=(0,i.Uk)("可能是最被误用的 HTTP 响应头之一 Cache-Control: must-revalidate"),z={href:"https://www.smashingmagazine.com/2017/11/understanding-vary-header/",target:"_blank",rel:"noopener noreferrer"},I=(0,i.Uk)("understanding-vary-header"),M={href:"https://calendar.perfplanet.com/2016/a-tale-of-four-caches/",target:"_blank",rel:"noopener noreferrer"},N=(0,i.Uk)("A Tale of Four Caches"),S={href:"https://zhuanlan.zhihu.com/p/64694485",target:"_blank",rel:"noopener noreferrer"},V=(0,i.Uk)("Cache-Control 的 stale-while-revalidate 指令"),O=(0,i.uE)("<li><p>API</p></li><li><p>core</p><ul><li>缓存请求、缓存策略 <ul><li>swr</li></ul></li><li>请求管道 <ul><li>去除重复请求\\接口竞态处理\\接口择优使用\\接口时序调整</li><li>retry <ul><li>聚焦时重新验证</li><li>网络恢复时重新验证</li><li>智能错误重试</li><li>轮询</li></ul></li><li>中断</li></ul></li><li>Optimistic UI</li></ul></li><li><p>adapter</p></li><li><p>net、cache</p></li>",4),Z={},j=(0,a(3860).Z)(Z,[["render",function(e,l){const a=(0,i.up)("RouterLink"),r=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[s,(0,i._)("ul",null,[(0,i._)("li",null,[p,(0,i._)("ul",null,[u,(0,i._)("li",null,[(0,i.Wm)(a,{to:"/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E7%BC%93%E5%AD%98%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.html"},{default:(0,i.w5)((()=>[f])),_:1})]),E])])]),g,(0,i._)("ol",null,[b,(0,i._)("li",null,[m,(0,i._)("a",C,[v,(0,i.Wm)(r)]),T]),_,k]),A,(0,i._)("p",null,[B,x,U,w,y,(0,i._)("a",D,[H,(0,i.Wm)(r)]),P]),q,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("a",L,[W,(0,i.Wm)(r)])])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("a",F,[R,(0,i.Wm)(r)])])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("a",z,[I,(0,i.Wm)(r)])])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("a",M,[N,(0,i.Wm)(r)])])]),(0,i._)("li",null,[(0,i._)("p",null,[(0,i._)("a",S,[V,(0,i.Wm)(r)])])]),O])])}]])},3860:(e,l)=>{l.Z=(e,l)=>{const a=e.__vccOpts||e;for(const[e,i]of l)a[e]=i;return a}}}]);
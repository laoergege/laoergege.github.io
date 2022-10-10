"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[6174],{3316:(e,t,r)=>{r.r(t),r.d(t,{data:()=>l});const l={key:"v-f2bbc8da",path:"/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E7%BC%93%E5%AD%98%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.html",title:"前端缓存最佳实践",lang:"zh-CN",frontmatter:{release:!0,top:5,tags:["http","缓存","性能优化","web"],desc:"探索前端缓存最佳实践"},excerpt:"",headers:[{level:2,title:"http 缓存",slug:"http-缓存",children:[]},{level:2,title:"Service Worker 缓存",slug:"service-worker-缓存",children:[]},{level:2,title:"学习参考",slug:"学习参考",children:[]}],git:{createdTime:1632907859e3,updatedTime:1646643227e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:5}]}}},1272:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var l=r(5393);const a=(0,l._)("h1",{id:"前端缓存最佳实践",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#前端缓存最佳实践","aria-hidden":"true"},"#"),(0,l.Uk)(" 前端缓存最佳实践")],-1),c=(0,l._)("ul",null,[(0,l._)("li",null,"http 缓存"),(0,l._)("li",null,"service-woker 缓存")],-1),i=(0,l._)("h2",{id:"http-缓存",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#http-缓存","aria-hidden":"true"},"#"),(0,l.Uk)(" http 缓存")],-1),o=(0,l.Uk)("了解 "),n=(0,l.Uk)("http 缓存"),h=(0,l.Uk)("。"),d=(0,l.uE)('<p>原则：依据是否可 URL 版本化控制，分为永不缓存（协商），或永远缓存</p><ol><li>可做 URL 版本化控制的文件：长期缓存 <code>Cache-Control: public,max-age=31536000,immutable</code>，如 webpack 模块化打包出来 js、css 等这类能够通过工具自动化打包链接的文件 <blockquote><p>切勿打包过大变动时导致缓存失效，需代码分割，进行细粒度控制缓存 代码分割划分：业务代码、公共代码、第三方库</p></blockquote></li><li>不可 URL 版本化控制的文件：协商缓存 <code>Cache-Control: no-cache</code> 与 <code>etag/last-modified</code>，如 index.html 等</li></ol><h2 id="service-worker-缓存" tabindex="-1"><a class="header-anchor" href="#service-worker-缓存" aria-hidden="true">#</a> Service Worker 缓存</h2><p>相比较于 http 这种规范性实现的缓存策略，Service Worker 缓存更是一种开发者可自定义的缓存策略。</p><p>（待）</p><h2 id="学习参考" tabindex="-1"><a class="header-anchor" href="#学习参考" aria-hidden="true">#</a> 学习参考</h2>',6),s={href:"https://jakearchibald.com/2016/caching-best-practices/",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("caching-best-practices"),p={},k=(0,r(3860).Z)(p,[["render",function(e,t){const r=(0,l.up)("RouterLink"),p=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[a,c,i,(0,l._)("blockquote",null,[(0,l._)("p",null,[o,(0,l.Wm)(r,{to:"/HTTP/http%20%E7%BC%93%E5%AD%98.html"},{default:(0,l.w5)((()=>[n])),_:1}),h])]),d,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",s,[u,(0,l.Wm)(p)])])])])}]])},3860:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,l]of t)r[e]=l;return r}}}]);
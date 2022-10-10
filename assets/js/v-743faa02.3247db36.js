"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[2314],{2681:(l,e,u)=>{u.r(e),u.d(e,{data:()=>i});const i={key:"v-743faa02",path:"/Vue/",title:"Vue",lang:"zh-CN",frontmatter:{release:!0,tags:["vue"],description:"Vue 技术栈"},excerpt:"",headers:[{level:2,title:"Vue3 系文",slug:"vue3-系文",children:[]}],git:{createdTime:162046753e4,updatedTime:1661273653e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:47}]}}},7901:(l,e,u)=>{u.r(e),u.d(e,{default:()=>K});var i=u(5393);const t=(0,i._)("h1",{id:"vue",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),(0,i.Uk)(" Vue")],-1),n=(0,i._)("blockquote",null,[(0,i._)("p",null,"Vue3 为主")],-1),r=(0,i.uE)("<li>Vue 核心 <ul><li>响应式系统</li><li>vDOM + Renderer（渲染器） <ul><li>组件系统</li><li>组件渲染机制</li><li>响应式渲染 + 异步更新调度</li></ul></li><li>模板编译器 <ul><li>模板编译</li><li>编译优化</li></ul></li></ul></li><li>Vue 开发指南 <ul><li>组件通信 <ul><li>父子组件 <ul><li>props、emit</li><li>直接引用 <code>ref</code>、<code>children</code>、<code>parent</code></li></ul></li><li>非父子组件： <ul><li>模块领域：provide/inject</li><li>全局单例模式 <ul><li>EventBus</li><li>Vuex</li></ul></li></ul></li></ul></li><li>逻辑复用 <ul><li>组合函数：composition-api</li><li>指令</li><li>函数组件</li></ul></li><li>前端路由 VueRouter <ul><li>路由导航</li><li>路由匹配</li><li>路由守卫</li></ul></li></ul></li>",2),o=(0,i.Uk)("生态 "),a=(0,i.Uk)("多页应用："),_={href:"https://github.com/vuejs/petite-vue",target:"_blank",rel:"noopener noreferrer"},c=(0,i.Uk)("petite-vue"),s=(0,i.Uk)("Vue2 => Vue3 "),p={href:"https://github.com/vuejs/core/tree/main/packages/vue-compat",target:"_blank",rel:"noopener noreferrer"},h=(0,i.Uk)("vue-compat"),m=(0,i._)("li",null,"gogocode",-1),d=(0,i._)("li",null,[(0,i.Uk)("VSCode 插件 "),(0,i._)("ul",null,[(0,i._)("li",null,"volar")])],-1),v=(0,i._)("li",null,"VueDevtools",-1),k=(0,i.Uk)("构建工具 "),E=(0,i._)("li",null,"vue-cli",-1),f={href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("vite"),B=(0,i._)("ul",null,[(0,i._)("li",null,"https://github.com/zhangyuang/vite-design")],-1),V=(0,i.Uk)("项目模板 "),b={href:"https://github.com/vitejs/vite/tree/main/packages/create-vite",target:"_blank",rel:"noopener noreferrer"},U=(0,i.Uk)("create-vite"),W={href:"https://github.com/vuejs/create-vue",target:"_blank",rel:"noopener noreferrer"},w=(0,i.Uk)("create-vue"),A=(0,i.Uk)("SSR "),C={href:"https://github.com/capricorn86/happy-dom",target:"_blank",rel:"noopener noreferrer"},x=(0,i.Uk)("happy-dom"),j=(0,i._)("li",null,[(0,i.Uk)("web component "),(0,i._)("ul",null,[(0,i._)("li",null,"https://mp.weixin.qq.com/s/kqG7xUnpVRg0XU5HLxjARw"),(0,i._)("li",null,"https://github.com/yyx990803/vue-lit")])],-1),F=(0,i.Uk)("跨平台 "),y={href:"https://github.com/troisjs/trois",target:"_blank",rel:"noopener noreferrer"},D=(0,i.Uk)("ThreeJS：trois"),S=(0,i._)("h2",{id:"vue3-系文",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#vue3-系文","aria-hidden":"true"},"#"),(0,i.Uk)(" Vue3 系文")],-1),R=(0,i.Uk)("vue3 的升级优化"),q=(0,i.Uk)("vue 组件渲染机制"),T=(0,i.Uk)("diff 更新流程"),L=(0,i.Uk)("vue 的响应式系统"),N=(0,i.Uk)("vue 的响应式渲染机制"),z=(0,i.Uk)("vue props&slots"),I=(0,i._)("li",null,"模板编译优化",-1),J=(0,i._)("li",null,"vue 指令原理",-1),O=(0,i.Uk)("Vue 组件生命周期"),X=(0,i._)("li",null,"vue 异步组件及 Suspense",-1),Z=(0,i._)("li",null,"Teleport 实现原理",-1),G=(0,i._)("li",null,"Fragment",-1),H=(0,i._)("li",null,"Vue & WebComponent",-1),M=(0,i.uE)("<ul><li>vue jsx <ul><li>场景 <ul><li>一个文件写多个组件</li><li>一个文件写多个组件</li></ul></li><li>template ts 支持？</li><li>JSX 中的子节点，编译后也就是 createVNode 的最后一个参数（对象类型）。在 template 对应则是插槽的概念，插槽是一种内容分发（content distribution）的 API，洋文叫 Slot，</li><li>但是在模板中，传递属性的时候，template 里面是不能写 VNode 的，因此 Vue 里出现了插槽这个概念，插槽只在组件的 children 里面才有。</li><li>Vue 对插槽的要求最好是一个 function <ul><li>子节点会被编译成，{ default: () =&gt; [123] }。</li></ul></li></ul></li></ul><p>数据流 - 单向数据流原则</p>",2),P={},K=(0,u(3860).Z)(P,[["render",function(l,e){const u=(0,i.up)("ExternalLinkIcon"),P=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[t,n,(0,i._)("ul",null,[r,(0,i._)("li",null,[o,(0,i._)("ul",null,[(0,i._)("li",null,[a,(0,i._)("a",_,[c,(0,i.Wm)(u)])]),(0,i._)("li",null,[s,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",p,[h,(0,i.Wm)(u)])]),m])]),d,v,(0,i._)("li",null,[k,(0,i._)("ul",null,[E,(0,i._)("li",null,[(0,i._)("a",f,[g,(0,i.Wm)(u)]),B])])]),(0,i._)("li",null,[V,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",b,[U,(0,i.Wm)(u)])]),(0,i._)("li",null,[(0,i._)("a",W,[w,(0,i.Wm)(u)])])])]),(0,i._)("li",null,[A,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",C,[x,(0,i.Wm)(u)])])])]),j,(0,i._)("li",null,[F,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",y,[D,(0,i.Wm)(u)])])])])])])]),S,(0,i._)("ol",null,[(0,i._)("li",null,[(0,i.Wm)(P,{to:"/Vue/vue3%E7%9A%84%E5%8D%87%E7%BA%A7%E4%BC%98%E5%8C%96.html"},{default:(0,i.w5)((()=>[R])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(P,{to:"/Vue/vue%20%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6.html"},{default:(0,i.w5)((()=>[q])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(P,{to:"/Vue/diff%20%E6%9B%B4%E6%96%B0%E6%B5%81%E7%A8%8B.html"},{default:(0,i.w5)((()=>[T])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(P,{to:"/Vue/vue%20%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F.html"},{default:(0,i.w5)((()=>[L])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(P,{to:"/Vue/vue%20%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6.html"},{default:(0,i.w5)((()=>[N])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(P,{to:"/Vue/vue%20props%26slots.html"},{default:(0,i.w5)((()=>[z])),_:1})]),I,J,(0,i._)("li",null,[(0,i.Wm)(P,{to:"/Vue/Vue%20%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"},{default:(0,i.w5)((()=>[O])),_:1})]),X,Z,G,H]),M])}]])},3860:(l,e)=>{e.Z=(l,e)=>{const u=l.__vccOpts||l;for(const[l,i]of e)u[l]=i;return u}}}]);
"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[7504],{4757:(l,i,e)=>{e.r(i),e.d(i,{data:()=>t});const t={key:"v-240dbb06",path:"/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E5%8F%8AWebAPI/%E9%A1%B5%E9%9D%A2%E5%AF%BC%E8%88%AA%E6%B5%81%E7%A8%8B.html",title:"页面导航流程：从输入一个 url 地址到页面的过程",lang:"zh-CN",frontmatter:{release:!0,tags:["浏览器原理"],desc:"浏览器导航流程"},excerpt:"",headers:[{level:2,title:"处理 HTTP 响应",slug:"处理-http-响应",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:165625254e4,updatedTime:165625254e4,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:1}]}}},6014:(l,i,e)=>{e.r(i),e.d(i,{default:()=>o});var t=e(5393);const a=e.p+"assets/img/1644852142145.ee66385b.png",r=[(0,t.uE)('<h1 id="页面导航流程-从输入一个-url-地址到页面的过程" tabindex="-1"><a class="header-anchor" href="#页面导航流程-从输入一个-url-地址到页面的过程" aria-hidden="true">#</a> 页面导航流程：从输入一个 url 地址到页面的过程</h1><p><img src="'+a+'" alt="图 24"></p><ol><li>用户输入处理：浏览器进程处理用户输入，构成完整 URL 转发给网络进程</li><li>导航阶段 <ol><li>http 请求流程 <ol><li>请求排队（可选） <ol><li>资源优先级调度</li><li>域名请求数限制</li></ol></li><li>重定向</li><li>查找缓存</li><li>DNS 域名解析</li><li>建立 TCP 连接</li><li>TSL（https，可选）</li><li>发送 HTTP 请求</li><li>处理 HTTP 响应 <ol><li>重定向，回 2.1.1</li><li>Content-Type 响应数据类型处理 <ul><li>text/html 通知浏览器准备渲染进程 （跳 3.）</li><li>application/octet-stream 通知下载器下载文件，导航结束</li></ul></li></ol></li></ol></li><li>提交文档：浏览器会发出“提交文档”消息给渲染进程 <ol><li>渲染进程收到消息后，会和网络进程建立传输数据的“管道”</li><li>渲染进程会返回“确认提交”的消息给浏览器进程</li></ol></li><li>完成导航：浏览器进程接收到确认消息后更新浏览器界面状态，完成导航</li></ol></li><li>渲染阶段</li><li>TCP 断开</li></ol><h2 id="处理-http-响应" tabindex="-1"><a class="header-anchor" href="#处理-http-响应" aria-hidden="true">#</a> 处理 HTTP 响应</h2><p>网络进程接收到响应头之后，会根据响应头中的 content-type 字段来判断文件的类型，比如 content-type 的值是“text/html”，那么浏览器就会判断这是一个 HTML 类型的文件，然后为该请求选择或者创建一个渲染进程。渲染进程准备好之后，网络进程和渲染进程之间会建立一个共享数据的管道，网络进程接收到数据后就往这个管道里面放，而渲染进程则从管道的另外一端不断地读取数据，并同时将读取的数据“喂”给 HTML 解析器。你可以把这个管道想象成一个“水管”，网络进程接收到的字节流像水一样倒进这个“水管”，而“水管”的另外一端是渲染进程的 HTML 解析器，它会动态接收字节流，并将其解析为 DOM。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>极客时间《浏览器工作原理与实践》</li></ul>',7)],n={},o=(0,e(3860).Z)(n,[["render",function(l,i){return(0,t.wg)(),(0,t.iD)("div",null,r)}]])},3860:(l,i)=>{i.Z=(l,i)=>{const e=l.__vccOpts||l;for(const[l,t]of i)e[l]=t;return e}}}]);
"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[2e3],{4794:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-6f2abf9c",path:"/JavaScript/JavaScript%20%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B.html",title:"JavaScript 异步编程",lang:"zh-CN",frontmatter:{release:!0,tags:["javascript","异步","编程语言"]},excerpt:"",headers:[{level:2,title:"何为异步编程",slug:"何为异步编程",children:[]},{level:2,title:"JavaScript 的执行模型：单线程事件循环 + 回调队列",slug:"javascript-的执行模型-单线程事件循环-回调队列",children:[]},{level:2,title:"JavaScript 异步编程范式",slug:"javascript-异步编程范式",children:[{level:3,title:"Promise",slug:"promise",children:[]},{level:3,title:"Promise 异步错误",slug:"promise-异步错误",children:[]},{level:3,title:"Generator & 协程",slug:"generator-协程",children:[]},{level:3,title:"Async/Await 实现原理",slug:"async-await-实现原理",children:[]}]},{level:2,title:"学习参考",slug:"学习参考",children:[]}],git:{createdTime:162046753e4,updatedTime:1663867943e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:28}]}}},7472:(s,n,a)=>{a.r(n),a.d(n,{default:()=>z});var l=a(5393);const p=a.p+"assets/img/1*iHhUyO4DliDwa6x_cO5E3A.101f107f.gif",o=a.p+"assets/img/1654329152719.d9d16071.png",e=(0,l.uE)('<h1 id="javascript-异步编程" tabindex="-1"><a class="header-anchor" href="#javascript-异步编程" aria-hidden="true">#</a> JavaScript 异步编程</h1><ul><li>JavaScript 异步编程 <ul><li><a href="#%E4%BD%95%E4%B8%BA%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B">何为异步编程</a></li><li><a href="#javascript-%E7%9A%84%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF--%E5%9B%9E%E8%B0%83%E9%98%9F%E5%88%97">JavaScript 的执行环境：事件循环 + 回调队列</a></li><li>JavaScript 异步编程范式 <ul><li>回调</li><li>发布订阅模式</li><li>Promise</li><li>Generator &amp; co</li><li>Async/Await</li><li>函数响应式编程</li></ul></li></ul></li></ul><h2 id="何为异步编程" tabindex="-1"><a class="header-anchor" href="#何为异步编程" aria-hidden="true">#</a> 何为异步编程</h2><p><strong>同步/异步关注的是事物之间的行为模式、协作关系</strong>：一个事物的发生必须等待另一事物的结果，这就是同步，反之亦是异步，说明事物之间没有因果顺序关系，是独立性的。</p><p>同步/异步是一种术语在不同场景下有不同层面的意思。在编程语言中，同步编程意味着任务的执行流程跟代码的编写、调用顺序是一样的，而异步编程模型中，代码更多是被组织成为了异步任务单元，任务的执行顺序、发生时机不再像同步编程那样直观、可预测，它们统一由异步运行时并发调度并且通过特定语法来确保时序关系。</p><p>编程语言的异步体系构成：</p><ol><li>异步编程范式</li><li>异步模型</li><li>操作系统进程、线程</li><li>硬件层</li></ol><p>硬件层：我们世界的事物是在并发发生的，计算机的内部硬件同样如此。比如多个 CPU 可以并行工作；CPU 可以与 IO 设备异步工作，IO 设备通过 DMA 方式直接与内存打交道，然后通过中断信号后通知 CPU 再来读取相应的设备缓冲区。</p><p>操作系统：大多数编程语言都是同步模型，但实际上我们的程序在计算机内部却是并发执行的，操作系统以线程作为最小调度执行单位并且分时调度我们的代码（操作系统会保存上下文及执行位置以便恢复原来执行），这对于开发者来说是无感的，并且操作系统还帮我们屏蔽硬件层面的异步，（主要）提供了阻塞的系统调用，这样的一切使得我们程序表现出一种同步执行效果。</p><p>并发模型：为了保证并发系统设计的正确性人们试图通过形式化的模型来规范它，并发模型主要分为<strong>线程模型</strong>和<strong>异步模型（事件驱动）</strong>，从本质上说其实两者是等价的，它们都是调度代码执行的手段，或者说在计算机里模拟并发性的手段。区别：</p><ul><li>线程适合处理事务之间有着明显因果关系或者相关性很强的场合，事件驱动机制会把代码搞的支离破碎</li><li>事件驱动比较擅长处理异步事件的问题，但当需要处理跨事件的事务逻辑时，事件驱动都会变得复杂难解；事务驱动有一点优势的地方，就是它与生俱来的并发性和灵活性</li><li>线程是分时调度或抢占式调度机制；而事件驱动机制则采用单线程事件循环、协程这样一种协作式的调度机制</li><li>使用协作式多任务处理的应用程序的编程难点在于，切换处理，保持上下文环境，这些职责都落在了可怜的开发者肩上了或者由编程语言去实现异步运行时和编程范式；而线程模型则由操作系统自带</li></ul><p>那么异步编程相比同步编程究竟有什么好处？使用异步编程可以提高系统的并发性，相当于提高系统的响应性和资源利用率。</p><p>任务一般分为 IO 密集型和 CPU 密集型。而 web 领域是一个 IO 密集的场景：主流的多线程并发方案不仅要面对竞争条件、死锁等编程问题，更重要的是绝大部分线程都处在等待网络响应或者等待磁盘读取中，CPU 的利用率依然很低，而且大部分 CPU 都耗在操作系统的线程调度上了；而且线程也是资源，它们不是免费的，系统有数量限制。</p><p><strong>异步编程主要是解决 CPU 上下文切换消耗问题，提高 CPU 利用率</strong>。</p><p><strong>异步编程本质上是带有用户空间线程的协作式多任务处理机制</strong>，应用程序在用户空间中管理&quot;线程&quot;和上下文切换，由用户程序自行任务调度避免了<strong>阻塞原来线程，CPU 在线程上下文切换消耗</strong>。</p><blockquote><p>协作式的核心是“主动”协调：我不放弃执行权，任何人不能强制我休眠；我做完了自己的工作，那就一定要主动放弃执行权，方便其它人使用CPU工作。</p></blockquote><p>总结来说，异步编程是一种并发编程模型，<strong>任务只有具备异步特性才能被并发执行</strong>，但保证单个事务的连续性（代码是可异步执行，但业务逻辑必须是同步关系）是编程中<strong>异步处理</strong>的关键解决之道。</p><p>接下来，我们来看看 JavaScript 异步编程中的异步运行时和编程范式。</p><h2 id="javascript-的执行模型-单线程事件循环-回调队列" tabindex="-1"><a class="header-anchor" href="#javascript-的执行模型-单线程事件循环-回调队列" aria-hidden="true">#</a> JavaScript 的执行模型：单线程事件循环 + 回调队列</h2><p>JavaScript 是一门单线程语言，意味着语言没有提供多线程能力，同时也跟大多数语言一样都是默认同步编程模型，一旦遇到耗时任务整个线程就会被同步阻塞。</p><p>在 ES6 之前，JavaScript 语言本身并没有任何异步能力， 对于 JavaScript 来说，耗时任务的异步化主要由执行环境提供的异步 API，并且在异步处理上则通过异步回调的范式。可以说在编程层面，<strong>JavaScirpt 异步 = 异步 API + 异步回调</strong>的模式。</p><p>但对于这样的模式，在执行环境层面是如何支持？我们应该有一个感性的认知：一个 JavaScript 引擎会常驻于内存中，它等待着宿主环境把 JavaScript 代码或者函数传递给它执行。ES5 之后，JavaScript 引入了 Promise，这样，不需要宿主的安排任务，JavaScript 引擎本身也可以发起任务了。我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务。</p><p>整个执行模型是一个单线程事件循环 + 回调队列：</p><blockquote><p>以下是浏览器事件循环模型中 JavaScript 交互的部分</p></blockquote><p><img src="'+p+'" alt=""></p><h2 id="javascript-异步编程范式" tabindex="-1"><a class="header-anchor" href="#javascript-异步编程范式" aria-hidden="true">#</a> JavaScript 异步编程范式</h2><blockquote><p>网上对 JavaScript 异步编程范式介绍有很多很详细的，笔者对于这块内容就挑着记录 😊</p></blockquote>',27),r=(0,l.Uk)("JavaScript 异步编程范式对比 "),t=(0,l._)("li",null,[(0,l.Uk)("Callback "),(0,l._)("ul",null,[(0,l._)("li",null,"回调地狱"),(0,l._)("li",null,"分流结果处理：每种任务的处理结果存在两种可能性（成功或失败），那么需要在每种任务执行结束后分别处理这两种可能性")])],-1),c=(0,l.Uk)("发布订阅模式：发布订阅模式解决了回调地狱的问题，但存有逻辑碎片化的问题 "),y={href:"https://github.com/laoergege/laoergege-blog/issues/84",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("手写 EventEmitter 实现"),F=(0,l._)("li",null,[(0,l._)("a",{href:"#promise"},"Promise"),(0,l.Uk)("：通过链式调用的写法不仅解决了回调地狱的问题，而且线型管理 Callback 的方式使得相关逻辑内聚提高了一定的可读性 "),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",{href:"#promise-%E5%BC%82%E6%AD%A5%E9%94%99%E8%AF%AF"},"Promise 异步错误")])])],-1),u=(0,l._)("li",null,[(0,l._)("a",{href:"#generator--%E5%8D%8F%E7%A8%8B"},"Generator")],-1),E=(0,l._)("li",null,[(0,l.Uk)("Async/Await：本质上是 promise + generator 异步方案标准化 "),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",{href:"#asyncawait-%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86"},"Async/Await 实现原理")])])],-1),h=(0,l._)("li",null,"函数响应式编程：是一种发布订阅模式和迭代模式的结合，相比发布订阅模式带来事件支离，函数响应式编程则把它们串连起来，当作事件流来处理",-1),g=(0,l._)("h3",{id:"promise",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#promise","aria-hidden":"true"},"#"),(0,l.Uk)(" Promise")],-1),d=(0,l._)("p",null,"Promise 代表着一种未来的承诺，本质是一种数据结构，可以看作是状态机和观察者模式结合。",-1),f={href:"https://promisesaplus.com/",target:"_blank",rel:"noopener noreferrer"},C=(0,l.Uk)("Promises/A+ 规范链接地址"),m=(0,l.uE)('<ul><li>Promise 实例 <ul><li>state <img src="'+o+'" alt="图 2"><ul><li>pending</li><li>fulfilled</li><li>rejected</li></ul></li><li>result</li><li>reason: 是一个 Promise 里 reject 之后返回的拒绝原因</li><li>exception: 是一个异常，是在 Promise 里面可以用 throw 语句抛出来的值</li><li>then、catch、finally <ul><li>链式调用</li><li>延迟绑定</li><li>值穿透、错误冒泡：当我们不在 then 中放入参数，或者参数不为 function，例：promise.then().then()，那么其后面的 then 依旧可以得到之前 then 返回的值</li><li>返回值穿透：resolve 返回值，如果返回值是 Promise，则直接获取内部结果返回</li><li>onResolved 和 onRejected 这两项函数需要异步调用</li></ul></li></ul></li><li>Promise 静态方法 <ul><li><strong>resolve</strong><ul><li>参数为 Promise 对象，直接返回</li><li>参数为 Thenable 对象</li><li>其他数据类型，作为新 Promise 的 result</li></ul></li><li>reject</li><li>all：所有 Promises 状态成功就返回，否则返回失败的 Promises</li><li>allSettled：所有的 Promise 状态完成就返回，不管其是否处理成功</li><li>any：优先返回状态成功的 Promise，否则返回全部失败结果</li><li>race：优先返回优先完成的 Promise</li></ul></li></ul><p>通过手写实现 Promise、异步顺序考点去更好了解 Promise 机制吧 😘</p>',2),v={href:"https://zhuanlan.zhihu.com/p/83965949",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("100 行代码实现 Promises/A+ 规范"),A={href:"https://github.com/laoergege/laoergege-blog/blob/master/docs/JavaScript/codes/promise.js",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)(" 😘 笔者实现的简易版本 promise.js"),b={href:"https://github.com/laoergege/laoergege-blog/issues/81",target:"_blank",rel:"noopener noreferrer"},D=(0,l.Uk)("异步顺序考点"),P=(0,l.uE)('<h3 id="promise-异步错误" tabindex="-1"><a class="header-anchor" href="#promise-异步错误" aria-hidden="true">#</a> Promise 异步错误</h3><p>我们把 Promise 当作着一种异步结果，当产生错误时，自然不会抛出原 Promise 代码外部，因为语言的异常机制需要在同一调用栈中才能被捕获,而异步代码的执行发生是在另一个调用栈。</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">try</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">((</span><span style="color:#953800;">resolve</span><span style="color:#24292F;">, </span><span style="color:#953800;">reject</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">throw</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Error</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;Whoops!&quot;</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">  }).</span><span style="color:#8250DF;">catch</span><span style="color:#24292F;">(alert); </span><span style="color:#6E7781;">// Error: Whoops!</span></span>\n<span class="line"><span style="color:#24292F;">} </span><span style="color:#CF222E;">catch</span><span style="color:#24292F;">(error) {</span></span>\n<span class="line"><span style="color:#24292F;">  console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(error) </span><span style="color:#6E7781;">// no happend</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span></code></pre></div><p>但实际上 JavaScirpt Promise 的执行者（executor）是同步执行，而处理程序（handler）是异步执行。Promise 的执行者（executor）和 promise 的处理程序（handler）周围有一个“隐式的 try..catch”。如果发生异常，它就会被捕获，这样就可以保持在语义上相同了。</p><p>再看一种情况：</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(</span><span style="color:#953800;">resolve</span><span style="color:#24292F;">, </span><span style="color:#953800;">reject</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">setTimeout</span><span style="color:#24292F;">(() </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">throw</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Error</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;Whoops!&quot;</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">  }, </span><span style="color:#0550AE;">1000</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">}).</span><span style="color:#8250DF;">catch</span><span style="color:#24292F;">(alert);</span></span>\n<span class="line"></span></code></pre></div><p>上面的错误不会被 Promise 捕获，setTimeout 也是一种异步操作，故不在 Promise 的异步内部自然无法捕获。</p><p>JavaScript 引擎会跟踪未处理的 rejection，在这种情况下会生成一个全局的 error，在浏览器中，我们可以使用 unhandledrejection 事件来捕获这类 error：</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#24292F;">window.</span><span style="color:#8250DF;">addEventListener</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;unhandledrejection&#39;</span><span style="color:#24292F;">, </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(</span><span style="color:#953800;">event</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">// 这个事件对象有两个特殊的属性：</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">alert</span><span style="color:#24292F;">(event.promise); </span><span style="color:#6E7781;">// [object Promise] - 生成该全局 error 的 promise</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">alert</span><span style="color:#24292F;">(event.reason); </span><span style="color:#6E7781;">// Error: Whoops! - 未处理的 error 对象</span></span>\n<span class="line"><span style="color:#24292F;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">function</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">throw</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Error</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;Whoops!&quot;</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">}); </span><span style="color:#6E7781;">// 没有用来处理 error 的 catch</span></span>\n<span class="line"></span></code></pre></div><h3 id="generator-协程" tabindex="-1"><a class="header-anchor" href="#generator-协程" aria-hidden="true">#</a> Generator &amp; 协程</h3><p>JavaScript 中的 Generator 是一种无栈协程：协程没有自己的调用栈，挂起点的状态通过<strong>状态机</strong>和<strong>闭包</strong>等语法来实现；而有栈协程：每个协程都有自己的调用栈，类似于线程的调用栈。</p><p>无栈协程就意味着无法在内部函数中挂起协程</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">*</span><span style="color:#8250DF;">test</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">  console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;execution start&#39;</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">  </span></span>\n<span class="line"><span style="color:#24292F;">  [</span><span style="color:#0A3069;">&#39;A&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;B&#39;</span><span style="color:#24292F;">].</span><span style="color:#8250DF;">forEach</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(</span><span style="color:#953800;">item</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">yield</span><span style="color:#24292F;"> item; </span><span style="color:#6E7781;">// Uncaught SyntaxError: Unexpected identifier</span></span>\n<span class="line"><span style="color:#24292F;">  })</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">t</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">test</span><span style="color:#24292F;">()</span></span>\n<span class="line"><span style="color:#24292F;">t.</span><span style="color:#8250DF;">next</span><span style="color:#24292F;">()</span></span>\n<span class="line"></span></code></pre></div><h3 id="async-await-实现原理" tabindex="-1"><a class="header-anchor" href="#async-await-实现原理" aria-hidden="true">#</a> Async/Await 实现原理</h3><p>Async/Await 其实只是语法糖，本质上是把 Async 函数编译成 Generator 函数和生成一个基于 Promise 的 Generator 函数自动执行器去迭代完 Generator 函数。</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">_async</span><span style="color:#24292F;">(</span><span style="color:#953800;">gen</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">g</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">gen</span><span style="color:#24292F;">()</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">((</span><span style="color:#953800;">resolve</span><span style="color:#24292F;">, </span><span style="color:#953800;">reject</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">next</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(</span><span style="color:#953800;">res</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">try</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> { value, done } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> g.</span><span style="color:#8250DF;">next</span><span style="color:#24292F;">(res);</span></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#CF222E;">if</span><span style="color:#24292F;">(done) {</span></span>\n<span class="line"><span style="color:#24292F;">          </span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(value) </span></span>\n<span class="line"><span style="color:#24292F;">        } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">          </span><span style="color:#0550AE;">Promise</span></span>\n<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(value) </span><span style="color:#6E7781;">// promise.resolve 解析结果并可捕获 Promise 异步错误进行同步处理</span></span>\n<span class="line"><span style="color:#24292F;">            .</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">(next, (</span><span style="color:#953800;">err</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> g.</span><span style="color:#8250DF;">throw</span><span style="color:#24292F;">(err)) </span><span style="color:#6E7781;">// 通过 promise.then 不断调 generator.next 直到 done</span></span>\n<span class="line"><span style="color:#24292F;">        }</span></span>\n<span class="line"><span style="color:#24292F;">      } </span><span style="color:#CF222E;">catch</span><span style="color:#24292F;"> (error) {</span></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">reject</span><span style="color:#24292F;">(error)</span></span>\n<span class="line"><span style="color:#24292F;">      }</span></span>\n<span class="line"><span style="color:#24292F;">    };</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">next</span><span style="color:#24292F;">();</span></span>\n<span class="line"><span style="color:#24292F;">  });</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">function*</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">g</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> res </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">yield</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">fn</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">reject</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">2</span><span style="color:#24292F;">)</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">try</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">    res </span><span style="color:#CF222E;">+=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">yield</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">fn</span><span style="color:#24292F;">();</span></span>\n<span class="line"><span style="color:#24292F;">  } </span><span style="color:#CF222E;">catch</span><span style="color:#24292F;"> (error) {</span></span>\n<span class="line"><span style="color:#24292F;">    console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;error: &quot;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> error);</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> res;</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 执行</span></span>\n<span class="line"><span style="color:#8250DF;">_async</span><span style="color:#24292F;">(g)</span></span>\n<span class="line"></span></code></pre></div><p>把生成器 g 跟 async 函数版本对比一下，不就是：</p><ul><li>function* 换成 async</li><li>yield 换成 await</li></ul><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">async</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">g</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> res </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">fn</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> { </span><span style="color:#CF222E;">throw</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">2</span><span style="color:#24292F;"> }</span></span>\n<span class="line"><span style="color:#24292F;">  res </span><span style="color:#CF222E;">+=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">await</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">fn</span><span style="color:#24292F;">();</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> res;</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span></code></pre></div><p>对比下 Babel 编译生成的代码：</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#0A3069;">&quot;use strict&quot;</span><span style="color:#24292F;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">asyncGeneratorStep</span><span style="color:#24292F;">(</span><span style="color:#953800;">gen</span><span style="color:#24292F;">, </span><span style="color:#953800;">resolve</span><span style="color:#24292F;">, </span><span style="color:#953800;">reject</span><span style="color:#24292F;">, </span><span style="color:#953800;">_next</span><span style="color:#24292F;">, </span><span style="color:#953800;">_throw</span><span style="color:#24292F;">, </span><span style="color:#953800;">key</span><span style="color:#24292F;">, </span><span style="color:#953800;">arg</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">try</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> info </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> gen[key](arg);</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> value </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> info.value;</span></span>\n<span class="line"><span style="color:#24292F;">  } </span><span style="color:#CF222E;">catch</span><span style="color:#24292F;"> (error) {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">reject</span><span style="color:#24292F;">(error);</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (info.done) {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(value);</span></span>\n<span class="line"><span style="color:#24292F;">  } </span><span style="color:#CF222E;">else</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">resolve</span><span style="color:#24292F;">(value).</span><span style="color:#8250DF;">then</span><span style="color:#24292F;">(_next, _throw);</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">_asyncToGenerator</span><span style="color:#24292F;">(</span><span style="color:#953800;">fn</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> () {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> self </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">      args </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">arguments</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Promise</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> (</span><span style="color:#953800;">resolve</span><span style="color:#24292F;">, </span><span style="color:#953800;">reject</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> gen </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> fn.</span><span style="color:#8250DF;">apply</span><span style="color:#24292F;">(self, args);</span></span>\n<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">_next</span><span style="color:#24292F;">(</span><span style="color:#953800;">value</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">asyncGeneratorStep</span><span style="color:#24292F;">(gen, resolve, reject, _next, _throw, </span><span style="color:#0A3069;">&quot;next&quot;</span><span style="color:#24292F;">, value);</span></span>\n<span class="line"><span style="color:#24292F;">      }</span></span>\n<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">_throw</span><span style="color:#24292F;">(</span><span style="color:#953800;">err</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">asyncGeneratorStep</span><span style="color:#24292F;">(gen, resolve, reject, _next, _throw, </span><span style="color:#0A3069;">&quot;throw&quot;</span><span style="color:#24292F;">, err);</span></span>\n<span class="line"><span style="color:#24292F;">      }</span></span>\n<span class="line"><span style="color:#24292F;">      </span><span style="color:#8250DF;">_next</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">undefined</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">    });</span></span>\n<span class="line"><span style="color:#24292F;">  };</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">g</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> _g.</span><span style="color:#8250DF;">apply</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">arguments</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">_g</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">  _g </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">_asyncToGenerator</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">function*</span><span style="color:#24292F;"> () {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">let</span><span style="color:#24292F;"> res </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">yield</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">fn</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">throw</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">2</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">    };</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">    res </span><span style="color:#CF222E;">+=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">yield</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">fn</span><span style="color:#24292F;">();</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> res;</span></span>\n<span class="line"><span style="color:#24292F;">  });</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> _g.</span><span style="color:#8250DF;">apply</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">arguments</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="学习参考" tabindex="-1"><a class="header-anchor" href="#学习参考" aria-hidden="true">#</a> 学习参考</h2>',22),j={href:"https://zhuanlan.zhihu.com/p/434361727",target:"_blank",rel:"noopener noreferrer"},w=(0,l.Uk)("从根本上了解异步编程体系"),x={href:"https://code2life.top/2021/05/31/0062-concurrent-model-async-programming/",target:"_blank",rel:"noopener noreferrer"},S=(0,l.Uk)("白话并发模型和异步编程范式"),U={href:"https://zhuanlan.zhihu.com/p/32961438",target:"_blank",rel:"noopener noreferrer"},J=(0,l.Uk)("并发编程模型：事件驱动 vs 线程"),q={href:"https://luminousmen.com/post/asynchronous-programming-blocking-and-non-blocking",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("Asynchronous programming. Blocking I/O and non-blocking I/O"),W={href:"https://zh.javascript.info/promise-error-handling",target:"_blank",rel:"noopener noreferrer"},G=(0,l.Uk)("使用 promise 进行错误处理"),I=(0,l._)("li",null,"阮一峰《深入掌握 ECMAScript 6 异步编程》",-1),O={},z=(0,a(3860).Z)(O,[["render",function(s,n){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[e,(0,l._)("ul",null,[(0,l._)("li",null,[r,(0,l._)("ul",null,[t,(0,l._)("li",null,[c,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",y,[i,(0,l.Wm)(a)])])])]),F,u,E,h])])]),g,d,(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",f,[C,(0,l.Wm)(a)])])]),m,(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",v,[_,(0,l.Wm)(a)])])]),(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",A,[k,(0,l.Wm)(a)])])]),(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l._)("a",b,[D,(0,l.Wm)(a)])])]),P,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",j,[w,(0,l.Wm)(a)])]),(0,l._)("li",null,[(0,l._)("a",x,[S,(0,l.Wm)(a)])]),(0,l._)("li",null,[(0,l._)("a",U,[J,(0,l.Wm)(a)])]),(0,l._)("li",null,[(0,l._)("a",q,[B,(0,l.Wm)(a)])]),(0,l._)("li",null,[(0,l._)("a",W,[G,(0,l.Wm)(a)])]),I])])}]])},3860:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,l]of n)a[s]=l;return a}}}]);
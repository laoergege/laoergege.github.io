"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[2271],{1347:(s,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l={key:"v-85bc3e4c",path:"/JavaScript/JavaScript%20%E5%AF%B9%E8%B1%A1.html",title:"JavaScript 对象",lang:"zh-CN",frontmatter:{release:!0,tags:["javascript","对象"]},excerpt:"",headers:[{level:2,title:"JavaScript 对象模型",slug:"javascript-对象模型",children:[]},{level:2,title:"基于原型的面向对象编程",slug:"基于原型的面向对象编程",children:[{level:3,title:"JavaScript 的原型机制",slug:"javascript-的原型机制",children:[]},{level:3,title:"new + 构造器模拟“类”行为",slug:"new-构造器模拟-类-行为",children:[]},{level:3,title:"ES6 中的类 class",slug:"es6-中的类-class",children:[]},{level:3,title:"原型继承",slug:"原型继承",children:[]},{level:3,title:"ES6 继承",slug:"es6-继承",children:[]}]},{level:2,title:"其他",slug:"其他",children:[{level:3,title:"原型链判断",slug:"原型链判断",children:[]},{level:3,title:"函数对象",slug:"函数对象",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1630400773e3,updatedTime:1647531844e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:15}]}}},2774:(s,a,n)=>{n.r(a),n.d(a,{default:()=>v});var l=n(5393);const p=n.p+"assets/img/1643035299916.1b546661.png",o=(0,l.uE)('<h1 id="javascript-对象" tabindex="-1"><a class="header-anchor" href="#javascript-对象" aria-hidden="true">#</a> JavaScript 对象</h1><ul><li>JavaScript 对象 <ul><li>对象本质：一切事物的总称 <ul><li>对象的特征：唯一、状态、行为</li></ul></li><li><a href="#javascript-%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B">对象模型设计</a><ul><li>属性集合 <ul><li>属性：key-value 结构</li></ul></li><li>具有动态性</li></ul></li><li><a href="#%E5%9F%BA%E4%BA%8E%E5%8E%9F%E5%9E%8B%E7%9A%84%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B">基于原型的面向对象编程</a><ul><li><a href="#javascript-%E7%9A%84%E5%8E%9F%E5%9E%8B%E6%9C%BA%E5%88%B6">原型系统</a></li><li>原型修改方法 <ul><li><code>__proto__</code></li><li>new + 构造器.prototype</li><li>es5 <ul><li>Object.create</li><li>Object.getPrototypeOf</li><li>Object.setPrototypeOf</li></ul></li></ul></li><li><a href="#new--%E6%9E%84%E9%80%A0%E5%99%A8%E6%A8%A1%E6%8B%9F%E7%B1%BB%E8%A1%8C%E4%B8%BA">new + 构造器模拟“类”行为</a></li><li><a href="#es6-%E4%B8%AD%E7%9A%84%E7%B1%BB-class">ES6 中的类 class</a><ul><li>类 <ul><li>构造器</li><li>实例属性</li><li>静态属性</li><li>私有属性</li><li>静态块：在类生成时运行一次，主要作用是对静态属性进行初始化</li><li>继承</li></ul></li></ul></li><li><a href="#%E5%8E%9F%E5%9E%8B%E7%BB%A7%E6%89%BF">原型继承</a></li><li><a href="#es6-%E7%BB%A7%E6%89%BF">ES6 继承</a></li></ul></li><li><a href="#%E5%8E%9F%E5%9E%8B%E9%93%BE%E5%88%A4%E6%96%AD">原型链判断</a></li><li><a href="#%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1">函数对象</a></li></ul></li></ul><h2 id="javascript-对象模型" tabindex="-1"><a class="header-anchor" href="#javascript-对象模型" aria-hidden="true">#</a> JavaScript 对象模型</h2><p>JavaScript 对象的设计要点：</p><ol><li><p>在 JavaScript 中，对象的状态和行为其实都被抽象为了<strong>属性</strong></p></li><li><p>属性分为数据属性和访问器属性两类</p><ul><li>数据属性 <ul><li>value，就是属性的值</li><li>writable，可写</li><li>enumerable，可枚举</li><li>configurable，决定该属性能否被删除或者改变特征值</li></ul></li><li>访问器属性 <ul><li>get，在取属性值时被调用</li><li>set，在设置属性值时被调用</li><li>enumerable，可枚举</li><li>configurable，决定该属性能否被删除或者改变特征值</li></ul></li></ul><p>如果一个描述符不具有 value、writable、get 和 set 中的任意一个键，那么它将被认为是一个数据描述符。 如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常。</p></li><li><p>对象是一个<strong>属性集合</strong>，属性是一个<strong>key-value 的索引结构</strong></p></li><li><p>运行时对象具有动态修改属性的能力</p></li></ol><p>JavaScript 的对象系统设计跟目前主流如 Java 基于类的面向对象差异非常大：<strong>具有高度动态性的属性集合</strong>。</p><p>JavaScript 提供了完全运行时能力，这使得它可以模仿具有多种编程范式支持：同时支持面向对象类和原型的编程范式、函数式编程（JavaScript 中函数是一种特殊对象）。那么 JavaScript 是如何基于这样的动态对象模型设计自己的原型系统，以及你熟悉的函数、类等基础设施。</p><h2 id="基于原型的面向对象编程" tabindex="-1"><a class="header-anchor" href="#基于原型的面向对象编程" aria-hidden="true">#</a> 基于原型的面向对象编程</h2><p>面向对象编程范式主要分两类：</p><ul><li><p>基于类</p><p>“基于类”的编程提倡使用一个关注分类和类之间关系开发模型。在这类语言中，<strong>总是先有类，再从类去实例化一个对象</strong>。类与类之间又可能会形成继承、组合等关系。类又往往与语言的类型系统整合，形成一定编译时的能力。</p></li><li><p>基于原型</p><p>“基于原型”的编程看起来更为提倡程序员<strong>先去关注一系列对象实例的行为</strong>，而后才去关心如何将这些对象，<strong>划分到最近的使用方式相似的原型对象，而不是将它们先分成类</strong>。</p></li></ul><p>“类”在 JavaScript 中仅仅只是一个对象的“类型”标签，语言使用者唯一可以访问该属性的方式是 <code>Object.prototype.toString</code>，也可通过 <code>Symbol.toStringTag</code> 自定义 Object.prototype.toString 的行为：</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> o </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> { [</span><span style="color:#0550AE;">Symbol</span><span style="color:#24292F;">.toStringTag]: </span><span style="color:#0A3069;">&quot;MyObject&quot;</span><span style="color:#24292F;"> }</span></span>\n<span class="line"><span style="color:#24292F;">console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.toString.</span><span style="color:#8250DF;">call</span><span style="color:#24292F;">(o)); </span><span style="color:#6E7781;">// &#39;[object MyObject]&#39;</span></span>\n<span class="line"></span></code></pre></div><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">ValidatorClass</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">get</span><span style="color:#24292F;"> [</span><span style="color:#0550AE;">Symbol</span><span style="color:#24292F;">.toStringTag]() {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&quot;Validator&quot;</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.toString.</span><span style="color:#8250DF;">call</span><span style="color:#24292F;">(</span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">ValidatorClass</span><span style="color:#24292F;">()); </span><span style="color:#6E7781;">// &quot;[object Validator]&quot;</span></span>\n<span class="line"></span></code></pre></div><p>基于原型的面向对象系统通过“复制”的方式来创建新对象。原型系统的“复制操作”有两种实现思路：</p><ul><li>一个是并不真的去复制一个原型对象，而是使得新对象持有一个原型的引用（JavaScript 选择）；</li><li>另一个是切实地复制对象，从此两个对象再无关联。</li></ul><h3 id="javascript-的原型机制" tabindex="-1"><a class="header-anchor" href="#javascript-的原型机制" aria-hidden="true">#</a> JavaScript 的原型机制</h3><p>原型系统机制：</p><ul><li>所有对象都有私有属性 <code>[[prototype]]</code>（目前大多数浏览器厂商非标准实现 <code>__proto__</code> 属性）保持对原型的引用；</li><li>读一个属性，如果对象本身没有，则会继续访问对象的原型、依次类推原型的原型，直到原型为空或者找到为止（<strong>原型链</strong>）。</li></ul><p>很多基于原型的系统提倡运行时原型的修改，而基于类的面向对象系统大多数在编译期确定类无法运行时修改。原型修改方法：</p><ul><li><code>Object.prototype.__proto__</code>，直接暴力访问属性去访问的对象的内部 <code>[[Prototype]]</code>，但这个属性是非 web 标准。</li><li>new + 构造器：指定原型创建对象</li><li>ES5 提供的原型操作标准方法 <ul><li>Object.create 创建一个对象，并将原型指针指向指定对象</li><li>Object.getPrototypeOf 获得一个对象的原型；</li><li>Object.setPrototypeOf 设置一个对象的原型。</li></ul></li></ul><p>基于原型范式的对象编程</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">// 直接创建对象实例，运行时默认原型为 Object.prototype</span></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> cat </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">say</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">        console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;meow~&quot;</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">    },</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">jump</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">        console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;jump&quot;</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">    }</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 关注对象行为，创建制定原型新对象</span></span>\n<span class="line"><span style="color:#6E7781;">// 非 ES 标准： var tiger = { say(){} }; tiger.__proto__ = cat </span></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> tiger </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">create</span><span style="color:#24292F;">(cat,  {</span></span>\n<span class="line"><span style="color:#24292F;">    say:{</span></span>\n<span class="line"><span style="color:#24292F;">        writable:</span><span style="color:#0550AE;">true</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">        configurable:</span><span style="color:#0550AE;">true</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">        enumerable:</span><span style="color:#0550AE;">true</span><span style="color:#24292F;">,</span></span>\n<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">value</span><span style="color:#24292F;">:</span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">            console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;roar!&quot;</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#24292F;">        }</span></span>\n<span class="line"><span style="color:#24292F;">    }</span></span>\n<span class="line"><span style="color:#24292F;">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> anotherCat </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">create</span><span style="color:#24292F;">(cat);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">anotherCat.</span><span style="color:#8250DF;">say</span><span style="color:#24292F;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 利用原型来实现抽象和复用</span></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> anotherTiger </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">create</span><span style="color:#24292F;">(tiger);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">anotherTiger.</span><span style="color:#8250DF;">say</span><span style="color:#24292F;">();</span></span>\n<span class="line"><span style="color:#24292F;">anotherTiger.</span><span style="color:#8250DF;">jump</span><span style="color:#24292F;">();</span></span>\n<span class="line"></span></code></pre></div><h3 id="new-构造器模拟-类-行为" tabindex="-1"><a class="header-anchor" href="#new-构造器模拟-类-行为" aria-hidden="true">#</a> new + 构造器模拟“类”行为</h3><p>早期 JavaScript 因为一些公司的政治原因，引入了 new、this 等语言特性，使之“看起来语法更像 Java”。</p><p>new + 构造器模拟“类”创建对象：</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">c1</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.p1 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">p2</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">        console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.p1);</span></span>\n<span class="line"><span style="color:#24292F;">    }</span></span>\n<span class="line"><span style="color:#24292F;">} </span></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> o1 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> c1;</span></span>\n<span class="line"><span style="color:#24292F;">o1.</span><span style="color:#8250DF;">p2</span><span style="color:#24292F;">();</span></span>\n<span class="line"></span></code></pre></div><p>但上面的一切还是基于运行时原型系统，new 的行为：</p><ol><li>以构造器函数的 prototype 属性值为原型创建新对象</li><li>将 this 指向该对象</li><li>将this、参数传给构造函数并执行</li><li>若构造函数返回对象则直接返回，否则使用新创建的对象返回</li></ol><p>new + this 的语法特性让函数变成混乱，而且它客观上提供了两种方式，一是在构造器中添加属性，二是在构造器的 prototype 属性上添加属性，导致创建行为不统一。</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">c1</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.p1 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">p2</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">        console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.p1);</span></span>\n<span class="line"><span style="color:#24292F;">    }</span></span>\n<span class="line"><span style="color:#24292F;">} </span></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> o1 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> c1;</span></span>\n<span class="line"><span style="color:#24292F;">o1.</span><span style="color:#8250DF;">p2</span><span style="color:#24292F;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">c2</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"><span style="color:#0550AE;">c2</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.p1 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#0550AE;">c2</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">p2</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">    console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.p1);</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> o2 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> c2;</span></span>\n<span class="line"><span style="color:#24292F;">o2.</span><span style="color:#8250DF;">p2</span><span style="color:#24292F;">();</span></span>\n<span class="line"></span></code></pre></div><h3 id="es6-中的类-class" tabindex="-1"><a class="header-anchor" href="#es6-中的类-class" aria-hidden="true">#</a> ES6 中的类 class</h3><p>ES6 中加入了新特性 class、extends，new、this 跟 function 搭配的怪异行为终于可以不使用了，但是类的写法依旧是基于原型机制的语法糖，JavaScript 的原型体系同时作为一种编程范式和运行时机制存在。<strong>推荐在任何场景，我都推荐使用 ES6 的语法来定义类，而令 function 回归原本的函数语义</strong>。</p><p>注意对象创建的行为：</p><ul><li>类的数据属性写在对象上</li><li>访问器属性和方法则写在原型对象上的（且不可枚举）</li></ul><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">N</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">name</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">age</span><span style="color:#24292F;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">constructor</span><span style="color:#24292F;">(</span><span style="color:#953800;">name</span><span style="color:#24292F;">) {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.name </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> name;</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">showName</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">    console.</span><span style="color:#8250DF;">log</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.name);</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">get</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">desp</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">`My name is ${</span><span style="color:#0550AE;">this</span><span style="color:#0A3069;">.</span><span style="color:#24292F;">name</span><span style="color:#0A3069;">}`</span><span style="color:#24292F;">;</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span></code></pre></div><ul><li>类 <ul><li>构造器</li><li>实例属性</li><li>静态属性</li><li>私有属性</li><li>静态块：在类生成时运行一次，主要作用是对静态属性进行初始化</li><li>继承</li></ul></li></ul>',36),e=(0,l.Uk)("更多 "),t={href:"https://es6.ruanyifeng.com/#docs/class",target:"_blank",rel:"noopener noreferrer"},c=(0,l.Uk)("Class 相关语法"),r=(0,l.Uk)("参考。"),y=(0,l.uE)('<h3 id="原型继承" tabindex="-1"><a class="header-anchor" href="#原型继承" aria-hidden="true">#</a> 原型继承</h3><p>继承是面向对象编程的一个重要特性，在 JavaScript 实现继承的方式有</p><ul><li>拼接（复制）继承：<code>Object.assign</code></li><li>主要是基于原型链的继承（原型代理）：通过<strong>借用构造函数</strong>实现独享数据属性，通过<strong>原型链</strong>继承共享方法属性。</li></ul><p>以下是寄生组合式继承（PS：SB 名称）代码示例：</p>',4),i=(0,l._)("p",null,"推荐阅读",-1),F={href:"https://tsejx.github.io/javascript-guidebook/object-oriented-programming/inheritance/prototype-chain#%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%AE%9E%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("JavaScript 继承"),u={href:"https://yanhaijing.com/javascript/2014/11/09/object-inherit-of-js/",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("JavaScript对象继承一瞥"),h=(0,l.uE)('<div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">inheritPrototype</span><span style="color:#24292F;">(</span><span style="color:#953800;">subType</span><span style="color:#24292F;">, </span><span style="color:#953800;">superType</span><span style="color:#24292F;">){</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">var</span><span style="color:#24292F;"> prototype </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">create</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">superType</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">); </span><span style="color:#6E7781;">// 创建对象，创建父类原型的一个副本</span></span>\n<span class="line"><span style="color:#24292F;">  prototype.</span><span style="color:#0550AE;">constructor</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> subType;                    </span><span style="color:#6E7781;">// 增强对象，弥补因重写原型而失去的默认的constructor 属性</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">subType</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> prototype;                      </span><span style="color:#6E7781;">// 指定对象，将新创建的对象赋值给子类的原型</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 父类初始化实例属性和原型属性</span></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">SuperType</span><span style="color:#24292F;">(</span><span style="color:#953800;">name</span><span style="color:#24292F;">){</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.name </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> name;</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.colors </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> [</span><span style="color:#0A3069;">&quot;red&quot;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&quot;blue&quot;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&quot;green&quot;</span><span style="color:#24292F;">];</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"><span style="color:#0550AE;">SuperType</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">sayName</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">alert</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.name);</span></span>\n<span class="line"><span style="color:#24292F;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）</span></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">SubType</span><span style="color:#24292F;">(</span><span style="color:#953800;">name</span><span style="color:#24292F;">, </span><span style="color:#953800;">age</span><span style="color:#24292F;">){</span></span>\n<span class="line"><span style="color:#24292F;">  SuperType.</span><span style="color:#8250DF;">call</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">, name); </span><span style="color:#6E7781;">// 类似 class super</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.age </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> age;</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 将父类原型指向子类</span></span>\n<span class="line"><span style="color:#8250DF;">inheritPrototype</span><span style="color:#24292F;">(SubType, SuperType);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 新增子类原型属性</span></span>\n<span class="line"><span style="color:#0550AE;">SubType</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">sayAge</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">(){</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">alert</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">this</span><span style="color:#24292F;">.age);</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> instance1 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">SubType</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;xyc&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">23</span><span style="color:#24292F;">);</span></span>\n<span class="line"><span style="color:#CF222E;">var</span><span style="color:#24292F;"> instance2 </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">SubType</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;lxy&quot;</span><span style="color:#24292F;">, </span><span style="color:#0550AE;">23</span><span style="color:#24292F;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">instance1.colors.</span><span style="color:#8250DF;">push</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;2&quot;</span><span style="color:#24292F;">); </span><span style="color:#6E7781;">// [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;, &quot;2&quot;]</span></span>\n<span class="line"><span style="color:#24292F;">instance1.colors.</span><span style="color:#8250DF;">push</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&quot;3&quot;</span><span style="color:#24292F;">); </span><span style="color:#6E7781;">// [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;, &quot;3&quot;]</span></span>\n<span class="line"></span></code></pre></div><p>简化版</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#6E7781;">// new + 构造器，寄生组合式继承</span></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">A</span><span style="color:#24292F;">() {}</span></span>\n<span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">B</span><span style="color:#24292F;">() {}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6E7781;">// 关键</span></span>\n<span class="line"><span style="color:#0550AE;">B</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">create</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">A</span><span style="color:#24292F;">)</span></span>\n<span class="line"><span style="color:#0550AE;">B</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">constructor</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">B</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#0550AE;">B</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">xxx</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;">() {}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">let</span><span style="color:#24292F;"> b </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">B</span><span style="color:#24292F;">()</span></span>\n<span class="line"></span></code></pre></div><p>注意不要 <code>B.prototype=A.prototype</code> ，这种共享原型的方式会导致对 B 的原型扩展，A 的实例也能访问得到。</p><h3 id="es6-继承" tabindex="-1"><a class="header-anchor" href="#es6-继承" aria-hidden="true">#</a> ES6 继承</h3><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">A</span><span style="color:#24292F;"> {}</span></span>\n<span class="line"><span style="color:#CF222E;">class</span><span style="color:#24292F;"> </span><span style="color:#953800;">B</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">extends</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">A</span><span style="color:#24292F;"> {</span></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">constructor</span><span style="color:#24292F;">() {</span></span>\n<span class="line"><span style="color:#24292F;">    </span><span style="color:#0550AE;">super</span><span style="color:#24292F;">()</span></span>\n<span class="line"><span style="color:#24292F;">  }</span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">b</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">B</span><span style="color:#24292F;">();</span></span>\n<span class="line"></span></code></pre></div><ul><li>super 要点 <ul><li>子类必须在 <code>constructor()</code> 方法中调用 <code>super()</code><ul><li>ES6 的继承机制：内部创建的空对象必须先继承父类的属性和方法，再将该对象作为子类的实例返回给子类的 this，即“继承在前，实例在后”</li><li>ES5 的继承机制：直接一个子类的实例对象，然后应用父类构造器继承父类的属性和方法，即“实例在前，继承在后”</li></ul></li><li>super作为函数调用时，代表父类的构造函数</li><li>super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类</li><li>子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例</li><li><strong>可继承原生构造函数</strong>自定义子类</li></ul></li></ul><p>ES6 的继承本质也是基于原型，Babel 的继承源码实现：</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#ffffff;"><code><span class="line"><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">_inherits</span><span style="color:#24292F;"> (</span><span style="color:#953800;">subClass</span><span style="color:#24292F;">, </span><span style="color:#953800;">superClass</span><span style="color:#24292F;">) { </span></span>\n<span class="line"><span style="color:#24292F;">\t</span><span style="color:#0550AE;">subClass</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">create</span><span style="color:#24292F;">(superClass </span><span style="color:#CF222E;">&amp;&amp;</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">superClass</span><span style="color:#24292F;">.</span><span style="color:#0550AE;">prototype</span><span style="color:#24292F;">, { </span></span>\n<span class="line"><span style="color:#24292F;">\t\tconstructor: { </span></span>\n<span class="line"><span style="color:#24292F;">\t\t\tvalue: subClass, </span></span>\n<span class="line"><span style="color:#24292F;">\t\t\tenumerable: </span><span style="color:#0550AE;">false</span><span style="color:#24292F;">, </span><span style="color:#6E7781;">// 原型不可枚举</span></span>\n<span class="line"><span style="color:#24292F;">\t\t\twritable: </span><span style="color:#0550AE;">true</span><span style="color:#24292F;">, </span></span>\n<span class="line"><span style="color:#24292F;">\t\t\tconfigurable: </span><span style="color:#0550AE;">true</span><span style="color:#24292F;"> </span></span>\n<span class="line"><span style="color:#24292F;">\t\t} </span></span>\n<span class="line"><span style="color:#24292F;">\t}); </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">// 静态属性继承</span></span>\n<span class="line"><span style="color:#24292F;">\t</span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (superClass) </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.setPrototypeOf </span><span style="color:#CF222E;">?</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">Object</span><span style="color:#24292F;">.</span><span style="color:#8250DF;">setPrototypeOf</span><span style="color:#24292F;">(subClass, superClass) </span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> subClass.</span><span style="color:#0550AE;">__proto__</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> superClass; </span></span>\n<span class="line"><span style="color:#24292F;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="原型链判断" tabindex="-1"><a class="header-anchor" href="#原型链判断" aria-hidden="true">#</a> 原型链判断</h3><p>画出上面原型链中各个对象 <code>__proto__</code> ，<code>constructor</code> 和 <code>prototype</code> 的关系：</p><p><img src="'+p+'" alt="图 13"></p><p><strong>原型链中 Function 比较特殊的地方就是 <code>Function.__proto__</code> 指向自己的 <code>Function.prototype</code> 需要特殊记忆</strong>。</p><h3 id="函数对象" tabindex="-1"><a class="header-anchor" href="#函数对象" aria-hidden="true">#</a> 函数对象</h3><p>JavaScript 用对象模拟函数的设计代替了一般编程语言中的函数，它们可以像其它语言的函数一样被调用、传参。</p><p>任何宿主只要提供了“具有<code>[[call]]</code>私有字段的对象”，就可以被 JavaScript 函数调用语法支持；如果它能实现<code>[[construct]]</code>，它就是一个构造器对象，可以作为构造器被调用。</p><p>用户使用 function 语法或者 Function 构造器创建的对象同时具有 <code>[[call]]</code> 和 <code>[[construct]]</code>；而 =&gt; 语法创建的函数仅仅是函数。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',19),g={href:"https://yanhaijing.com/javascript/2021/03/13/javascript-prototype-chain/",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("《如何回答面试中的JavaScript原型链问题》"),A=(0,l._)("li",null,"极客学习《重学前端》",-1),C={},v=(0,n(3860).Z)(C,[["render",function(s,a){const n=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[o,(0,l._)("p",null,[e,(0,l._)("a",t,[c,(0,l.Wm)(n)]),r]),y,(0,l._)("blockquote",null,[i,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",F,[E,(0,l.Wm)(n)])]),(0,l._)("li",null,[(0,l._)("a",u,[d,(0,l.Wm)(n)])])])]),h,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",g,[f,(0,l.Wm)(n)])]),A])])}]])},3860:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,l]of a)n[s]=l;return n}}}]);
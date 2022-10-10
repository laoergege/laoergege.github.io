"use strict";(self.webpackChunklaoergege_blog=self.webpackChunklaoergege_blog||[]).push([[3715],{9584:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-6dc8e518",path:"/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E5%BA%95%E5%B1%82%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84%EF%BC%9A%E6%95%B0%E7%BB%84%E3%80%81%E9%93%BE%E8%A1%A8.html",title:"底层存储结构：数组、链表",lang:"zh-CN",frontmatter:{release:!0,tags:["数据结构","数组","链表"]},excerpt:"",headers:[{level:2,title:"链表",slug:"链表",children:[{level:3,title:"单链表",slug:"单链表",children:[]},{level:3,title:"循环链表",slug:"循环链表",children:[]},{level:3,title:"双向链表",slug:"双向链表",children:[]},{level:3,title:"双向循环链表",slug:"双向循环链表",children:[]}]},{level:2,title:"链表操作",slug:"链表操作",children:[{level:3,title:"跳表",slug:"跳表",children:[]}]}],git:{createdTime:1638247357e3,updatedTime:1648917824e3,contributors:[{name:"连远生",email:"lianyuansheng@xiao100.com",commits:7}]}}},9160:(e,a,i)=>{i.r(a),i.d(a,{default:()=>p});var l=i(5393);const t=i.p+"assets/img/b93e7ade9bb927baad1348d9a806ddeb.b0f491c5.jpg",r=i.p+"assets/img/86cb7dc331ea958b0a108b911f38d155.83a89042.jpg",s=i.p+"assets/img/cbc8ab20276e2f9312030c313a9ef70b.a58ef71f.jpg",n=i.p+"assets/img/d1665043b283ecdf79b157cfc9e5ed91.88600ee8.jpg",d=i.p+"assets/img/452e943788bdeea462d364389bd08a17.983baa27.jpg",g=i.p+"assets/img/image-20210424160817179.d2afeea7.png",h=i.p+"assets/img/image-20210424160856047.311a8e0d.png",o=[(0,l.uE)('<h1 id="底层存储结构-数组、链表" tabindex="-1"><a class="header-anchor" href="#底层存储结构-数组、链表" aria-hidden="true">#</a> 底层存储结构：数组、链表</h1><p>数据结构种类很多，底层实现无非数组或者链表，但它们存在的目的都是在不同的应用场景合理组织数据，尽可能高效地查找、修改，也就是更好的时间换空间策略。</p><p>数据查找：遍历 + 索引；<br> 遍历：线性表就是 for/while 迭代为代表，非线性表就是递归为代表。</p><ul><li><p>数组</p><p>数组（Array）是一种<strong>线性表数据结构</strong>。它用一组<strong>连续</strong>的内存空间，来存储一组具有<strong>相同类型</strong>的数据。</p><p>由于是紧凑连续存储,可以随<strong>机访问</strong>，时间复杂度为 O(1)。通过索引快速找到对应元素，而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配够，所以说数组如果要扩容，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度 O(N)；而且<strong>你如果想在数组中间进行插入和删除，每次必须搬移后面的所有数据以保持连续，时间复杂度 O(N)</strong>。</p></li><li><p>链表</p><p>因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后驱，<strong>操作指针即可删除该元素或者插入新元素，时间复杂度 O(1)</strong>。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以<strong>不能随机访问，只能顺序访问，时间复杂度 O(n)</strong>；而且由于每个元素必须存储指向前后元素位置的指针，会<strong>消耗相对更多的储存空间</strong>。</p></li></ul><h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2><p>链表（linkedList）是一种线性表数据结构，链表通过指针将一组零散的内存块串联在一起。其中，我们把内存块称为链表的“结点”。为了将所有的结点串起来，每个链表的结点除了存储数据之外，还需要记录链上的下一个结点的地址。</p><ul><li>链表 <ul><li>单链表</li><li>双向链表</li><li>双向循环链表</li><li>链表操作</li><li>链表技巧</li><li>高级：跳表</li></ul></li></ul><h3 id="单链表" tabindex="-1"><a class="header-anchor" href="#单链表" aria-hidden="true">#</a> 单链表</h3><p>一般情况下说的链表指的是单链表。</p><img src="'+t+'" alt="img" style="zoom:50%;"><p>记录下个结点地址的指针叫作后继指针 next，前继指针 previous。</p><p>第一个结点叫作头结点（head），把最后一个结点叫作尾结点（tail）。</p><h3 id="循环链表" tabindex="-1"><a class="header-anchor" href="#循环链表" aria-hidden="true">#</a> 循环链表</h3><p>循环链表是一种特殊的单链表。单链表的尾结点指针指向空地址，而循环链表的尾结点指针是指向链表的头结点。</p><img src="'+r+'" alt="img" style="zoom:50%;"><h3 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h3><p>双向链表，每个结点不止有一个后继指针 next 指向后面的结点，还有一个前驱指针 prev 指向前面的结点。</p><p>双向链表要比单链表占用更多的内存空间，但还是比单链表的应用更加广泛的原因，因为空间换时间。利用前驱指针，双向链表在某些情况下的插入、删除等操作都要比单链表简单、高效。</p><img src="'+s+'" alt="img" style="zoom:50%;"><h3 id="双向循环链表" tabindex="-1"><a class="header-anchor" href="#双向循环链表" aria-hidden="true">#</a> 双向循环链表</h3><img src="'+n+'" alt="img" style="zoom:50%;"><h2 id="链表操作" tabindex="-1"><a class="header-anchor" href="#链表操作" aria-hidden="true">#</a> 链表操作</h2><ul><li>链表操作 <ul><li>插入、删除（O(1)） <ul><li>插入：<code>x-&gt;next=c; b-&gt;next=x</code></li><li>删除：<code>a-&gt;next=b-&gt;next-&gt;next</code><img src="'+d+'" alt="img" style="zoom:50%;"></li></ul></li><li>遍历（O(n)）：内存上，数组的缺点是大小固定，一经声明就要占用整块连续内存空间。因为链表中的数据并非连续存储的，所以无法像数组那样，根据首地址和下标，通过寻址公式就能直接计算出对应的内存地址，而是需要根据指针一个结点一个结点地依次遍历，直到找到相应的结点</li></ul></li><li>注意空指针</li><li>使用<strong>带头链表</strong>：简化操作，针对链表的插入、删除操作，需要对插入第一个结点和删除最后一个结点的情况进行特殊处理</li></ul><h3 id="跳表" tabindex="-1"><a class="header-anchor" href="#跳表" aria-hidden="true">#</a> 跳表</h3><p>类似链表，查找操作如果需要加速，可以添加多级索引，变成跳表，以提升效率 思想推广一下就是，一维数据结构的某项操作如果需要加速，则可以进行升维，使其更多附加信息，以提升效率。 本质是空间换时间</p><img src="'+g+'" alt="image-20210424160817179" style="zoom:50%;"><img src="'+h+'" alt="image-20210424160856047" style="zoom:50%;">',27)],c={},p=(0,i(3860).Z)(c,[["render",function(e,a){return(0,l.wg)(),(0,l.iD)("div",null,o)}]])},3860:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,l]of a)i[e]=l;return i}}}]);
# 面试

## 请你说一下flex布局和传统布局有什么区别？

### css盒子模型不是某种布局专属的，是所有布局共同的。传统布局这个词太泛泛，目前在用的主流方法主要有两类。一类是基于格子布局，将页面看成行+列的二维布局。另一类是flex布局，将页面看成行或者列的一维布局。到现在这个时代，其他的方法都归为传统布局，或者说过时的布局方法。比如传说中的默认布局，其实就是不去布局。还有基于float实现多列的布局。还有依赖table的表格布局。

[链接](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout)

### 性能上flex允许子元素不设置宽高，而是由算法动态去计算，性能会比设定好宽高的稍慢。但在这个时代大体没有影响。但计算有时候会不符合人的预期，有时候需要用flex提供的属性给予启发。

### 基本上答了传统布局是基于盒模型的就错了。第二个大坑是，传统布局+flex布局！=所有布局。

### 如果能知道除了传统布局和flex布局外还有grid布局，多列布局等等n多种方法。那就比较出彩了。

### grid  layout就是格子布局。最后补充几个相关问题，第一个是大家面试要知道flex几种历史的写法，比如哪些浏览器支持-webkit-box？还有比如说，flex目前是w3c的提议还是标准？再比如说，什么是布局？再比如说flex在移动端兼容性如？其实已经很好了。

### 最后还有一个叫文档流的概念，这个必须会

## 你对vue的源码了解吗，给我讲讲双向绑定原理怎么实现的，详细描述什么时候监听变化的，什么时候触发变化的？

### 我所理解的双向数据绑定无非就是在单向数据绑定的基础上给可输入元素，比如input和textarea添加监听事件来动态修改model和view，其最核心的方法就是通过Object.defineProperty()来实现对对属性的劫持，达到监听数据变化的目的。

### 要实现mvvm双向数据版绑定， 我觉得需要实现以下几点：

1. 实现一个数据监听器Observer,能够对数据对象的所有属性进行监听，如有变动可以拿到最新值并通知订阅者。
2. 实现一个指令解析器Compiler，对每个元素节点的指令扫描并解析，根据指令模板替换数据，并且绑定相应的更新函数。
3. 实现一个watcher，其作为连接Observer和Compiler的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的回调函数从而更新视图
4. MVVM作为入口函数，整个以上三者

![](https://user-gold-cdn.xitu.io/2018/11/7/166ee59c4de8835f?w=720&h=382&f=jpeg&s=43848)

## 如何比较两个颜色的相似程度？

### rgb(255,128,100)可以用正则表达式取出对应的r/g/b值。对于16进制字符串，可以使用parseInt('0xaa')转10进制整数。然后对于两个颜色，可以使用距离 Math.sqrt( (r1-r2) *(r1-r2) +(g1-g2)*(g1-g2)+(b1-b2)*(b1-b2) )进行比较， 距离近则相似。 当然可以用Math.hypot( r1-r2, g1-t2, b1-b2) 来简化上述运算。

### 这道题目主要考察学员的知识积累和思考。 首先要知道rgb是颜色的组成。 然后要给出一种可行的比较方法。 最后要考察具体javascript细节函数的运用。

## 单页面跳转问题？

### 一个单页面应用，有6张页面，F、E、A、B、C、D。 页面ABCD构成了一个冗长的用户验证过程。目前A、B、C对应用户验证过程的第1步，第2步，第3步。 页面F是首页，E是某张业务相关页面。用户到达页面E后，系统发现用户没有认证，触发验证流程，到达页面A，然后开始A->B->C->D流程。 页面D是验证结果页面（验证成功页面）。 请问，如果到达页面D后，如何让用户点击返回可以返回页面F，而忽略中间流程（注：用户可能根本没有到达过F，比如微信分享直接进入了E）。

### 补充下： 场景是上述场景，最好能做到到达页面D后，浏览器自然返回是F，再按返回，单页面系统退出；另外请思考下各个流程如何实现流畅切换，不会有中间闪烁的页面。

### 这个问题初一看是对单页面路由架构的考察。也是一个很好的引入问题，可以考察非常多方面。 比如说：如何实现页面切换动画？ A、B、C都是表单的话，如何缓存用户输入完成的表单数据？……回到问题，因为history api提供了push/pop/replace三种操作，无论是其中的任何一种都无法实现上述的效果。 一个路由系统，首先要监听浏览器地址的变化，然后根据变化渲染不同的页面。1. 在页面到达D后，关闭对路由变化页面渲染的监听。 2. 路由系统要进行多次POP，可以用history.go(-n)实现； 3. 路由栈清空到只剩下一张页面时，将这张页面替换为F。 4. PUSH一张页面D。 5. 如果在HTML上有一个类似「轮播图」的设计，就是每一张页面是一张轮播图，将轮播图设置成只有「F」和「D」。 5. 恢复路由监听。 这个问题的另一个考点是，在上述完整的计算过程当中，需要知道当前历史记录中的页面数，页面数可以通过localStorage实现，在ls中维护一个变量，每次push的时候+1，并写入history.state。 POP的时候读取history.state将变量重置。

## 一个无序正负项 数组，eg:[3, -6, 123, -945, -231, 112]找出其中的最大的连续子序列有如下乱序数组 A1, A2, A3, A4,........An, 求 i, j (1<= i <= j<= n), 使得Ai +  .... + Aj 和最大, 输出i j


```js
第一层  i (0 ~ length - 1)
 currentSum 清零
       第二层 j (i ~ length - 1)
              currentSum 累加
              maxSum = maxSum < currentSum ? currentSum : maxSum

return maxSum
```

```js
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let dpCurrent = nums[0];
  for (let i = 1; i < nums.length; i++) {
      dpCurrent = Math.max(nums[i], nums[i] + dpCurrent);
      maxSum = Math.max(maxSum, dpCurrent);
  }
  return maxSum;
};
```

## 电商网站A和电影票网站B合作，A的用户，可以通过A网站下单购买电影票，之后跳转跳转到B（不需要登录）去选座位。 如果A、B是同域名，比如a.domain.com,b.domain.com能不能共享cookie?如果不同域如何处理？

- 如果是同一级域名下的可以设置cookie的domain为.domain.com
- 如果不同域名就需要A跳到另一个验证页面获取token，讲token带入B网站，然后再B网站进行一系列的验证

## 请说说什么是XSS?如何攻击？如何防御?

### XSS是什么？

* 跨网站指令码（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。
* XSS 分为三种：反射型，存储型和 DOM-based

### 如何攻击

* XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。例如通过 URL 获取某些参数
* 上述 URL 输入可能会将 HTML 改为 `<div><script>alert(1)</script></div> `，这样页面中就凭空多了一段可执行脚本。这种攻击类型是反射型攻击，也可以说是 DOM-based 攻击。
* 也有另一种场景，比如写了一篇包含攻击代码 `<script>alert(1)</script> `的文章，那么可能浏览文章的用户都会被攻击到。这种攻击类型是存储型攻击，也可以说是 DOM-based 攻击，并且这种攻击打击面更广。

### [各种css攻击类型](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)

### cookie塞爆 打不开网站

### css攻击

```css
body {
  background-image: url('javascript:alert("XSS");')
}
```

## 函数防抖与节流

![](https://user-gold-cdn.xitu.io/2018/8/4/1650085bf3d34392?w=3536&h=2456&f=jpeg&s=480213)

* 聚合运算还有`arr.reduce`和`arr.join`，map不算
* 节流和防抖是针对`时序信号`的两类聚合运算，除此之外还有很多的类似聚合运算，比如合并和缓冲。 
* 函数截流和函数防抖是针对函数调用时序信号的聚合运算，通常使用高阶函数实现。
* 函数截流可以让目标函数在相等的时间窗口内只响应一次，函数防抖让目标函数在高频调用的情况下只触发一次，从而达到限流的目的。
* 截流和防抖在拥有大量时序信号的场景中发挥重要的作用，比如消息、动画、日志监控、网络安全等等。
* 截流是一个时间段发生的N件事聚合成1件，防抖是一个固定频率发生的事件如果在这个频率周期内再次发生了，就以后一个的频率周期为准聚合成一个。

* 滑动不适合节流，因为动画需要流畅。懒加载可以使用节流

* 主要的库是[Rxjs](https://github.com/Reactive-Extensions/RxJS)和[xstream](https://github.com/staltz/xstream)

### 防抖

> 对于按钮防点击来说的实现：一旦我开始一个定时器，只要我定时器还在，不管你怎么点击都不会执行回调函数。一旦定时器结束并设置为 null，就可以再次点击了。 

![](https://user-gold-cdn.xitu.io/2018/8/3/165007b655828629?w=594&h=795&f=png&s=35797)

### 节流

> 对于延时执行函数来说的实现：每次调用防抖动函数都会判断本次调用和之前的时间间隔，如果小于需要的时间间隔，就会重新创建一个定时器，并且定时器的延时为设定时间减去之前的时间间隔。一旦时间到了，就会执行相应的回调函数。

```js
// 节流
// 防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      回调函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return {function}             返回客户调用函数   
 */
_.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 之前的时间戳
    var previous = 0;
    // 如果 options 没传则设为空对象
    if (!options) options = {};
    // 定时器回调函数
    var later = function() {
      // 如果设置了 leading，就将 previous 设为 0
      // 用于下面函数的第一个 if 判断
      previous = options.leading === false ? 0 : _.now();
      // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      // 获得当前时间戳
      var now = _.now();
      // 首次进入前者肯定为 true
   // 如果需要第一次不执行函数
   // 就将上次时间戳设为当前的
      // 这样在接下来计算 remaining 的值时会大于0
      if (!previous && options.leading === false) previous = now;
      // 计算剩余时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      // 如果当前调用已经大于上次调用时间 + wait
      // 或者用户手动调了时间
    // 如果设置了 trailing，只会进入这个条件
   // 如果没有设置 leading，那么第一次会进入这个条件
   // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
   // 其实还是会进入的，因为定时器的延时
   // 并不是准确的时间，很可能你设置了2秒
   // 但是他需要2.2秒才触发，这时候就会进入这个条件
      if (remaining <= 0 || remaining > wait) {
        // 如果存在定时器就清理掉否则会调用二次回调
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        // 判断是否设置了定时器和 trailing
     // 没有的话就开启一个定时器
        // 并且不能不能同时设置 leading 和 trailing
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
```


## CSRF攻击是什么？如何防范？ 

> 跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。[1] 跟跨網站指令碼（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。简单点说，CSRF 就是利用用户的登录态发起恶意请求。


### 如何攻击

> 假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口

```html
<img src="http://www.domain.com/xxx?comment='atttack'"/>
```

> 如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口

```html
<form action="http://www.domain.com/xxx" id="CSRF" method="post">
  <input name="comment" value="attack" type="hidden"/>
</form>  
```

### 如何防御

### 防范 CSRF 可以遵循以下几种规则：

* Get 请求不对数据进行修改
* 不让第三方网站访问到用户 Cookie
* 阻止第三方网站请求接口
* 请求时附带验证信息，比如验证码或者 token

### SameSite

> 可以对 Cookie 设置 SameSite 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。

### 验证 Referer

> 对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。

### Token

> 服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。

## 如果发现在某个用户的电脑上，网站的静态资源打不开了，如何确定是CDN的问题还是那个用户机器、浏览器的问题？ 

![](https://user-gold-cdn.xitu.io/2018/11/7/166ee5949b4ee175?w=1488&h=540&f=png&s=109872)

## 在hybird端想实现类似原生般的流畅，需要注意什么？

![](https://user-gold-cdn.xitu.io/2018/11/7/166ee5affad36af1?w=1080&h=1082&f=jpeg&s=121476)

## 请说说浏览器事件机制中事件触发三个阶段？

> [大佬的](https://segmentfault.com/a/1190000003482372)

### 事件触发三阶段

- 事件触发有三个阶段`(捕获、目标、冒泡)`
- document 往事件触发处传播，遇到注册的捕获事件会触发
- 传播到事件触发处时触发注册的事件
- 从事件触发处往 document 传播，遇到注册的冒泡事件会触发
- 事件触发一般来说会按照上面的顺序进行，但是也有特例，如果给一个目标节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。

```js
// 以下会先打印冒泡然后是捕获
node.addEventListener('click',(event) =>{
 console.log('冒泡')
},false);
node.addEventListener('click',(event) =>{
 console.log('捕获 ')
},true)
```

### 注册事件

- 通常我们使用 addEventListener 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 useCapture 参数来说，该参数默认值为 false 。useCapture 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性
- capture，布尔值，和 useCapture 作用一样
- once，布尔值，值为 true 表示该回调只会调用一次，调用后会移除监听
- passive，布尔值，表示永远不会调用 preventDefault
- 一般来说，我们只希望事件只触发在目标上，这时候可以使用 stopPropagation 来阻止事件的进一步传播。通常我们认为 stopPropagation 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。stopImmediatePropagation 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。

```js
node.addEventListener('click',(event) =>{
 event.stopImmediatePropagation()
 console.log('冒泡')
},false);
// 点击 node 只会执行上面的函数，该函数不会执行
node.addEventListener('click',(event) => {
 console.log('捕获 ')
},true)
```

### 事件代理

- 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上

```html
<ul id="ul">
 <li>1</li>
    <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
</ul>
<script>
 let ul = document.querySelector('###ul')
 ul.addEventListener('click', (event) => {
  console.log(event.target);
 })
</script>
```

- 事件代理的方式相对于直接给目标注册事件来说，有以下优点
- 节省内存
- 不需要给子节点注销事件
- 触发在冒泡上

## 重绘和回流

1. 什么是重绘（Repaint）和回流（Reflow）？
2. 哪些动作可能会导致重绘（Repaint）和回流（Reflow）的发生？
3. 重绘（Repaint）和回流（Reflow）和Event loop的关系？
4. 如何减少重绘（Repaint）和回流（Reflow）？

### 重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。

1. 重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
2. 回流是布局或者几何属性需要改变就称为回流。

### 回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

> 所以以下几个动作可能会导致性能问题：

- 改变 window 大小
- 改变字体
- 添加或删除样式
- 文字改变
- 定位或者浮动
- 盒模型

### 很多人不知道的是，重绘和回流其实和 Event loop 有关。

- 当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。
- 然后判断是否有 resize 或者 scroll ，有的话会去触发事件，所以 resize 和 scroll 事件也是至少 16ms 才会触发一次，并且自带节流功能。
- 判断是否触发了 media query
- 更新动画并且发送事件
- 判断是否有全屏操作事件
- 执行 requestAnimationFrame 回调
- 执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
- 更新界面
- 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调。

### 少重绘和回流

- 使用 translate 替代 top

```html
<div class="test"></div>
<style>
 .test {
  position: absolute;
  top: 10px;
  width: 100px;
  height: 100px;
  background: red;
 }
</style>
<script>
 setTimeout(() => {
        // 引起回流
  document.querySelector('.test').style.top = '100px'
 }, 1000)
</script>
```

- 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
- 把 DOM 离线后修改，比如：先把 DOM 给 display:none (有一次 Reflow)，然后你修改100次，然后再把它显示出来
- 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量

```js
for(let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
```

- 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
- CSS 选择符从右往左匹配查找，避免 DOM 深度过深
- 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。

## https抓包

- https抓包的原理是什么？
- 平时你用什么工具？如何抓包？

### https执行过程

1. 客户端发送一个请求给服务端
2. 服务端收到客户端请求后将公钥传回客户端
3. 然后客户端验证公钥是否可信（预装来自公正机构的根证书来验证）
4. 如果公钥可信，客户端会生成一个密码，用服务端公钥加密后返回服务端
5. 服务端接收到由自己公钥加密的密码后，进行私钥解密，然后两端用对称加密（比非对称加密快）的方式传输
6. 之后每次客户端发送请求都会生成新的对称加密的密码，服务端通过这个密码来传输

### 抓包原理（charles）

1. 基于以上抓包工具只有一种方式帮助抓包
2. 抓包工具让客户端安装自己的证书，也就是它们伪装成一个https的服务端，当客户端项目标网站发送请求时，https请求先访问到了抓包工具，
3. 之后抓包工具使用自己的公钥和私钥与目标网站再建立一个https的通信，于是抓包工具就变成了消息的中转站实现抓包。
4. 抓包的前提是获得用户的信任，所以如果黑客想要通过这种方式来hack，就无法获得用户的信任

## 无头浏览器

- 什么是无头浏览器？
- 它的作用是什么？

[](https://blog.csdn.net/weixin_33768153/article/details/81183577)
[](https://zhuanlan.zhihu.com/p/33444230)

- 比真实浏览器更快
  - 由于无头测试不需要启动浏览器的GUI界面，所以你可以绕过真正浏览的加载CSS、JavaScript和打开、绘制HTML的所有环节。
- 抓取数据更加方便
  - 如果没有无头测试工具的话，在抓取页面数据时，你需要打开一个浏览器，输入页面地址，找到指定的页面数据。而有了无头测试工具之后，这一切操作都可以自动化完成。
- 便于构建自动化测试脚本
  - 你可以利用无头测试工具和js的测试框架（如mocha、jasmin、karma等）轻松地进行前端页面的单元测试。因为你可以利用无头测试工具提供的命令行+api来自动化地替代大量的简单重复操作，如输入页面地址、刷新页面、表单提交、确认显示数据是否正确等等。
- 轻松模拟多个浏览器
  - 在非自动化的测试流程中，测试人员为了能在不同浏览器（不同内核、不同尺寸）上确认页面的表现与运行是否正常，不得不来回切换浏览器，移动端测试还不得不切换机型。如果有了无头测试则可以轻松通过api和配置项来控制当前浏览器的属性。此外，你也可以通过脚本进行并发测试。

## v8垃圾回收机制

- v8下的垃圾回收机制

> V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。

### 新生代算法

- 新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。
- 在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。

### 老生代算法

- 老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是标记清除算法和标记压缩算法。
- 在讲算法前，先来说下什么情况下对象会出现在老生代空间中：
- 新生代中的对象是否已经经历过一次 Scavenge 算法，如果经历过的话，会将对象从新生代空间移到老生代空间中。
- To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。
- 老生代中的空间很复杂，有如下几个空间

```js
enum AllocationSpace {
  // TODO(v8:7464): Actually map this space's memory as read-only.
  RO_SPACE,    // 不变的对象空间
  NEW_SPACE,   // 新生代用于 GC 复制算法的空间
  OLD_SPACE,   // 老生代常驻对象空间
  CODE_SPACE,  // 老生代代码对象空间
  MAP_SPACE,   // 老生代 map 对象
  LO_SPACE,    // 老生代大空间对象
  NEW_LO_SPACE,  // 新生代大空间对象

  FIRST_SPACE = RO_SPACE,
  LAST_SPACE = NEW_LO_SPACE,
  FIRST_GROWABLE_PAGED_SPACE = OLD_SPACE,
  LAST_GROWABLE_PAGED_SPACE = MAP_SPACE
};
```

#### 在老生代中，以下情况会先启动标记清除算法：

- 某一个空间没有分块的时候
- 空间中被对象超过一定限制
- 空间不能保证新生代中的对象移动到老生代中

> 在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型对内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行，你可以点击 该博客 详细阅读。
**清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。**

## 线性顺序存储结构和链式存储结构有什么区别？以及优缺点

### 顺序存储结构和链式存储结构的区别

- 链表存储结构的内存地址不一定是连续的，但顺序存储结构的内存地址一定是连续的；
- 链式存储适用于在较频繁地插入、删除、更新元素时，而顺序存储结构适用于频繁查询时使用。

### 顺序存储结构和链式存储结构的优缺点：

- 空间上：顺序比链式节约空间。是因为链式结构每一个节点都有一个指针存储域。
- 存储操作上：顺序支持随机存取，方便操作
- 插入和删除上：链式的要比顺序的方便（因为插入的话顺序表也很方便，问题是顺序表的插入要执行更大的空间复杂度，包括一个从表头索引以及索引后的元素后移，而链表是索引后，插入就完成了）
- 例如：当你在字典中查询一个字母j的时候，你可以选择两种方式，第一，顺序查询，从第一页依次查找直到查询到j。第二，索引查询，从字典的索引中，直接查出j的页数，直接找页数，或许是比顺序查询最快的。

## 请说说你对执行 JS 代码时产生的执行上下文的理解

### 当执行 JS 代码时，会产生三种执行上下文

- 全局执行上下文
- 函数执行上下文
- eval 执行上下文

### 每个执行上下文中都有三个重要的属性

- 变量对象（VO），包含变量、函数声明和函数的形参，该属性只能在全局上下文中访问
- 作用域链（JS 采用词法作用域，也就是说变量的作用域是在定义时就决定了）
- this

```js
var a = 10
function foo(i) {
  var b = 20
}
foo()

// 对于上述代码，执行栈中有两个上下文：全局上下文和函数 foo 上下文。

stack = [
    globalContext,
    fooContext
]

// 对于全局上下文来说，VO 大概是这样的

globalContext.VO === globe
globalContext.VO = {
    a: undefined,
 foo: <Function>,
}

// 对于函数 foo 来说，VO 不能访问，只能访问到活动对象（AO）

fooContext.VO === foo.AO
fooContext.AO {
    i: undefined,
 b: undefined,
    arguments: <>
}
// arguments 是函数独有的对象(箭头函数没有)
// 该对象是一个伪数组，有 `length` 属性且可以通过下标访问元素
// 该对象中的 `callee` 属性代表函数本身
// `caller` 属性代表函数的调用者

// 对于作用域链，可以把它理解成包含自身变量对象和上级变量对象的列表，通过 [[Scope]] 属性查找上级变量

fooContext.[[Scope]] = [
    globalContext.VO
]
fooContext.Scope = fooContext.[[Scope]] + fooContext.VO
fooContext.Scope = [
    fooContext.VO,
    globalContext.VO
]
// 接下来让我们看一个老生常谈的例子，var

b() // call b
console.log(a) // undefined

var a = 'Hello world'

function b() {
 console.log('call b')
}
```

### 想必以上的输出大家肯定都已经明白了，这是因为函数和变量提升的原因。通常提升的解释是说将声明的代码移动到了顶部，这其实没有什么错误，便于大家理解。但是更准确的解释应该是：在生成执行上下文时，会有两个阶段。

- 第一个阶段是创建的阶段（具体步骤是创建 VO），JS 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 undefined.
- 所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

```js
b() // call b second

function b() {
 console.log('call b fist')
}
function b() {
 console.log('call b second')
}
var b = 'Hello world'
```

### var 会产生很多错误，所以在 ES6中引入了 let。let 不能在声明前使用，但是这并不是常说的 let 不会提升，let 提升了声明但没有赋值，因为临时死区导致了并不能在声明前使用。对于非匿名的立即执行函数需要注意以下一点

```js
var foo = 1
(function foo() {
    foo = 10
    console.log(foo)
}()) // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

### 因为当 JS 解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 foo，但是这又个值是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。

```js
specialObject = {};
 
Scope = specialObject + Scope;
 
foo = new FunctionExpression;
foo.[[Scope]] = Scope;
specialObject.foo = foo; // {DontDelete}, {ReadOnly}
 
delete Scope[0]; // remove specialObject from the front of scope chain
```

## 什么是Service Worker?如何使用?

- Service workers 本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步API。
- 目前该技术通常用来做缓存文件，提高首屏速度，可以试着来实现这个功能。

```js
// index.js
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function(registration) {
      console.log("service worker 注册成功");
    })
    .catch(function(err) {
      console.log("servcie worker 注册失败");
    });
}
// sw.js
// 监听 `install` 事件，回调中缓存所需文件
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("my-cache").then(function(cache) {
      return cache.addAll(["./index.html", "./index.js"]);
    })
  );
});

// 拦截所有请求事件
// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        return response;
      }
      console.log("fetch source");
    })
  );
});
```

**打开页面，可以在开发者工具中的 Application 看到 Service Worker 已经启动了,在 Cache 中也可以发现我们所需的文件已被缓存**

## 你在项目中如何进行 Webpack 优化?

1. 缩小文件搜索范围,配置比如resolve.modules,resolve.modules,resolve.mainFields,resolve.alias ,resolve.extensions ,module.noParse 配置
2. 使用DllPlugin 要给 Web 项目构建接入动态链接库
3. HappyPack 就能让 Webpack 做到这点，它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程
4. 当 Webpack 有多个 JavaScript 文件需要输出和压缩时，原本会使用 UglifyJS 去一个个挨着压缩再输出， 但是 ParallelUglifyPlugin 则会开启多个子进程，把对多个文件的压缩工作分配给多个子进程去完成
5. 可以监听文件的变化，当文件发生变化后可以自动刷新浏览器，从而提高开发效率。
6. (Hot Module Replacement)的技术可在不刷新整个网页的情况下做到超灵敏的实时预览。 原理是当一个源码发生变化时，只重新编译发生变化的模块，再用新输出的模块替换掉浏览器中对应的老模块。
7. Tree Shaking 可以用来剔除 JavaScript 中用不上的死代码。它依赖静态的 ES6 模块化语法，例如通过 import 和 export 导入导出
8. 可以使用CommonsChunkPlugin 把多个页面公共的代码抽离成单独的文件进行加载
9. Webpack 内置了强大的分割代码的功能去实现按需加载，可以用import实现路由按需加载。
10. Scope Hoisting 可以让 Webpack 打包出来的代码文件更小、运行的更快， 它又译作 "作用域提升"
11. 可以使用可视化分析工具 Webpack Analyse等去分析输出结果，从页进行优化.
12. 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
13. 优化图片，对于小图可以使用 base64 的方式写入文件中
14. 给打包出来的文件名添加哈希，实现浏览器缓存文件

## 请说一下ES6中 Generator 的实现原理?

> Generator 是 ES6 中新增的语法，和 Promise 一样，都可以用来异步编程

```js
// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
  let a = 1 + 2;
  yield 2;
  yield 3;
}
let b = test();
console.log(b.next()); // >  { value: 2, done: false }
console.log(b.next()); // >  { value: 3, done: false }
console.log(b.next()); // >  { value: undefined, done: true }
```

**从以上代码可以发现，加上 * 的函数执行后拥有了 next 函数，也就是说函数执行后返回了一个对象。每次调用 next 函数可以继续执行被暂停的代码。以下是 Generator 函数的简单实现**

```js
// cb 也就是编译过的 test 函数
function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      stop: function() {}
    };

    return {
      next: function() {
        var ret = cb(object);
        if (ret === undefined) return { value: undefined, done: true };
        return {
          value: ret,
          done: false
        };
      }
    };
  })();
}
// 如果你使用 babel 编译后可以发现 test 函数变成了这样
function test() {
  var a;
  return generator(function(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        // 可以发现通过 yield 将代码分割成几块
        // 每次执行 next 函数就执行一块代码
        // 并且表明下次需要执行哪块代码
        case 0:
          a = 1 + 2;
          _context.next = 4;
          return 2;
        case 4:
          _context.next = 6;
          return 3;
  // 执行完毕
        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}
```

## 什么是IFC?IFC的作用是什么？

[☺️](https://segmentfault.com/a/1190000009545742)

## 请说说cookie，localStorage，sessionStorage，indexDB之间的区别的使用场景?

![这里！](https://blog.csdn.net/qq_29132907/article/details/80389398)

![](https://user-gold-cdn.xitu.io/2018/11/7/166ee63afab563bf?w=774&h=392&f=png&s=33002)

![](https://user-gold-cdn.xitu.io/2018/11/7/166ee63ca9522171?w=667&h=251&f=png&s=15980)

## 讲讲输入完网址按下回车，到看到网页这个过程中发生了什么?

[这里！](https://segmentfault.com/a/1190000010298038)

## 前端性能优化

[首先是雅虎军规](https://www.cnblogs.com/xianyulaodi/p/5755079.html)

> 瘦身 压缩 css sprite 延迟加载（主要针对图片） 按需加载（主要针对首屏未用到的UI） 缓存CDN 预加载

## IP协议属于哪一层？主要功能是干什么的？

> IP协议对应于OSI标准模型的网络层。 IP协议的主要功能－用途：在相互连接的网络之间传递IP数据报。其中包括两个部分：

 1. 寻址与路由。 (a)用IP地址来标识Internet的主机：在每个IP数据报中，都会携带源IP地址和目标IP地址来标识该IP数据报的源和目的主机。IP数据报在传输过程中，每个中间节点(IP 网关)还需要为其选择从源主机到目的主机的合适的转发路径(即路由)。IP协议可以根据路由选择协议提供的路由信息对IP数据报进行转发，直至抵达目的主机。 (b)IP地址和MAC地址的匹配，ARP协议。数据链路层使用MAC地址来发送数据帧，因此在实际发送IP报文时，还需要进行IP地址和MAC地址的匹配，由TCP/IP协议簇中的ARP(地址解析协议)完成。

 2. 分段与重组。 (a) IP数据报通过不同类型的通信网络发送，IP数据报的大小会受到这些网络所规定的最大传输单元(MTU)的限制。 (b)将IP数据报拆分成一个个能够适合下层技术传输的小数据报，被分段后的IP数据报可以独立地在网络中进行转发，在到达目的主机后被重组，恢复成原来的IP数据报。

## js 中的 new()到底做了些什么?

### 参考答案:
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

当代码 new Foo(...)执行时，会发生以下事情：

一个继承自 Foo.prototype 的新对象被创建。

使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。

由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤 1 创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

```javascript
var cat = new Animal("cat");
new Animal("cat") = {
    var obj = {};
    obj.__proto__ = Animal.prototype;
    var result = Animal.call(obj,"cat");
    return typeof result === 'object'? result : obj;
}
```
1. 创建一个空对象 obj;
2. 把 obj 的 `__proto__` 指向 Animal 的原型对象 prototype，此时便建立了 obj 对象的原型链：obj->Animal.prototype->Object.prototype->null
3. 在 obj 对象的执行环境调用 Animal 函数并传递参数“cat”。 相当于 `var result = obj.Animal("cat")`。当这句执行完之后，obj 便产生了属性name 并赋值为"cat"。【关于 JS 中 call 的用法请阅读：JS 的 call 和 apply】
4. 考察第 3 步返回的返回值，如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；否则会将返回值作为新对象返回。


### 参考资料:
- [JS 的 call 和 apply](https://github.com/lin-xin/blog/issues/7)

## 下面是一个bind方法的Polyfill,请逐句给别人讲解一下每一行代码的含义

```js
 Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    if (this.prototype) {
      fNOP.prototype = this.prototype; 
    }
    fBound.prototype = new fNOP();
    return fBound;
};
```

### 参考资料:

- [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## 你的移动端适配怎么做的？

### 媒体查询

其实媒体查询方式除了类似bootstrap之类的基础类库 很少在真实项目中使用

### 百分比+px

百分比+px方式对于适配开发者来说最容易 但是自适应性比较差 demo小项目用下还可以 我自己在小项目也会使用

### rem(比较主流)

rem方式是目前比较主流的
知名的方案有淘宝的flexible 基本原理是将页面宽度分成10份 但是这时候页面的rem大小已经没法口算了 需要接入postcss之类的构建工具才能够使用
待vw单位兼容性渐渐不那么严重了 就可以使用vw替代flexible vw是将页面分成100份 基本思路是一致的

另外一种rem布局思路是在默认设计稿尺寸的时候设置根元素font 为100px或者50px 好处是rem值可以根据设计稿标注口算 但是不会兼容vw了 看怎么取舍

那么rem vw 就没有问题吗？不是的！ rem 还是 vw 在使用额时候都会出现小数点 小数点会造成精度缺失 在雪碧图或者其他极端精确像素的场景 总会出现裁剪错误 同时rem不适合用在文字大小上 文字大小用px会更合适

### vw

拓展阅读：
vw布局：[https://www.w3cplus.com/css/vw-for-layout.html](https://www.w3cplus.com/css/vw-for-layout.html)


### 参考资料:

张巍耀老师总结的一些文章：

1. [移动端屏幕像素的那些事](https://mp.weixin.qq.com/s/y2kzv5S2TvkMwgwZPbSyKA)

2. [再说viewport](https://mp.weixin.qq.com/s/DFOrEUsVqmujHW7tADsH0g)

3. [移动端下的1px](https://mp.weixin.qq.com/s/N2vRHKOE9WH_TAtwBaiX_Q)

4. [移动端REM方案-Flexible源码分析](https://mp.weixin.qq.com/s/ALXtRYIsaFM4FPEj3zwKqQ)

5. 张巍耀老师基于flexible的rem解决方案(在上一个部门支撑了基本所有的SPA和多页面网页，对PC端、iPad、Android缩放等问题都进行了特殊处理)：[rem-moka] (https://github.com/geeknull/rem-moka)
本来rem-moka我也写了一篇源码解析文章，只不过还没来记得发，大家有兴趣可以看看源码

## 请说一下在JS中this的完整取值规则?

### 参考答案:

1. this跟函数在哪里定义没有关系，函数在哪里调用才决定了this到底引用的是啥
2. this机制的四种规则
  - 默认绑定全局变量,这条规则是最常见的，也是默认的。当函数被单独定义和调用的时候，应用的规则就是绑定全局变量。
  - 隐式绑定 隐式调用的意思是，函数调用时拥有一个上下文对象，就好像这个函数是属于该对象的一样
  - 显示绑定 学过bind()\apply()\call()函数的都应该知道，它接收的第一个参数即是上下文对象并将其赋给this。
  - new新对象绑定 如果是一个构造函数，那么用new来调用，那么绑定的将是新创建的对象

## 请说一下谈谈JS中的垃圾回收机制？

### 参考答案:

- V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。

### 新生代算法

> 新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。

### 老生代算法

> 老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是标记清除算法和标记压缩算法。
在讲算法前，先来说下什么情况下对象会出现在老生代空间中：新生代中的对象是否已经经历过一次 Scavenge 算法，如果经历过的话，会将对象从新生代空间移到老生代空间中。To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。

### 在老生代中，以下情况会先启动标记清除算法：

> 某一个空间没有分块的时候,空间中被对象超过一定限制,空间不能保证新生代中的对象移动到老生代中
在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型对内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行。清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。

## 什么是深拷贝和浅拷贝？如何实现深拷贝?

[这里！](https://www.haorooms.com/post/js_copy_sq)

## 原型是什么？原型链是什么？用你的语言把下面这张图讲解清楚

![prototype](http://img.zhufengpeixun.cn/prototype.png)

### 参考答案:

- 每个函数都有 prototype 属性，除了 Function.prototype.bind()，该属性指向原型。
- 每个对象都有 __proto__ 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 _proto_ 来访问。
对象可以通过 __proto__ 来寻找不属于该对象的属性，__proto__ 将对象连接起来组成了原型链。
如果你想更进一步的了解原型，可以仔细阅读 深度解析原型中的各个难点。

### 参考资料:

[深度解析原型](https://github.com/KieSun/Blog/issues/2)

## 请说一下Vue的NextTick的原理?

[这里！](https://juejin.im/entry/5aced80b518825482e39441e)

## 请说说Vue的完整生命周期?

[这里！](https://juejin.im/post/5afd7eb16fb9a07ac5605bb3)
---
title: 日计划
---

# 11.7

- 文浩的小项目有小bug
- taro发布1.1版本
- 将阿里面试题整理了一番
- 复习vue源码，vue-router源码，SSR，setState，防抖与节流，webpack源码解析，react，redux，saga，dva源码，webpack-dev源码，webpack异步chunk原理，promise原理，async原理（重写后的co），浏览器渲染路径优化,dom-diff,immutable,react-dom。
- node深入浅出（21）
- babel，preset-env（entry，false，usage），plugin-transform-runtime
- splitChunks chunks（inital，async，all）
- immutable
- git的使用

# 11.8

- git学习（gittest）
- pr尝试
- webpack源码

# 11.9

- git学习（gittest）

# 11.10

- git学习（gittest）pr code-exam

# 11.11

- https://zhuanlan.zhihu.com/p/34702356 delete require.cache[]?
- 阿里云node.js性能检测工具
- webpack-esnext-cli-master

# 11.12

- 基于 webpack 的持久化缓存方案 https://github.com/pigcan/blog/issues/9 https://github.com/jiangjiu/blog-md/issues/49
- webpack-esnext-cli-master

# 11.13

- 掘金小册(webpack)
- delete并不能删掉引用对象中的key
- webpack sideEffects

# 11.14

- tree shaking
- 掘金小册(webpack)
- Medium
- IaaS,PaaS和SaaS，QPS,RT和TPS，PV,UV和IP到底是什么意思？https://mp.weixin.qq.com/s/4VrllP4QKbdgSnuNEve4Iw

# 11.15

- libuv
- 图片埋点

# 11.18

- 正则，珠峰视频
- webpack源码解析 https://lancelou.com/post/webpack-contributors-guide-part123 
- require源码阅读 https://segmentfault.com/a/1190000014026915#articleHeader4

# 11.19

- 算法1
- 正则

# 11.20

- 正则，珠峰视频
- 算法2

# 11.21

- 正则pdf
- nodejs性能优化 https://juejin.im/entry/5bee3b5d6fb9a04a082140d2?utm_source=gold_browser_extension
  - 1、使用最新版本的Node
  - 2、使用 fast-json-stringify 加速 JSON 序列化
  - 3、可以在代码中把全局的 Promise 换为 bluebird 的实现
  - 4、

# 11.26

- tree-shaking

# 11.27

- proxy reflect https://juejin.im/post/5b7aa257e51d4538c86cf6bb

# 11.28

- preload prefetch precontent https://juejin.im/post/5b5984b851882561da216311
- 输入url发生了什么 reflow repaint 增量异步reflow dirty2种 https://segmentfault.com/a/1190000010298038
- serviceWork在SSR中的应用 https://zhuanlan.zhihu.com/p/31630322
  - 用户首次访问站点，首屏由服务端渲染，后续路由前端跳转。ServiceWorker 开始首次安装。过程中请求预缓存列表中的静态资源和 /appshell 路由，缓存 App Shell 页面。
  - 用户后续访问，刷新页面都不会到达服务端，请求被 ServiceWorker 拦截，统一返回之前缓存的 App Shell 页面，由前端渲染具体内容。
- 跨域多种方式
  - jsonp，通过script能跨域，可以生成一个script标签src为url后面加上query，可以放入自定义的cb方法在服务端执行。只有get，不安全
  - cors，通过服务器端设置响应抱文的Access-Control-Allow-Origin/Headers/Methods/Credentials/Max-Age/Expose-Header options预处理
  - postMessage，iframe跨域设置src，用ifram的contenWindow.postMessage发送消息，第二个参数为目标地址，iframe中的html可以使用window.onmessage监听再通过postMessage发送给原来的地址
  - http-proxy
  - domain，通过iframe设置src，在2个html中都设置window.domain就可以进行跨域
- jwt、session、cookie
  - jwt:通过后端登录使用jsonwebtoken包sign一个jwt返回给前端，前端放入localstorage，每次访问带上authorized，后端通过verify验证前端传过来的jwt是否正确，如果err，则失效或过期，也能判断解密出来的对象中是否有admin来处理权限问题
  - cookie，后端响应报文中返回Set-Cookie字段，设置cookie，可以设置domain，expires，path，Httponly，SameSite，中文需要编码
  - session，基于cookie的一种更安全的策略，由后端维护数据对应的key是cookie里的id，每次前端携带cookie访问，都会取到cookie里的值到session中匹配。
- 面试题 https://juejin.im/post/5befeb5051882511a8527dbe 
- session storage/pureComponent/setState/Component、Element/ajax为什么要在didComponent/map

# 11.29

- http Header
  - 范围请求
    - 客户端请求：range: bytes=0-5
    - 服务端响应:
        - Accept-Ranges: bytes
        - Content-Range: bytes 0-3/7877

  - 多语言
    - 客户端发的请求：Accept-Language: zh-CN,zh;q=0.9
    - 服务端的响应:content-language: zh-CN

  - referer refererred
    - 判断当前内容饮用的来源

  - 缓存
    - 强制缓存 cache-control:'max-age=10'/'no-cache' Expires:绝对时间
    - 对比缓存 服务端设置的：Etag 客户端自带的 if-none-match
    - Last-modified if-modified-since

  - host虚拟主机
    -  每次请求时都会带一个host 主机 ，通过不同的主机来判断访问的服务

  - 请求体的内容类型
    - content-type:'x-www-form-urlencoded'
    - content-type:'application/json'
    - content-type:'multiple/form-part'

  - compress服务端压缩
    转换流
    - Accept-Encoding: gzip, deflate, br
    - content-encoding: gzip

  - 命令行工具
    - 要判断当前我们的请求的路径是文件夹还是文件
    - 如果是文件就打开文件，如果是文件夹就列出文件夹的内容
    - http-server 
- md5: 文件内容决定结果，定长，不可逆
  - hmac算法：先通过key生成一个密钥，通过密钥加密解密
- http/tcp协议：https://juejin.im/post/5b6948255188251b3812968a
  - MTU最大的传输单元，如果大于MTU就会漏传
  - ARP协议，在局域网内找到MAC地址。如果DNS解析得到的IP地址找到路由发现不是局域网，就会去公网通过ISP找MAC地址
  - 网络号，通过IP和子网掩码相与得到，子网掩码为了能细分网络
  - 三次握手、四次挥手
    - 客：发送SYNA1
    - 服：发送ACKA2、SYNB1
    - 客：发送ACKB2

    - 客：发送FINC1
    - 服：发送ACKC2（此时半关闭，服务端能接受，客户端无法发送）
    - 服：发送FIND1
    - 客：发送ACKD2

- imutabble和pureComponent
  - pureComponent如果引用没变，数据变了，不会渲染。如果数据没变，引用变了，会造成不必要的渲染
  - imutabble数据共享和每次生成的对象都是不同的

- diff（tree diff、component diff、element diff） https://www.cnblogs.com/qingmingsang/articles/6238037.html
  - component diff会去查看shouldcomponentupdate是否需要diff，不需要就放到dirtyComponent中，并且创建新的component

- 在componentDidUpdate中获取异步数据可以等到DOM节点初始化完了
- React.Children.map(children,(child,index)=>{})

- 接口约定的返回结果的参数。s,m,r,c，接口的原子性：保证这个接口要么完整执行，要么都不执行。

- 在ajax请求后台数据时有时会报 HTTP 400 错误 - 请求无效 (Bad request);出现这个请求无效报错说明请求没有进入到后台服务里；
  - 原因：1）前端提交数据的字段名称或者是字段类型和后台的实体类不一致，导致无法封装；
       2）前端提交的到后台的数据应该是json字符串类型，而前端没有将对象转化为字符串类型；
- 406 Not Acceptable 状态码表示客户端错误，表示请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体。原因是一些搜索引擎的爬虫。

# 12.6 

- https://github.com/alienzhou/frontend-tech-list 前端学习清单
- koa、express整理
- egg学习

# 12.10

- QUIC(HTTP/3) https://www.cnbeta.com/articles/tech/796583.htm
  - 扩展了SPDY的多路复用，是交互更加顺畅，路由不阻塞
  - 移动端改变mac地址，不会影响socket(重新关闭)

# 12.11

- RPC https://blog.csdn.net/mindfloating/article/details/39474123
 - 同步调用
   - 客户方等待调用执行完成并返回结果。
 - 异步调用
   - 客户方调用后不用等待执行结果返回，但依然可以通过回调通知等方式获取返回结果。
   - 若客户方不关心调用返回结果，则变成单向异步调用，单向调用不用返回结果。
- 前端数据采集的渐进式思考 http://kms.netease.com/article/6485
  - 错误信息、性能监控、调试内容、埋点数据
- VConsole https://github.com/Tencent/vConsole
- eruda https://github.com/liriliri/eruda/blob/master/doc/README_CN.md

# 12.12

- npm dependence version http://blog.kankanan.com/article/package.json-65874ef6-dependencies-4e2d7684540479cd7248672c53f75f625f0f.html

- protobuffer https://halfrost.com/protobuf_encode/
  - 可以很容易地引入新的字段，并且不需要检查数据的中间服务器可以简单地解析并传递数据，而无需了解所有字段。
  - 数据格式更加具有自我描述性，可以用各种语言来处理(C++, Java 等各种语言)
  - 自动生成的序列化和反序列化代码避免了手动解析的需要。（官方提供自动生成代码工具，各个语言平台的基本都有）
  - 除了用于 RPC（远程过程调用）请求之外，人们开始将 protocol buffers 用作持久存储数据的便捷自描述格式（例如，在Bigtable中）。
  - 服务器的 RPC 接口可以先声明为协议的一部分，然后用 protocol compiler 生成基类，用户可以使用服务器接口的实际实现来覆盖它们。

# 12.17

- Array.apply(null,{length:20})
  - Array() === new Array()
  - https://segmentfault.com/a/1190000011435501
- prepublish、preinstall npm钩子 https://segmentfault.com/a/1190000008832423

# 12.18

- react服务器部署 https://segmentfault.com/a/1190000015685430
- git revert https://juejin.im/post/5b0e5adc6fb9a009d82e4f20

# 12.20

- nodejs最佳实践 https://github.com/i0natan/nodebestpractices/blob/master/README.chinese.md#1-project-structure-practices

# 12.22

- 多域名下的localstorage的跨域方案 https://www.jianshu.com/p/e86d92aeae69
  - sessionStorage的多页面共享方案 https://blog.kazaff.me/2016/09/09/%E8%AF%91-%E5%9C%A8%E5%A4%9A%E4%B8%AA%E6%A0%87%E7%AD%BE%E9%A1%B5%E4%B9%8B%E9%97%B4%E5%85%B1%E4%BA%ABsessionStorage/

# 12.23

- ts+React

# 1.4

- http://www.ayqy.net/blog/redux%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB/#articleHeader7
  - master-dev queue 相当于每次上车(subscribe)的时候，如果正好在(dispatch)开车，那只能赶下一班车，因为nextListeners(候车室)的引用是给车了。让车先带走这一车的人，在去下次(dispatch)开车的时候，去清空nextListeners(候车室)的引用
  - 下车的时候也不能跳车，因为直接操作的是新的引用，下趟车就不上了。
  - 双缓冲技术（double buffering），currentListeners用来缓存上一次的监听，每次subscribe都会从currentListeners.slice()一个新的数组，nextListeners，通过操作nextListeners来缓冲用户的行为
- https://juejin.im/post/5b193353f265da6e0d7a2dcd
  - 判断dirty是否为true，如果为false，则不进行$digest递归。
  - （dirty默认为true）遍历$$watchers，取出对应的属性值的老值和新值根据objectEquality进行新老值的对比。如果两个值不同，则继续往下执行。如果两个值相同，则设置dirty为false。检查完所有的watcher之后，如果dirty还为true（这一点需要阅读我下面的伪代码）
  - 设置dirty为true用新值代替老值，这样，在下一轮递归的时候，老值就是这一轮的新值再次调用$digest
- http://www.ayqy.net/blog/react-async-rendering/ Async Rendering
- https://zhuanlan.zhihu.com/p/26027085 React Fiber
- http://www.ayqy.net/blog/dive-into-react-fiber/ 详解fiber
  - 构建workInProgress tree的过程就是diff的过程，通过requestIdleCallback来调度执行一组任务，每完成一个任务后回来看看有没有插队的（更紧急的），每完成一组任务，把时间控制权交还给主线程，直到下一次requestIdleCallback回调再继续构建workInProgress tree
  ```
    DOM
        真实DOM节点
    -------
    effect
        每个workInProgress tree节点上都有一个effect list
        用来存放diff结果
        当前节点更新完毕会向上merge effect list（queue收集diff结果）
    - - - -
    workInProgress
        workInProgress tree是reconcile过程中从fiber tree建立的当前进度快照，用于断点恢复
    - - - -
    fiber
        fiber tree与vDOM tree类似，用来描述增量更新所需的上下文信息
    -------
    Elements
        描述UI长什么样子（type, props）
  ```
  - effect是patch阶段，处理effect list（包括3种处理：更新DOM树、调用组件生命周期函数以及更新ref等内部状态）
  - 出对结束，第2阶段结束，所有更新都commit到DOM树上了

# 1.6

- https://mp.weixin.qq.com/s/gMlJAOtFgUU1EqMbLAy35Q IOC依赖倒置、控制反转。把APP抽象出来，不关心实现，只关心约定。是面向接口编程，没有业务代码。更像是一个容器。

# 1.8

- https://www.tangshuang.net/3343.html webapck external
  - amd或者target: node，node:{global:flase}会默认使用require()导入
  - external默认string会使用global形式
  - 在node环境中使用external，就直接module.exports = require(jQuery)，不导入到bundle.js，但是能够直接在node环境中运行

# 1.9

- https://segmentfault.com/a/1190000014056810 koa上传、下载文件
- https://bbs.kaola.com/topic/7/webpack-%E9%95%BF%E7%BC%93%E5%AD%98-long-term-cache-%E7%9A%84%E4%B8%80%E4%BA%9B%E6%8E%A2%E7%B4%A2 webpack长缓存
- https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
  - npx cli 不会在你本地有存留
  - npx -p node@6 -- node -v 
  - npx gist
  - npx -p fortune -p cowsay -p lolcatjs -c 'echo | fortune | cowsay -f charizardvice.cow | lolcatjs'

# 1.14

- http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html Commonjs、ES6循环引用
- https://blog.csdn.net/suoyasong/article/details/80528218 css中“~”（波浪号）、“，”（逗号）、“+”（加号）和“>”（大于号）详解

# 1.17

- https://www.zhihu.com/question/301253397/answer/527408312 jwt
  - 我理解你的意思啦，你就是觉得jwt每次请求都要解密还原json，消耗性能。我是说只要加密的json内容不是很大，性能不成问题。如果json里面放入太多的信息不但加密解密费劲，而且每次http传输都是问题，因为jwt是自包含的。jwt对服务器的压力是随着请求次数成正比的。
  而session对服务器端的压力是随着用户量成正比的，即使用户不请求，只要session没有过期，就要维护这个回话。
  当10000个用户登录之后，但是当前只有100个用户是活跃的，你想想jwt和session之间的差别吧。session要维护这10000个会话题，而jwt只要响应这100个用户发送请求时候的解密。
  - 特别是当集群部署的时候，为了保证某一个服务的任何一个实例可用，session要在同一个服务的不同实例之间实时同步。当一个服务实例宕机，其它实力必须要有同样的这10000个session。
  - 注区分一下摘要和加密的不同，这是很多老鸟也容易犯错的地方。有一个最根本的区别就是，加密一定能完整还原出原始数据。因此像MD5、SHA1这种处理后结果长度固定的算法都是摘要算法。

# 1.19

- 网易前端大会二期
  - 资料待定

# 1.20

- https://github.com/hanzichi/underscore-analysis/issues/1 void 0
  - undefined是全局的变量，IE8下能被改变，在局部作用域也能被改变
  - void 后面不管跟什么都是返回undefined

# 1.21

- http://www.ruanyifeng.com/blog/2017/04/memory-leak.html js内存泄漏  
  - 引用计数，会有一张引用表对内存中所有的资源都有计数，计数为0的将会被垃圾回收。
  - 如果连续五次垃圾回收之后，内存占用一次比一次大，就有内存泄漏。这就要求实时查看内存占用。
  - node --expose-gc 表示允许手动执行垃圾回收机制
  - process.memoryUsage 返回node进程占用的资源信息
    - rss（resident set size）：所有内存占用，包括指令区和堆栈。
    - heapTotal："堆"占用的内存，包括用到的和没用到的。
    - **heapUsed：用到的堆的部分。**
    - external： V8 引擎内部的 C++ 对象占用的内存。
- https://zhuanlan.zhihu.com/p/25454328 weakMap学习
  - key只能是对象(弱引用)，不会被gc干扰，只有在主动回收时，会被回收，回收的同时weakMap值消失
  - 无法遍历，因为如果可枚举，其得到的结果将是不确定的
  - 作用1、私有：因为无法遍历，只有自己持有引用过来取值的时候才会拿到值
  - 作用2、省内存：手动回收key，weakmap所对应的value将会消失
  - 场景： 可以应用到其它的场景中，比如标记对象的状态（用于任务调度、错误处理等），比如为DOM元素添加额外的关联数据等等
  - webcomponents weakmap polyfill
  ```js
  if (typeof WeakMap === 'undefined') {
    (function() {
      var defineProperty = Object.defineProperty;
      var counter = Date.now() % 1e9;
      var WeakMap = function() {
        // 记录一个唯一的name属性
        this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__');
      };
      WeakMap.prototype = {
        // 在WeakMap的key对象中添加与WeakMap实例name相同的属性
        // 利用这个属性来保存value
        // 下面的API原理类似
        set: function(key, value) {
          var entry = key[this.name];
          if (entry && entry[0] === key)
            entry[1] = value;
          else
            defineProperty(key, this.name, {value: [key, value], writable: true});
          return this;
        },
        get: function(key) {
          var entry;
          return (entry = key[this.name]) && entry[0] === key ?
              entry[1] : undefined;
        },
        delete: function(key) {
          var entry = key[this.name];
          if (!entry || entry[0] !== key) return false;
          entry[0] = entry[1] = undefined;
          return true;
        },
        has: function(key) {
          var entry = key[this.name];
          if (!entry) return false;
          return entry[0] === key;
        }
      };
      window.WeakMap = WeakMap;
    })();
  }
  ```
- https://github.com/xizhibei/blog/issues/75  Node.js垃圾回收机制
  - 当内存使用上升过快来不及被回收，或者根本无法被回收的时候，Node.js 容易出现崩溃现象（OOM，即 Out of memory），这时候可以调整 node 的参数 --max-old-space-size，单位是 MB。
  - Buffer 既不是在 New Space 也不是在 Old Space，而是在 Node 的 C++ 层面申请的，大小不受 v8 的限制。
  - node --v8-options | grep gc 查看gc参数
- https://www.jianshu.com/p/4129a3fce7bb Node.js垃圾回收
  - 常驻内存分为(代码区(code segment)、栈(stack)、堆(heap)、堆外内存)
  - 栈的回收只需要作用域内栈的指针下移，整个作用域局部变量都会出栈，垃圾回收
  - 堆的回收最复杂，也是最容易出现内存泄漏的(OOM)
    - 堆内存上限，64位1.4G，32位0.7G，其中新生代64位占64M，32位占32M，可以通过
    ```js
    //更改老年代堆内存
    --max-old-space-size=3000 // 单位为MB
    // 更改新生代堆内存
    // 一般是64或128M，太大会导致新生代GC次数减少，但是GC时间过长
    --max-new-space-size= 128*1024 // 单位为KB
    ```
    - 老生代空间是新生代的40倍
    - scavenge算法是依次复制，在新生代中因为基本寿命都不长，所以scavenge算法效率高，且没有内存碎片，但是From和To空间对半分需要足够的空间复杂度
    - 老生代使用标记清除配合标记整理，老生代大不适合scavenge，所以需要标记清楚，标记活的清楚死的，随后内存会不连续，当需要一个大的内存空间存放对象，无法拿出，需要标记整理，把活的对象推往一边，只不过这个复杂度更大，不到万不得已v8不会用
    - 增量标记，每隔5ms标记一次，不会出现全停顿(stop-the-world)
    - 每一个闭包都会引用其外部函数的Context，以此访问需要读取的外部变量。被闭包捕捉，加入Context中的变量，我们称为Context变量，分配在堆。而真正的 局部变量（local variable）是 x ，保存在栈，当outer执行完毕后，其信息出栈，变量 x 自然销毁，而Context被闭包引用，如果有任何一个闭包存活，Context都将存活，y 将不会被销毁。
    ```js
    function outer () { 
        var x; // 真正的局部变量
        var y; // context variable, 被inner1使用
        var z; // context variable, 被inner2使用
        function inner1 () { 
          use(y); 
        } 
        function inner2 () { 
          use(z); 
        } 
        function inner3 () { 
          /* 虽然函数体为空，但是作为闭包，依旧引用outer的Context */
        } 
        return [inner1, inner2, inner3];
    }
    ```
- https://yq.aliyun.com/articles/592880 垃圾回收机制详解
  - 写屏障（write barrie）：GC的一种算法，因为每次用scavenge清楚新生代的垃圾对象时，都需要知道这个对象是否引用了老生代的对象，如果不能确保是否引用了老生代的代码，那么GC将无法启动。所以需要在每次往一个对象写入一个指针时都执行一段代码，把指针记录下来，这个记录的数据结构叫`store buffer`，每个堆维护一个，定期清理，这样我们可以通过扫描知道这个对象是不是老生代的指针指向的引用
  - 分配合并，当几个对象一起初始化时，需要分配一个连续的对象，因为是同一个空间，并且一起分配，那就不需要检查指针两端，也不用再用写屏障，也能提高分配内存的速度。
- https://help.aliyun.com/document_detail/64011.html?spm=a2c4g.11186623.6.569.3e4a24efL8Rb68 alinode最佳实践


# 1.22

- symbol、symbol.for
  - symbol程序运行时的值，symbol.for放在全局，每次都会去找相同key的值

# 1.23

- https://blog.csdn.net/moakey/article/details/78917516 什么是预发环境
  - 直接连接线上的环境，数据库是什么的都是线上的，相当于从负载均衡机子中抽离一台机器
- https://zhuanlan.zhihu.com/p/32712056 灰度部署
  - A/B testing，线上会有A/B两种风格的代码，主要受运维和产品的决策，也是通过数据驱动来真正决策
  - 需要流量的精确控制
- **https://github.com/boylegu/regal 灰度只能分流策略**

# 1.24

- https://zhuanlan.zhihu.com/p/55255223 https://blog.csdn.net/yxc135/article/details/7939671 红黑树
  - 每一个节点都是红色或者黑色
  - 根是黑色的
  - 所有叶子节点（节点不存在子节点或者为空节点被称作叶子节点）都是黑色的
  - 每个红色节点必须有两个黑色的子节点。（所有路径不会出现连续的红色节点）
  - 从给定节点到其后代叶子节点的每一条路径都包含相同数量的黑色节点，且没有一条路径会是别的路径长度的两倍
  ![](https://pic3.zhimg.com/80/v2-28614577602d1d20ffbc02c7fa8d12a6_hd.jpg)
- https://blog.csdn.net/heyeqingquan/article/details/78839699 chromeV8引擎
  - 源代码-→抽象语法树-→字节码-→JIT-→本地代码(V8引擎没有中间字节码)。javascriptCore有
  - webkit是渲染引擎
  - 由于V8缺少了生成中间代码这一环节，缺少了必要的优化，为了提升性能，V8会在生成本地代码后，使用数据分析器(profiler)采集一些信息，然后根据这些数据将本地代码进行优化，生成更高效的本地代码，
  - js是解释性语言，会在其他的情况下转换成字节码或解释执行，在v8下是直接转成原生机器码还用内联缓存来优化
  - js和c++等汇编语言的区别
    - 编译确定位置：C++编译阶段确定位置偏移信息，在执行时直接存取，JavaScript在执行阶段确定，而且执行期间可以修改对象属性；
    - 编译时信息共享：C++有类型定义，执行时不能动态改变，可共享偏移信息，JavaScript每个对象都是自描述，属性和位置偏移信息都包含在自身的结构中；
    - 编译时信息查找：C++查找偏移地址很简单，在编译代码阶段，对使用的某类型成员变量直接设置偏移位置，JavaScript中使用一个对象，需要通过属性名匹配才能找到相应的值，需要更多的操作。
  - v8中的js对象指针包含三个部分，隐藏类指针，这是v8为JavaScript对象创建的隐藏类；属性值表指针，指向该对象包含的属性值；元素表指针，指向该对象包含的属性。
  - 在V8中，JavaScript相关代码并非一下完成编译的，而是在某些代码需要执行时，才会进行编译，这就提高了响应时间，减少了时间开销。
  - V8会将Date部分代码回滚，进行优化回滚，但是很耗时，不推荐使用
  ```js
  var counter = 0;
  function test(x, y) {
      counter++;
      if (counter < 1000000) {
          // do something
          return 'jeri';
      }
      var unknown = new Date();
      console.log(unknown);
  }
  ```
  - 隐藏类将对象划分成不同的组，对于组内对象拥有相同的属性名和属性值的情况，将这些组的属性名和对应的偏移位置保存在一个隐藏类中，组内所有对象共享该信息。由于JavaScript是动态类型语言，在执行时可以更改变量的类型，如果上述代码执行之后，执行q.z=2，那么p和q将不再被认为是一个组，q将是一个新的隐藏类。隐藏类的对象再GC时会被放在`Map Space中`
  ![](https://images2017.cnblogs.com/news/1/201711/1-20171101142146513-822213973.png)
  - 内嵌缓存主要是对在通过隐藏类查找对应的偏移量的时候进行缓存，下次查找会找缓存中的结果。如果一个隐藏类的属性值多，会导致失误概率高，因为js动态可以改变属性，隐藏类也会改变，就与之前的缓存结果不一样需要再找哈希表
  - 快照，js的内置对象，譬如Array，Math等需要编译时加载进入堆内存，需要耗费时间，可以通过引入快照机制，对加载的对象进行序列化，等到要用到时可以反序列化。
- https://cnodejs.org/topic/59084a9cbbaf2f3f569be482 js字节码
  - V8传统情况下直接编译成机器码，执行性能高，但是机器码大，占内存多，执行正反序列化耗时长
  - chrome之前的优化处理是只对最外面一层js代码进行编译，并缓存，所以闭包内的代码不但不会缓存，甚至还要每次用V8再编译。最外层的js代码如果不是强业务代码，也会占内存。
  - Ignition + TurboFan 的组合，就是字节码解释器 + JIT 编译器的黄金组合。使用字节码让机器码变得更紧凑，降低内存占用率。解释器再观察字节码编译后的代码后，如果有变热的代码，就会进行JIT编译成机器码提高性能。以时间换空间，`提高启动速度，降低复杂度，减少内存占用`。
  


- 正则
- github jooger
- chrome插件
- node（http）、express、koa
- node深入浅出（）
- 掘金小册（webpack，Git，性能优化，React）
- measure-master
- 算法课（算法软件）
- nginx
- 珠峰性能、掘金小册（性能）
- reselect、项目
- node复习
- 文档修炼
- docker-swarm复习
- linux涉猎
- 用pupoteer写一个关注掘金用户的工具
- vueConf
- fcc（天津、杭州）
- node地下铁沙龙
- 《Node.js 调试指南》git
- node实战 egg、docker、vue 公众号nodelover
- 大型网站技术演进与更新
- 高效前端 pdf
- git N-blog 
- https://github.com/pigcan/blog 蚂蚁大佬
- https://github.com/jiangjiu/blog-md/issues 蚂蚁大佬
- https://zhuanlan.zhihu.com/eggjs
- git typescript-book-chinese nginxconfig.io apidoc resolve
- vue源码解析 百度云
- Ant之build.xml详解 https://blog.csdn.net/mevicky/article/details/72828554
- webpack源码解析   https://github.com/lihongxun945/diving-into-webpack 
- https://time.geekbang.org/ 极客时间 react git linux
- http://dmitrysoshnikov.com/ script深入
- 前端master https://frontendmasters.com/books/front-end-handbook/2018/practice/fd-dev-for.html
- 可伸缩服务架构设计和中间件pdf -黄挺
- netease每周分享 zk+dubbo node监控系统
- 大深海 https://github.com/chenshenhai koa egg学习笔记 很好
- https://chenshenhai.github.io/koa2-note/ 连上面的
- http://d2forum.alibaba-inc.com/#/past/d2-12 d2
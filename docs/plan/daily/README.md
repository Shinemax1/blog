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
- 前端数据采集的渐进式思考 http://ks.netease.com/blog?id=13985
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

# 12.13

- Array.apply(null,{length:20})
  - Array() === new Array()
  - https://segmentfault.com/a/1190000011435501
- prepublish、preinstall npm钩子 https://segmentfault.com/a/1190000008832423

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
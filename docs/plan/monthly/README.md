---
title: 月计划
---

# Interview

1. NaN不等于自身。6大基本类型 null、undefined、String、Boolean、Number、symbol 引用类型Object

2. typeOf null --> Object

3.  + 'b' --> NaN    + '1' --> 1

4. [] == ![] true

5. let fun = Function.prototype.bind() 没有prototype 因为没有new Function。function是语法糖，相当于new Function

6. new
```js
function create() {
    // 创建一个空的对象
    let obj = new Object()
    // 获得构造函数
    let Con = [].shift.call(arguments)
    // 链接到原型
	  obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}
```
Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
函数的 prototype 是一个对象，也就是原型
对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链
Function.__proto__.__proto__ === Object.prototype
Function.__proto__ === Function.prototype === Object.__proto__
Object.__proto__.__proto__ === Object.prototype

7. 因为当 JS 解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 foo，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。

8. JSON.parse(JSON.stringfy({}))深拷贝 
  - 会忽略 undefined
  - 不能序列化函数
  - 不能解决循环引用的对象

9. 解决循环引用和undefined
```js
function structuralClone(obj) {
  return new Promise(resolve => {
    const {port1, port2} = new MessageChannel();
    port2.onmessage = ev => resolve(ev.data);
    port1.postMessage(obj);
  });
}

var obj = {a: 1, b: {
    c: b
}}
// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
const clone = await structuralClone(obj);
```

10. CommonJS和ES2015
  - 前者支持动态导入，也就是 require(${path}/xx.js)，后者目前不支持，但是已有提案
  - 前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
  - 前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
  - 后者会编译成 require/exports 来执行的

11. nth-of-type和nth-child的区别在于前者只要满足是第几个，后者需要满足第几个和是第几个子元素

12. apply、call、bind
```js
Function.prototype.myCall = function (context) {
  var context = context || window
  // 给 context 添加一个属性
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args)
  // 删除 fn
  delete context.fn
  return result
}
Function.prototype.myApply = function (context) {
  var context = context || window
  context.fn = this

  var result
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

13. async/await
```js
var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1
```

14. proxy、reflect
  - 反射是指计算机程序在运行时（Run time）可以访问、检测和修改它本身状态或行为的一种能力。
  - 在函数调用时声明函数
  - 前置是直接调用proxy、后置需要对象__proto__继承proxy，以不破坏该对象属性为基础，如果找不到往上找
  - 后置容易堆栈异常
  - 利用reflect来判断对象上是否存在属性
  - get里的this指向handler，函数调用指向调用者
```js
var pobj = new Proxy({}, {
	get(target, key, receiver) {
		if (Reflect.has(target, key)) {
			return Reflect.get(target, key,receiver);
		}
		Reflect.set(receiver, key, function () {
			console.log(key);
		});
		return Reflect.get(receiver, key);
	}
});

var obj = Object.create(pobj);
obj.sayHello();
obj.sayHello();
console.log(obj.hasOwnProperty('sayHello'));
```

15. 0.1+0.2!=0.3
2^-4 * 1.10011...001 进位后就变成了 2^-4 * 1.10011(0011 * 12次)010 。那么把这两个二进制加起来会得出 2^-2 * 1.0011(0011 * 11次)0100 , 这个值算成十进制就是 0.30000000000000004
```js
parseFloat((0.1+0.2).toFixed(10))
```

16. 新生代
  - 新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。
  - 在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。

17. 老生代存活时间长，需要经历一次Scavenge GC算法或者新生代To空间内存占25%。
  - 标记清楚算法，标记内存中存活的对象，销毁其余对象，会产生碎片
  - 标记压缩算法，压缩内存空间，把存活的对象往一边推，留下的碎片内存清除掉

18. 浏览器事件触发，捕获阶段、目标阶段、冒泡阶段。onClick属于冒泡阶段，目标阶段的事件绑定只跟顺序有关，target真正触发事件的dom，currentTarget目标dom，stopPropagation阻止冒泡，preventDefault阻止默认事件

19. xss相当于脚本攻击，注入脚本，执行恶意代码，csrf伪造请求，通过跨域伪造请求来假装用户执行某写操作

20. 


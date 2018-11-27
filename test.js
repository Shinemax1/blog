var pobj = new Proxy({}, {
	get(target, key, receiver) {
    console.log(receiver)
		// if (!receiver[key]) {
			// receiver[key] = function () {
			// 	console.log(key);
			// };
    // }
    // console.log(receiver[key])
		// return receiver[key];
	}
});

var obj = Object.create(pobj);
obj.sayHello;


let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      console.log(receiver)
      getLogger(target, property)
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(value);
      return Reflect.set(target, property, value);
    }
  };
  return new Proxy(obj, handler);
};

let obj = { a: 1 }
let value
let p = onWatch(obj, (v) => {
  value = v
}, (target, property) => {
  console.log(`Get '${property}' = ${target[property]}`);
})
p.a = 2 // bind `value` to `2`
p.a // -> Get 'a' = 2

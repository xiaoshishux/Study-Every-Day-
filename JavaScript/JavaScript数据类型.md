# JavaScript的数据类型

JavaScript共有八种数据类型，分别是 **Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt**

```markdown
其中 Symbol 和 BigInt 是ES6 中新增的数据类型：

- Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。
```

这些数据可以分为**原始数据类型**和**引用数据类型**：

- 栈：原始数据类型（Undefined、Null、Boolean、Number、String、Symbol、Biglnt）

- 堆：引用数据类型（对象、数组和函数）

  

两种类型的区别在于**存储位置的不同：**

- 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。



# 数据类型检测的方式

1. **Typeof**

   ```javascript
   console.log(typeof 2);               // number
   console.log(typeof true);            // boolean
   console.log(typeof 'str');           // string
   console.log(typeof []);              // object    
   console.log(typeof function(){});    // function
   console.log(typeof {});              // object
   console.log(typeof undefined);       // undefined
   console.log(typeof null);            // object
   ```

   其中数组、对象、null都会被判断为object，其他判断都正确（只能判断基本数据类型）

2. **instanceof**

   ```javascript
   console.log(2 instanceof Number);                    // false
   console.log(true instanceof Boolean);                // false 
   console.log('str' instanceof String);                // false 
    
   console.log([] instanceof Array);                    // true
   console.log(function(){} instanceof Function);       // true
   console.log({} instanceof Object);                   // true
   ```

   可以看到，`instanceof`**只能正确判断引用数据类型**，而不能判断基本数据类型。`instanceof` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

3. **constructor**

   ```javascript
   console.log((2).constructor === Number); // true
   console.log((true).constructor === Boolean); // true
   console.log(('str').constructor === String); // true
   console.log(([]).constructor === Array); // true
   console.log((function() {}).constructor === Function); // true
   console.log(({}).constructor === Object); // true
   ```

   `constructor`有两个作用，一是判断数据的类型，二是对象实例通过 `constructor` 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，`constructor`就不能用来判断数据类型了：

   ```javascript
   function Fn(){};
    
   Fn.prototype = new Array();
    
   var f = new Fn();
    
   console.log(f.constructor===Fn);    // false
   console.log(f.constructor===Array); // true
   ```

4. **Object.prototype.toString.call**

   `Object.prototype.toString.call()` 使用 Object 对象的原型方法 toString 来判断数据类型：

   ```javascript
   var a = Object.prototype.toString;
    
   console.log(a.call(2));		//[object Number]
   console.log(a.call(true));	//[object Boolean]
   console.log(a.call('str')); //[object String]
   console.log(a.call([]));	//[object Array]
   console.log(a.call(function(){}));//[object Function]
   console.log(a.call({}));	//[object Object]
   console.log(a.call(undefined));//[object Undefined]
   console.log(a.call(null));	//[object Null]
   ```

   同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？

   

   这是因为toString是Object的原型方法，而Array、function等**类型作为Object的实例，都重写了toString方法**。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法。
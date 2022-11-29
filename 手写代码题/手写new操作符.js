function objectFactory(){
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments)
    let result= null;
    // 判断参数是否一个参数
    if(typeof constructor !== "function"){
        console.error("type error")
        return;
    }

    // 新创建一个空对象，对象的原型为构造函数的prototype对象
    newObject = object.create(constructor.prototype)
    // 将 this 指向新建对象，并执行函数
    result = constructor.apply(newObject,arguments)
    // 判断返回对象
    let flag = result && (typeof  result === "object" || typeof result === "function")
    return flag ? result : newObject
}

objectFactory(构造函数, 初始化参数)
// 判断构造函数的prototype属性是否出现在某个实例对象的原型链上
function myInstanceof(left, right) {
    // 1、获取对象的原型
    let proto = Object.getPrototypeof(left)
    // 2、获取构造函数的prototype对象
    let prototype = right.prototype
    // 判断
    while(true) {
        if(proto) return false
        if(proto === prototype) return true

        proto = Object.getPrototypeof(proto)
    }
}


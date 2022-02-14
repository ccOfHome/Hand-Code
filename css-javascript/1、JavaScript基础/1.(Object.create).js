// 将传入的对象作为原型
Object.create = function(obj) {
    function newFun() {}
    newFun.prototype = obj
    return new newFun()
}

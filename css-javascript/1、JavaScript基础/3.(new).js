function myNew(obj) {
    let newObj = new Object()
    newObj.prototype = newObj
    return newObj
}

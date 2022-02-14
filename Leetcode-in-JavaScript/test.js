// function foo() {
//     console.log(this)
//     console.log(this.name)
// }

// function Foo(fn) {
//     fn()
// }

// var obj = {
//     name: 'zl',
//     foo,
// }

// var name = 'Heternally'

// Foo(obj.foo)


function Person() {}
let p1 = new Person()
Person.prototype = {
    constructor: Person,
    name: 'cc',
    age: 18,
    getName() {
        console.log(this.name)
    }
}
// p1. __proto__ = 
p1.getName()

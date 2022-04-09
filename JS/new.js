/**
 * 1.创建一个新对象
 * 2.为创建的对象添加proto原型
 * 3.创建的对象会绑定到函数调用的this
 */

function my_new(fn, ...args){
    if(!fn || !fn.prototype) {
        throw Error('Error')
    }
    // let obj = Object.create();
    // obj.__proto__ = fn.prototype;

    let obj = Object.create(fn.prototype)

    let result = fn.apply(obj, args)

    let isObject = typeof result === 'object' && result !== null
    let isFunction = typeof result === 'function'

    return isObject || isFunction ? result : obj;
}

// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age;
//     }

//     getName(){
//         console.log(this.name)
//     }

//     getAge(){
//         console.log(this.age)
//     }
// }

function Person(name, age){
    this.name = name
    this.age = age
}
Person.prototype.getName = function () { 
    console.log(this.name)
}
Person.prototype.getAge = function () { 
    console.log(this.age)
}

const my_person = my_new(Person, 'nick', 20)
my_person.getName()
my_person.getAge()
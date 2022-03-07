## Key Javascript Concepts
---

#### Data Types
- 7 primitive datatypes, else everything like functions & arrays is an Object.
- ```Null, Undefined, Number, BigInt, String, Boolean, Symbol```
- null = absence of object
- undefined = absence of defined value
- a function without a return statement returns undefined
- strings = single quotes, double quotes, backticks
- symbols = unique identifier keys in objects

#### Functions
```
const obj = { id: 999, fn: function () { console.log(this.id) } }
const obj2 = { id: 2, fn: obj.fn }
obj2.fn() // prints 2
obj.fn() // prints 999
```
```
function fn() { console.log(this.id) }
const obj = { id: 999 }
const obj2 = { id: 2 }
fn.call(obj2) // prints 2
fn.call(obj) // prints 999
fn.call({id: ':)'}) // prints :)
```
```
function fn() {
  return (offset) => {
   console.log(this.id + offset)
  }
}
const obj = { id: 999 }
const offsetter = fn.call(obj)
offsetter(1) // prints 1000 (999 + 1)
```
```
function normalFunction () { }
const fatArrowFunction = () => {}
console.log(typeof normalFunction.prototype) // prints 'object'
console.log(typeof fatArrowFunction.prototype) // prints 'undefined'
```

#### Prototypal Inheritance (Functional)
- in js, inheritance is achieved with a chain of prototypes
- functional approach to creating prototype chains => ```Object.create```
```
const wolf = {
     howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
     woof: { value: function () { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, {
     name: { value: 'Rufus the dog' }
})

rufus.woof();
rufus.howl();
```
```
console.log(Object.getOwnPropertyDescriptor(rufus, 'name'))
```
```
console.log(Object.getPrototypeOf(dog)) // { howl: [Function: howl] }
console.log(Object.getPrototypeOf(rufus) === dog) // true
console.log(Object.getPrototypeOf(rufus) === wolf) // false
```

#### Prototypal Inheritance (Constructor functions)
- can be achieved by calling a function with new keyword
- all functions have a prototype property

#### Prototypal Inheritance (Class-Syntax Constructors)
- es6 have class keyword ( not the class of OOP, these are actually functions )
- using extend keyword for prototypal inheriatnce
- any methods added in the class-syntax function instead of constructor, are added to the prototype of the function
- ```Must call super constructor in derived class before accessing 'this' or returning from derived constructor```
```
class Wolf {
     constructor(name) {
          this.name = name
     }
     howl () { console.log(this.name + " : awoooooooo") }
}
class Dog extends Wolf {
     constructor(name) {
          super(name)
          this.name = name + ' the dog'
     }
     woof () { console.log(this.name + " : woof") }
}

const rufus = new Dog('Rufus')

rufus.woof() // Rufus the dog : woof
rufus.howl() // Rufus the dog : awoooooooo
```
```
console.log(Object.getPrototypeOf(rufus) === Dog.prototype) //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype) //true
```

#### Closure Scope
- along a function, an invisible object is created
- all variables & params created in function are stored in this object
- a function inside another function, can access both, its scope & its parent scope
- closure scope cannot be accessed outside a function
- but a returned function can provide a controlled access of the parent closure state
```
function init (type) {
     var id = 0
     return (name) => {
          id+=1
          return {id, type, name}
     }
}

const createUser = init('user')
const createBook = init('book')

const dave = createUser('Dave')
const annie = createUser('Annie')

const ncb = createBook('Node CookBook')

console.log(dave) // { id: 1, type: 'user', name: 'Dave' }
console.log(annie) // { id: 2, type: 'user', name: 'Annie' }
console.log(ncb) // { id: 1, type: 'book', name: 'Node CookBook' }
```

#### Closure scope can be used as an alternative of prototypal inheritance
- but no prototype chaining is done
- no need for prototypes, context(this), new
```
function wolf (name) {
     const howl = () => { console.log(name + " : awoooooooo") }
     return { howl: howl }
}

function dog (name) {
     name = name + ' the dog'
     const woof = () => { console.log(name + " : woof") }
     return { 
          ...wolf(name),
          woof: woof
      }
}

const rufus = dog('Rufus')

rufus.woof() // Rufus the dog : woof
rufus.howl() // Rufus the dog : awoooooooo
```

#### Notes: 
- using fat arrow functions, they need to be declared above their calling
- cjs functions are hoisted, so can declare below
- with functional prototypal inheritance, the ```value``` key is v.imp
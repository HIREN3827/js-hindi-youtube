// Primitive

// 7 Typesn: String, Number, Boolean, Null, unfedined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const symbolId = Symbol('123')

console.log(id == symbolId);

const bigNumber = 63524963747862886404n // BigInt

// Reference (None primitive)

// Array, Objects, Functions

const heros =["IronMan", "SpiderMan", "Dr.Strange", "Hulk"]               //This is Array []

let myObject = {
    Name:"Hiren",               //This is object {}
    Age: 20
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

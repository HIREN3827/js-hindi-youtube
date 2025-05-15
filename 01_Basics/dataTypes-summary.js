// Primitive

// 7 Typesn: String, Number, Boolean, Null, unfedined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const symbolId = Symbol('123')

// console.log(id == symbolId);

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

// console.log(typeof myFunction);

// ---------------------------------- Memories --------------------------------------------------

// Stack (Primitive), Heap (Non-Prinitive)

// In that value change in another copy and send it to you
let myYoutubename = "mr_beast.com"

let anotherName = myYoutubename
anotherName = "chaiOurCode"
console.log(anotherName);
console.log(myYoutubename)

//This is the origenal value

let userOne ={
    Email: "hirendadhaniya@2345.com",
    Upi:"user@blabla"
}

//For change the value of it do this

// userOne.Email = "hiren3247158191409145"
// console.log(userOne);



//In that the send you the same reference it means its also change orignal values too
let userTwo = userOne

userTwo.Email = "hreigjrdfmesrgf"
userTwo.Upi = "32578659374387"

console.log(userOne.Email)
console.log(userOne.Upi)
console.log(userTwo.Email)
console.log(userTwo.Upi)
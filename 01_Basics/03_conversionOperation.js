let score = "Hiren"

// console.log(typeof score);
// console.log(typeof (score)); 

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  
// console.log(valueInNumber);  


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0
// undefined => undefined

let isLoggedIn = "Hiren"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false;
// "" => false ; "value(hiren)" => true


// This method is use to convert any variable value into any another value like number into sring , string into numers , and many more 

// Example is here 

let aNumber = 32

let conString = String(aNumber)

// console.log(conString);
// console.log(typeof conString);

// ---------------------------------- Opeatoins ---------------------------------------------

let value = 32
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Hiren"

let str3 = str1 + str2 ; 
// console.log(str3);

// Not use this kind of method

// console.log( 1 + "2" );
// console.log( "1" + 2 );

// string first hoy tyare pachhad na numbers nu conversion string ma thase
// console.log( "1" + 2 + 2 );

// string last hoy tyare aagad na numbers nu conversion thase and pachad string hoy to string and boolean hoy to boolean je hoy ema thay
// console.log( 1 + 2 + "2" );

// Always use this kind of method 
// console.log((3 + 4)* 5 % 3);

// Here is the trickey conversion
// console.log(+true);
// console.log(+"");

let num1 , num2 , num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

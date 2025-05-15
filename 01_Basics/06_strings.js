const name = "Hiren"
const repoCount = 50

// console.log(name +  repoCount + " Values");  // This is the od method so do not use it

console.log(`Hellow my name is ${name} and my repo count is ${repoCount}`); // This is new method to write so use this 

const gamename = new String("Hiren_M_D")

// console.log(gamename[0]);
// console.log(gamename.__proto__);


// console.log(gamename.length);                //Use to chack length of it
// console.log(gamename.toUpperCase());         //Use to made capital 
// console.log(gamename.charAt(7));             //Use to chack position using number
// console.log(gamename.indexOf("M"));          //Use to chack number using charactor

// const newString = gamename.substring(0 , 6)
// console.log(newString);

const uniqueString = gamename.slice(-9 , 6)
console.log(uniqueString);

const newStringOne = "    Hiren    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://hirendadhaniya.vercel.app"

console.log(url.replace(".vercel.app" ,".com"))    // Use for replace some words or something
console.log(url.includes("dadhaniya"));            // Use to chack the words is in there or not
console.log(gamename.split("_"));                  // Use for splite the word appon on spces or with any simmiler thing



// Know more about stings using MDN eference
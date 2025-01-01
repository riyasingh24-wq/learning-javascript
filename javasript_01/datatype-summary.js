// # Primitive

// 7 types : String, Number, Boolean, bigInt, Undefined, null, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 7687628729792996877n

// Reference (Non-Primitive)

// Array, Object, Function
/* const heros = ["Shaktiman","Naagraj","Doga"];
let myObj = {
      name : "riya", 
      age : 20
}  */

// const gameName = new String('roxyrow')

const myFunction = function(){
      console.log("hello world");
      
}

console.log(typeof null); // Check every typeof function or datatypes 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  , Heap (Non-Primitive)

let myYoutubename = "riyasingh@dotcom"

let anothername = myYoutubename;
anothername = "riya@dotcom"                     //Stack memory
console.log(myYoutubename);
console.log(anothername);


// Heap

let userOne = {
      email: "user@gmail.com",
      UPI: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "riya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);





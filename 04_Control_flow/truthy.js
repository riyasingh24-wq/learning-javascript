const userEmail = []
if(userEmail){
      console.log("Got the Email");
} else {
      console.log("Don't get the Email");
}

// falsy values

// 0, -0, "", false, BigInt 0n, null, undefined, NaN

// Truthy values
// "0", 'false' , {} ,[] , " ", function(){}

// if(userEmail.length === 0){
//       console.log("Array is empty");
// }

const objEmpty = {}

if(Object.keys(objEmpty).length === 0){
      console.log("Object is empty");
      
}

// Nullish Coalescing Operator (??): null undefind

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 10
val1 = null ?? 15 ?? 20
console.log(val1);

// terniary Operator

// condition ? true : false ;

const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less than 80") : console.log("grater than 80");

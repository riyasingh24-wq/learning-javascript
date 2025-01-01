// var c = 300
let a = 300
if (true){
      let a = 10;
      const b = 20;
      // console.log("INNER: ",a);
      
}
// console.log(a);
// console.log(b);
// console.log(c);

/*function one(){
      username = "Riya"

      function two(){
            Website = "Youtube"
            console.log(username);
      }
      // console.log(Website);
      two()
}
one()*/

if(true){
      const username = "Riya"
      if(username === "Riya"){
            const Website = "Youtube"
            // console.log(username + Website);
      }
      // console.log(Website);
}
// console.log(username);

// ++++++++++++++++++++++++++  intersting +++++++++++++++++++++++++++
console.log(addone(5));
function addone(num1){
      return num1 + 1   
}

console.log(addtwo(5));

const addtwo = function(num1){
      return num1 + 2
}

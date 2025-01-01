

function sayMyName(){
      console.log("R");
      console.log("I");
      console.log("Y");
      console.log("A");
}

// sayMyName()

// function addtwoNumber(num1, num2){
//       console.log(num1 + num2);
      
// }

function addtwoNumber(num1, num2){
      // let result = num1 + num2
      // return result
      return num1 + num2
}

const result = addtwoNumber(3, 4)
// console.log("Result : ", result);

function loginUserMessage(Username = "sam"){
      if(!Username){
            console.log("please enter a user name");
            return
      }
      return `${Username} just Logged In`
}

// console.log(loginUserMessage("Riya"));

function calculateCartPrice(val1, val2, ...num1){
      return num1
}
      // console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
      username: "Riya",
      Price: "199"
}

function handleObject(anyObject){
      console.log(`Username is ${anyObject.username} or Price is ${anyObject.Price}`);
}
      // handleObject(user)
      handleObject({
            username: "sam",
            Price: "399"
      })

const myNewArray = [200, 400, 600, 800]

function returnSecondvalue(getArray){
      return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 600, 800]));



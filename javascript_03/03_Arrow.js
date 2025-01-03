const user = {
      username: "Riya",
      price: 999,

      WelcomeMessage: function(){
            console.log(`${this.username}, Welcome to the Website`);
            // console.log(this);
            
      }
}
// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()
// console.log(this);

// function chai(){
//       let username = "riya"
//       console.log(this.username);
// }
// chai()

const chai = () => {
      let username = "riya"
      console.log(this);
}
// chai()

// const addtwo = (num1, num2) => {
//       return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "riyaSingh"})

console.log(addtwo(3,4));

// const myArray = [2,3,5,6,7]
// myArray.forEach()

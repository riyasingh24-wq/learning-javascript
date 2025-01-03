// if 
// const isUserLoggedIn = true;
// const temperature = 41;
// if(temperature === 41){
//       console.log("less than 50");
// } else {
//       console.log("Temperature is grater than 50");
// }

// >, <, <=, >=, == , != , === , !==

// const score = 200
// if(score > 100){
//       const Power = "fly"
//       console.log(`User Power: ${Power}`);
// }
// console.log(`User Power: ${Power}`); //Wrong way


// if (balance > 500) console.log("test"), console.log("test2"); //wrong way

// const balance = 1000;
// if(balance < 500){
//       console.log("less than 500");
// } else if(balance < 700){
//       console.log("less than 700");
// } else if(balance < 950){
//       console.log("less than 950");
// } else {
//       console.log("less than 1200");
      
// }

const isUserLoggedIn = true
const debitCard = true
const UserLoggedinFromGoogle = false
const UserLoggedinFromEmail = true

if(isUserLoggedIn && debitCard && 2==3){
      console.log("Allow user to buy course");
}
if(UserLoggedinFromGoogle || UserLoggedinFromEmail){
      console.log("User Logged In");
      
}
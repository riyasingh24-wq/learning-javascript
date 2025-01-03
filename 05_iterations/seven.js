// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// // const newnums = myNumbers.map((num) => num + 10)

// const newnums = myNumbers.map((num) => num * 10)
//                         .map((num) => num + 1)
//                         .filter((num) => num > 40)

// console.log(newnums);


const myNums = [1 , 2, 3]

// const myTotal = myNums.reduce(function(acc, curval) {
//       console.log(acc, curval);
//       return acc + curval
// }, 10);

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0)

// console.log(myTotal);


const shoppingCart =[
      {
            itemName: 'Javascript course',
            Price: 1000
      },
      {
            itemName: 'python course',
            Price: 999
      },
      {
            itemName: 'mobile dev course',
            Price: 1200
      },
      {
            itemName: 'Game dev course',
            Price: 1500
      },
      {
            itemName: 'fullstack course',
            Price: 1500
      }
      
]
      
const PricetoPay = shoppingCart.reduce((acc, item) => acc + item.Price,0)
console.log(PricetoPay);



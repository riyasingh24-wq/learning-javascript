const coding = ["js", "ruby", "cpp", "python", "java"]

// const values = coding.forEach((item) => {
//       console.log(item);
//       return item
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter((num) => {
//       return num > 4
// })
// console.log(newNum);

// const newNums = []
// myNums.forEach((num) => {
//       if(num > 4){
//             newNums.push(num)
//       }
// })
// console.log(newNums);

const book = [
      {
            title: 'Book One', genre: 'Fiction',Published: 1981, edition: 2004
      },
{
      title: 'Book Two', genre: 'Non-Fiction',Published: 1992, edition: 2008
},
{
      title: 'Book Three', genre: 'Fiction',Published: 1965, edition: 2009
},
{
      title: 'Book Four', genre: 'Non-Fiction',Published: 1956, edition: 2003
},
{
      title: 'Book Five', genre: 'Fiction',Published: 1945, edition: 2001
},
{
      title: 'Book Six', genre: 'Non-Fiction',Published: 1932, edition: 2000
}
];

let userBooks = book.filter((bk) => bk.genre === 'Fiction')

userBooks  = book.filter((bk) => {
      return bk.Published >= 1956 && bk.genre === 'Non-Fiction'
})

console.log(userBooks);



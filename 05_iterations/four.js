const myObject = {
      js: 'javaScript',
      rb: 'Ruby',
      cpp: 'C++',
      swift: 'Swift'
}

for (const key in myObject) {
//      console.log(`${key} is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'cpp', 'swift','py','java']

for (const key in programming) {
      // console.log(programming[key]);
      
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("NYC", "New York City")

for (const key in map){
      console.log(key);
      
}
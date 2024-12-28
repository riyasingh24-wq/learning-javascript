const name = "riya"
const repocount = 50;

// console.log(name + repocount + " Value");


// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('roxy_row_com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);


const newStringOne = "       riya           "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://riya.com/riya%20singh"
console.log(url.replace('%20','-'));


console.log(url.includes('hc')); //for finding

// console.log(gameName.split('.'));
console.log(gameName.split('_'));







const name = "Shambhavi"
const repoCount = 50

// console.log(name + repoCount + " Value")
// not preferred


//using backticks (` `)

// console.log(`Hello, My name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String("Shambhavi-st")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
//console.log(gameName.toUpperCase());

// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(2,6)
//console.log(newString);
//we cannot give neg value in substring, if done it will start from 0 index, ignoring the given neg value 


const anotherString = gameName.slice(-8,6)
//console.log(anotherString);
// we can give neg values in slice(it starts from reverse)

const newStringOne = "    shambhavi  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://google.com/google%20docs"
// console.log(url.replace("%20", '-'));
// console.log(url.includes("sunday"));

console.log(gameName.split('-'));

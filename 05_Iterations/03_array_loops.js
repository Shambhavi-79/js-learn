// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num)
}

const greetings = "Hello World"

for (const greet of greetings){
    // console.log(`Each char is ${greet}`)
 }

// Maps

// maps is a collection of key value pairs, where the keys can be of any type (not just strings or symbols like in objects) and the key is unique. Maps maintain the order of insertion.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India") // will not get printed since duplicate key

// console.log(map)

for (const [key, value] of map){
    // console.log([key, ':-', value])
}

const myObject = {
    'game1' : 'Valorant',
    'game2' : 'CSGO',
    'game3' : 'Apex Legends'
}

// for (const [key, value] of myObject){
//     consiole.log([key, ':-', value])
// }
// does not work because objects are not iterable, we can use Object.entries() to convert the object into an array of key value pairs
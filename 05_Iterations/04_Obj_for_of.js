const myObject = {
    'js' : 'JavaScript',
    'py' : 'Python',
    'rb' : 'Ruby'
}

// for in loop syntax

for (const key in myObject) {
    // console.log(key); // js, py, rb
    // console.log(myObject[key]); // JavaScript, Python, Ruby
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "ruby", "python", "java"]

for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("FR", "France")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key)
// }
// prints nothing


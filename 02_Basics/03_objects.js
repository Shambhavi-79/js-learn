// two ways to declare an onj - literals and constructor

// singleton (single instance)
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "shambhavi",
    "fullname": "shambhavi thakur",
    [mySym]: "myKey1",   // square bracket is used for it to be 'symbol' datatype
    age: 21,
    location: "prayagraj",
    email: "shambhavi@google.com",
    isLoggedIn: true,
    lastLoginDays: ["monday", "tuesday"]
}

// console.log(jsUser.email)
// console.log(jsUser['email'])

// console.log(jsUser.fullname) // gives error
// console.log(jsUser['fullname'])

// console.log(jsUser.mySym) // will give output but datatype is 'string' not 'symbol'

// console.log(jsUser[mySym]);

jsUser.email = "shambhavi@microsoft.com"
// Object.freeze(jsUser)   // value can't be changed now
jsUser.email = "shambhavi@amazon.com"
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello JS User!");
}
jsUser.greeting2 = function() {
    console.log(`Hello JS User!, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
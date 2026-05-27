// Primitive Datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is dynamically-typed

const score = 100
// const score = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 46803n
// console.log(typeof bigNumber);



// Reference Type (Non-Primitive)
// Array, Object, Functions

//array

const heroes = ["Shaktiman", "Spiderman", "WonderWoman"]

//object

let person = {
    name : "Shambhavi",
    age : 21,
    hobbies : ["dancing", "singing"]
}

//functions

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
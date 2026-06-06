// if

// if (condition == true) {
//     // code to be executed if condition is true
// }


const isUserLoggedIn = true

// if (isUserLoggedIn){

// }

if ( 2 === "2" ){
    console.log("executed")
}

// <, >, <=, >=, !=, ==, ===(strict equality), !==(strict inequality)

// const temperature = 41

// if (temperature < 50){
//     console.log("temperature is less than 50")
// }
// else {
//     console.log("temp is greater than 50")
// }
// console.log("execute")


// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)   --- shows error


const balance = 1000

// if (balance > 500) console.log("executed"), console.log("execute2");

// implicit scope
// we can write multiple lines using comma 
// immature code


// -------nesting------

// if (balance < 500){
//     console.log("less than 500")
// } else if (balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 900")
// }else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){
    console.log("allowed to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}
// console.log("S")
// console.log("a")
// console.log("c")
// console.log("h")
// console.log("i")
// console.log("n")

function sayMyName(){
    console.log("S")
    console.log("a")
    console.log("c")
    console.log("h")
    console.log("i")
    console.log("n")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// } 
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("This will never be printed")
    return number1 + number2
} 

const result = addTwoNumbers(1, 8)

// console.log("Result:", result)

function loginUserMessage(username = "Sachin"){
    if (!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Shambhavi"))
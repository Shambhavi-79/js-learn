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
// console.log(loginUserMessage("Shambhavi"))

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Sachin",
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Shambhavi",
    price: 400
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 400]))
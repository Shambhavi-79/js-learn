const user = {
    name: "shambhavi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to our website`)
        console.log(this)
    }
}

// user.welcomeMessage()

// user.name = "sachin"
// user.welcomeMessage() 

// console.log(this)


// function chai(){
//     let username = "shambhavi"
//     console.log(this.username)
// }

// chai()


// const chai = function(){
//     let username = "shambhavi"
//     console.log(this.username)
// }


const chai = () => {      //arrow func
    let username = "shambhavi"
    console.log(this.username)
}

// chai()


//*******basic arrow func*******


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "sachin"})

console.log(addTwo())

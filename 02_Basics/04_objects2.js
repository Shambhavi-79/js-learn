// const tinderUser = new Object() // singleton obj

const tinderUser = {}              // non-singleton obj

tinderUser.id = "123abc"
tinderUser.name = "john"
tinderUser.isLoggedIn = true

// console.log(tinderUser) 

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstname: "sachin",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullName)

const obj1 = { "1": "a", "2": "b" }
const obj2 = { "3": "a", "4": "b" }

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }

// console.log(obj3)

const users = [
    {
        userid: 1,
        email: "a@gmail.com"
    },
    {
        userid: 2,
        email: "a@gmail.com"
    },
    {
        userid: 3,
        email: "c@gmail.com"
    }
]
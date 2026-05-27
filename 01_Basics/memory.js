// two types of Memory
// Stack, Heap

// Stack Memory : Primitive Datatypes are stored 
// Heap Memory : Reference(Non-Primitive) Datatypes are stored

let myName = "Shambhavi"
// stored in stack memory

let anotherName = myName
anotherName = "Sachin"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "abc@ybl"
}
// stored in heap memory

let userTwo = userOne

userTwo.email = "shambhavi@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

// we get same value since heap uses reference to store the value, so both userOne and userTwo are pointing to the same memory location in heap, so when we change the value of email in userTwo it also changes the value of email in userOne since both are pointing to the same memory location in heap.

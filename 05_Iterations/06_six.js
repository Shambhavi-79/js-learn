// const coding = ['js', 'py', 'java', 'cpp', 'ruby']

// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(values)  // undefined, forEach doesn't give a value



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )

// if we are using scopes then we must use return keyword

// const newNums = myNums.filter((num) => {
//     return num > 4
// })


// using forEach

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004},
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008},
    { title: "Book Three", genre: "History", publish: 1991, edition: 2014},
    { title: "Book Four", genre: "Science", publish: 1995, edition: 2007},
    { title: "Book Five", genre: "Fiction", publish: 2005, edition: 2019},
    { title: "Book Six", genre: "Non-Fiction", publish: 1987, edition: 2003}
]

// const userbooks = books.filter((bk) => bk.genre === "History") 

const userbooks = books.filter((bk) => { return bk.publish >= 2000 && bk.genre === "Fiction"})

console.log(userbooks)
// array

const myArray = [1, 3, 4, 2, 5, true, "shambhavi"]
// console.log(myArray[1])

const myArr2 = new Array(1, 2, 3, 4)


// resizable, can contain several elements of different datatypes, any element can be accessed based on its index

// when copied - makes shallow copy(same reference point) 

// **********array methods***********
// myArray.push(6)
// myArray.pop()

// myArray.unshift(7)
// myArray.shift()

const newArr = myArray.join() // removes the square brackets and converts into String

// console.log(myArray);
// console.log(newArr);

// console.log(myArray.includes(8));
// console.log(myArray.indexOf(5));

// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);

console.log("B", myArray)

const myn2 = myArray.splice(1, 3)
console.log(myn2);

console.log("C", myArray)

// slice - does the include the n value of given index and makes no change to the original array

// splice - include the nth value of the given index and changes the array by removing the spliced segment

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  //true (since the comparator converts null into a numeric value)

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strict check)

console.log("2" === 2); //false 9since it checks datatypes too)

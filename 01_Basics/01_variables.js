const accountId = 144553
let accountEmail = "shambhavi@gmail.com"
var accountPassworrd = "12345"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "abs@gmail.com"
accountPassword = "212121"
accountCity = "Jordan"

console.log(accountId);
console.table([accountId, accountPassword, accountEmail, accountCity, accountState])
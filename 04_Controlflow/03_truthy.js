const userEmail = []

if (userEmail) {
    console.log("got user email")
}else{
    console.log("user email not found")
}

// falsy values

// false, 0, -0, 0n, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function(){} (called as empty function), true, 1, -1, 3.14, Infinity, -Infinity


/* if (userEmail.length == 0) {
    console.log("array is empty")
}

const userObject = {}

if (Object.keys(userObject).length == 0) {
    console.log("object is empty")
} */


false == 0  //true
false == "" //true
0 == ""     //true


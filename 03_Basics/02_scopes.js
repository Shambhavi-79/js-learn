// let a = 10
// const b = 20
// var c = 300
let a = 300

if (true){
    let a = 10 
    const b = 20
    // console.log("Inner: ",a)
}

// console.log(a)
// console.log(b)
// console.log(c)


// nested scopes

function one(){
    const username = "shambhavi"

    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)

    two()
}

one()

if (true){
    const username = "shambhavi"
    if (username === "shambhavi"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)




//********* interesting*********


console.log(addone(5))
function addone(num){
    return num + 1
}


addtwo(5))    //when printed, shows error
const addtwo = function(num){
    return num + 2
}


// switch statements

// syntax

// switch (key){
//     case value1:

//         break;
//     case value2:

//         break;
//     default:    
//         break;
// }

let month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
}

let month2 = "march"


switch (month2) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Invalid month");
}
// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB Connected`)
})();

( () => {
    // unnamed iife
    console.log(`DB Connected 2`)
})();

// to remove the global scope pollution, we can use IIFE to create a local scope for our variables and functions. This way, we can avoid naming conflicts and keep our code organized.

// we must use semicolon at the end of the IIFE to avoid any syntax errors, especially when we are chaining multiple IIFEs together.


( (name) => {
    // unnamed iife with parameters
    console.log(`DB Connected 2 ${name}`)
})("shambhavi");
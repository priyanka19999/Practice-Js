// Functions are blocks of code used for particular tasks
// functions are executed when they are called or invoked

// Syntax
// function functionName() {
    // code
// }
function sayHello() {
  return "Hello Good Morning";
}
let message = sayHello();
console.log(message); //Hello Good Morning


// CREATE → function sayHello() { ... }
// CALL   → sayHello();


// Function With Parameter
function sayHi(name) {
  console.log("Whats Up?", name)
}
sayHi("Priyanka")  //Whats Up? Priyanka


// Multiple parameters
let result = add(3,9)
function add(a, b) {
    return a + b;
}
console.log(result) //12
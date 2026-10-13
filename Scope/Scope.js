// Scope determines where a variable can be accessed or used in your JavaScript code.

// Global scope
// Function scope
// Block scope


/* Global Scope:
-Global Scope: Variables declared Globally (outside any block or function) have Global Scope.

-Global variables can be accessed from anywhere in a JavaScript program.


Function scope:A variable declared inside a function is generally accessible only inside that function.


Block Scope: A variable declared with let or const inside a block {} is accessible only inside that block.


 */


// Gloabal Scope Example 


let name = "Priyanka";
function greet() {
    console.log(name);
}
greet();
console.log(name);

// Priyanka
// Priyanka



// Function Scope:

function student() {
    let age = 22;
    console.log(age);
}

student(); //22

// console.log(age);




/**
Inside the function
console.log(age) prints 22.

Outside the function
console.log(age) throws a ReferenceError.
 */



// Block Scope:A block is a section of code enclosed in curly braces {}. For example, the body of an if statement.

{
    let city = "Bhubaneswar";
    const country = "India";

    console.log(city);
    console.log(country);  //Bhubaneswar India
}

// console.log(city);  //ReferenceError because city cannot be accessed outside its block.

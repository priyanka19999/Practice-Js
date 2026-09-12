// Calling A Function
// To call a function, write the name followed by parentheses like name().

function sayHello() {
  return "Hello World";
}
sayHello()

// Using the Returned Value
// When a function returns a value, you can store the value in a variable.

function sayHello() {
  return "Hello World";
}
let greeting = sayHello();
console.log(greeting)     //Hello World 
// console.log(sayHello());  another way of calling


// Example:1
// Celsius to Fahrenheit
function cel(Fahrenheit){
    return (5/9)*(Fahrenheit-32);
}
let deg = cel()
console.log(cel(78)); //25.555555555555557

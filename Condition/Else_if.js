// Use the else if statement to specify a new condition if the first is false.
//Syntax
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, //to ask the user something. , Take input from the keyboard/terminal.
    output: process.stdout //Show/output something in the terminal.
});

rl.question("Enter your age: ", (age) => {

    if (age < 13) {
        console.log("You are a child");
    } 
    else if (age < 18) {
        console.log("You are a teenager");
    } 
    else {
        console.log("You are an adult");
    }

    rl.close(); //finished taking input.
});  //Enter your age: 45 , You are an adult


// rl helps us communicate with the user through the terminal.
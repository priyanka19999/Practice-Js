// The do while loop is a variant of the while loop.
// A do...while loop is used when you want to run some code at least once, and then continue running it as long as a condition is true.

// Syntax
// do {
//  code to execute
// } while (condition);


// Example:1
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

/*Ans:
1
2
3
4
5 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number;

rl.question("Enter a number: ", (input) => {

    number = Number(input);

    do {
        console.log("Number is:", number);
        number--;

    } while (number > 0);

    rl.close();
});
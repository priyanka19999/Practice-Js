// Keep running while the condition is true.
// syntax
// while (condition) {
//   // code block to be executed
// }


// example: 
// Let's print numbers from 1 to 5.
let i = 1; 

while (i <= 5) {
    console.log(i);
    i++;
}
/*
Let's print numbers from 1 to 5.
We create a variable called i, and Its value is: i = 1
while (i <= 5)
Currently: i = 1 so  1 <= 5 its true
Therefore, JavaScript enters the { }.
It executes: console.log(i);
i++; means i = i + 1;
so now the value of i becomes i = 2
So it runs the code again.

So remember 
START → CHECK → DO → UPDATE → CHECK → DO → UPDATE...
*/


// Example-2
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askPassword() {
    rl.question("Enter password: ", function(password) {

        while (password !== "1234") {
            console.log("Wrong password!");

            rl.question("Enter password again: ", function(password) {
                if (password === "1234") {
                    console.log("Access granted!");
                    rl.close();
                } else {
                    console.log("Wrong password!");
                    askPassword();
                }
            });

            return;
        }

        console.log("Access granted!");
        rl.close();
    });
}

askPassword();
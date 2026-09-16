/*Question:1
Predict the exact output:*/

console.log("Start");

setTimeout(function() {
    console.log("Hello");
}, 2000);

console.log("Middle");

setTimeout(function() {
    console.log("World");
}, 1000);

console.log("End");

/* Start
Middle
End
World
Hello
*/

/*Question:2
Predict the exact output and approximate timing:
console.log("A");
*/

setTimeout(function() {
    console.log("B");

    setTimeout(function() {
        console.log("C");
    }, 2000);

}, 1000);

setTimeout(function() {
    console.log("D");
}, 3000);

console.log("E");

/*
A
E
B
D
C
*/


/*Question:3
You are creating a food delivery app.
After a user places an order, you want to display: Order placed successfully!
mmediately.
After 5 seconds, the application should display:
Your order is being prepared.*/

function placeOrder() {
console.log("Order placed successfully!");
setTimeout(function(){
console.log("Your order is being prepared.");
},5000)
setTimeout(() => {
console.log("The Order will be picked by the Partner!");
},5000)

setTimeout(() => {
console.log("The Order is One the Way to deliver!");
},5000)
}
placeOrder();



/*Question:4
You are building a login system.
The user gets only 3 login attempts.
After the third failed attempt, you want to:
Print "Account locked!"
Wait 5 seconds
Print "You can try again."
*/


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let attempts = 0;

function login() {

    rl.question("Enter your email: ", function(result) {

        if (result === "Apple@tcs.com") {

            console.log("Login successful!");
            rl.close();

        } else {

            attempts++;
            console.log("Login failed!");

            if (attempts === 3) {

                console.log("Account locked!");

                setTimeout(function() {
                    console.log("You can try again.");
                    rl.close();
                }, 5000);

            } else {

                console.log("Please enter the correct email.");
                login();

            }
        }
    });
}

login();
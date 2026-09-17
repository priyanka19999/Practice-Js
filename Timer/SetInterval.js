// setInterval() is used when you want a function to run repeatedly after a fixed amount of time

/*Syntax:
setInterval(function, time);
*/

// setInterval(function() {
//     console.log("Hello");
// }, 2000);



let count = 1;

let timer = setInterval(function() {

    console.log(count);
    count++;

}, 1000);

setTimeout(function() {

    clearInterval(timer);
    console.log("Stopped!");

}, 5000);


// You are building a countdown timer for an online exam.

// The timer should:

// Start at 10
// Print the current number every 1 second
// When it reaches 0, print "Time's up!"
// Stop the interval using clearInterval()


let countdown = 10;

let time = setInterval(function() {

    console.log(countdown);

    countdown--;

    if (countdown < 0) {
        clearInterval(time);
        console.log("Time's up!");
    }

}, 1000);



// You are building a resend OTP system.
// After a user requests an OTP, they must wait 10 seconds before they can request another one.
// The screen should show:
let countdown1 = 10;
let timer1 = setInterval(function() {

    console.log("You can resend OTP in " + countdown1 + " seconds");

    countdown1--;

    if (countdown1 === 0) {
        clearInterval(timer1);
        console.log("You can resend OTP now!");
    }

}, 1000);
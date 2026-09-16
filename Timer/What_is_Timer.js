// JavaScript timers let you run a function after a delay or repeatedly at fixed intervals.

/*The two main timer functions are setTimeout() and setInterval().

setTimeout()	Runs a function once after a delay.
setInterval()	Runs a function repeatedly.
clearTimeout()	Cancels a timeout.
clearInterval()	Stops an interval.*/


// The setTimeout() Function
// :- "Wait for this amount of time, then execute this function."
/* Syntax:
setTimeout(function, delay);
function → code you want to execute
delay → time in milliseconds
*/

setTimeout(function() {
    console.log("Hello Priyanka!");
}, 3000);

// After 3 seconds: it prints Hello Priyanka!

// setTimeout() with a Normal Function
function greet() {
    console.log("Hello!");
}
setTimeout(greet, 2000); //After 2 seconds: it prints Hello!



/* setInterval():
The setInterval() function runs a callback function repeatedly.

syntax:
setInterval(function, interval);

"Execute this code repeatedly after every fixed amount of time."*/

setInterval(function() {
    console.log("Hello!");
}, 2000);

// It prints "Hello!" every 2 seconds.
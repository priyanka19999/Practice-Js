// switch is used when you want to check one value against multiple possible choices.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, //to ask the user something. , Take input from the keyboard/terminal.
    output: process.stdout //Show/output something in the terminal.
});

rl.question("Enter the Number to know the actual day: " , (day) => {
    day = Number(day);
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;       
        case 3:
            console.log("Wednesday");
            break;        
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }

    rl.close();
})

// Enter the Number to know the actual day: 1
// Monday
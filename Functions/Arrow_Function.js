// An arrow function is simply a shorter way to write a function in JavaScript.

const greet = () => {
    console.log("Hello!");
};
greet() //Hello!


const calculateResult = (name, marks1, marks2) => {

    let total_mark = marks1 + marks2;

    let average = total_mark / 2;

    let result;

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    console.log("Name:", name);
    console.log("Total:", total_mark);
    console.log("Average:", average);
    console.log("Result:", result);
};
calculateResult("Priyanka", 75, 65);

// Name: Priyanka
// Total: 140
// Average: 70
// Result: Pass
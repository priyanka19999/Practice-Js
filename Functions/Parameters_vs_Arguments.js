// A parameter is a variable written inside the function definition.

// When we actually call the function and give it a value, that value is called an argument.

function greet(name) {
    console.log("Hello " + name);
}

greet("Priyanka") //Here "Priyanka" is an Argument

// name → parameter


/*Create a JavaScript function called calculateBill that accepts three parameters: price, quantity, and discount.
The function should:
Calculate the total price.
Apply the discount.
Print the final bill amount.*/

function calculateBill(price, quantity, discount){
let total = price*quantity;
total = total - (total * discount/100);
console.log("Final Price:", total);
}
calculateBill(1000, 3,10) //Final Price: 2700


// Create a JavaScript function called calculateSalary that accepts four parameters:
function calculateSalary(name, basicSalary, bonus, tax){ 
  let TotalSalary = basicSalary + bonus;
  let Totaltax = TotalSalary * tax/100;
  let FinalSalary = TotalSalary - Totaltax;
  console.log("Employee:", name);
  console.log("Final Salary:", FinalSalary);
}
calculateSalary("Priyanka", 30000, 5000, 10)
// Final Salary: 31500
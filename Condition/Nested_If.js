// Nested if
// You can use an if statement inside another if statement:
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}

console.log(age);
console.log(country);
console.log(text);

// 16
// USA
// You can drive!
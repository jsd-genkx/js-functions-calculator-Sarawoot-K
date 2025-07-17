"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
const add = (num1,num2) => num1+num2;
const subtract = (num1,num2) => num1-num2;
const multiply = (num1,num2) => num1*num2;
function divide(num1,num2){
    if (num2===0){return "Cannot divide by zero"}
    return num1/num2;
}

// const divide = (num1, num2) => num2 === 0 ? "Cannot divide by zero" : num1 / num2;

console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));
console.log(divide(10,0));

// Step 02: Create a Validation Function for Inputs
const validateInputs = (num1,num2) => {
    if (typeof num1 === "number" && typeof num2 === "number")
        {return null}
    else {return "Both inputs must be numbers"}
}

console.log(validateInputs(10, "a"));
console.log(validateInputs(10, 10));
console.log(validateInputs("b", "a"));
console.log(validateInputs("1","2"));


// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator (num1,num2,operation){
    if (operation === "add"){return num1+num2}
    if (operation === "subtract"){return num1-num2}
    if (operation === "multiply"){return num1*num2}
    if (operation === "divide"){return num1/num2}
    else {return "Invalid operation. Please use 'add', 'subtract', 'multiply'or 'divide'"}
}

// function calculator(num1, num2, operation) {
//   const validationError = validateInputs(num1, num2);
//   if (validationError) {
//     return validationError;
//   }
//   switch (operation) {
//     case "add":
//         return add(num1, num2);
//     case "subtract":
//         return subtract(num1, num2);
//     case "multiply":
//         return multiply(num1, num2);
//     case "divide":
//         return divide(num1, num2);
//     default: return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
//   }
// }


console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "divide"));
console.log(calculator(10, 0, "divide"));
console.log(calculator(10, 5, "unknown"));
// Write a JavaScript program that displays the largest integer among two integers.

let num1 = prompt("Enter the first integer: ");
let num2 = prompt("Enter the second integer: ");

if (num1 > num2) {
    console.log(num1 + " is the largest integer.");
} else if (num2 > num1) {
    console.log(num2 + " is the largest integer.");
} else {
    console.log("Both integers are equal.");
}
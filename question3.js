// Write a JavaScript function to find the largest of five numbers. Display an alert box to show the results.
//     Sample numbers : -5, -2, -6, 0, -1
//     Output : 0

function findLargest(num1, num2, num3, num4, num5) {
    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    if (num4 > largest) {
        largest = num4;
    }
    if (num5 > largest) {
        largest = num5;
    }
    alert("The largest number is " + largest);
}

findLargest(-5, -2, -6, 0, -1);
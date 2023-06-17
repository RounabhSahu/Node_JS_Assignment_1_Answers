// Write a JavaScript function to find the sign of the product of three numbers. Display an alert box with the specified sign.
//     Sample numbers : 3, -7, 2
//     Output : The sign is -

function signOfProduct(num1, num2, num3) {
    let product = num1 * num2 * num3;
    let sign = product < 0 ? "-" : (product > 0 ? "+" : "no");
    alert("The sign is " + sign);
}
signOfProduct(3, -7, 2);

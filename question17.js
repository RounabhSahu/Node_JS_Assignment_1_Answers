// Question: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.


function calculateSum(numbers, callback) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    callback(sum);
}

calculateSum([2, 4, 6, 8], function(sum) {
    console.log(sum);
});
// Question: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.
//     Example Input: multiplyByTwo(5, callback);

function multiplyByTwo(number, callback) {
    const res = number * 2;
    callback(res);
}

function callback(res) {
    console.log(res);
}

multiplyByTwo(5, callback);
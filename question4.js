// Question: Write a JavaScript program that uses a while loop to reverse a given number.

let n = 12345;
let r = 0;


while (n > 0) {
    let l = n % 10;
    r = r * 10 + l;
    n = Math.floor(n / 10);
}

console.log(r);
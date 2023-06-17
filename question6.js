// Write a JavaScript program to find the Armstrong numbers of 3 digits. Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

for (let i = 100; i <= 999; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
        let digit = num % 10;
        sum += digit ** 3;
        num = Math.floor(num / 10);
    }
    if (sum === i) {
        console.log(i);
    }
}
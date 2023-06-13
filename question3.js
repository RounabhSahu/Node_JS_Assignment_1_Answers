// Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the string: ", str => {
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' ||
            str[i] === 'i' || str[i] === 'o' ||
            str[i] === 'u') {
            vowels++;
        }
    }
    console.log('No. of Vowels : ',vowels);
    readline.close();
});

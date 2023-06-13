// Question: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.

function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 10) + 1;
        if (number < 5) {
            reject(new Error('Number is too low! Rejected'));
        } else {
            resolve(number);
        }
    });
}
getRandomNumber()
    .then(number => {
        console.log(number);
    })
    .catch(err => {
        console.log(err.message);
    });
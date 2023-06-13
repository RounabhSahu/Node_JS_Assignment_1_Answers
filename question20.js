// Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.

const fs = require('fs');

function checkFileExists(filePath) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    reject(err);
                } else if (stats.isFile()) {
                    resolve('File found and exists');
                } else {
                    reject(new Error('Path is not a valid file'));
                }
            });
        }, 1000);
    });
}

checkFileExists('/path/to/file.txt')
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

checkFileExists('mynewfile3.txt')
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
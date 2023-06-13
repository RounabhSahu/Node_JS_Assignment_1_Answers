// Question: Create a Node.js program that appends the text "Hello content!" to a file called "mynewfile1.txt" using the fs.appendFile() method.

const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
    if (err) throw err;
    console.log('Text appended to file');
});
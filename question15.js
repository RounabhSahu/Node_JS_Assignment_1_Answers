// Question: Create a Node.js program that renames a file called "mynewfile1.txt" to "myrenamedfile.txt" using the fs.rename() method.

const fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
    if (err) throw err;
    console.log('File renamed');
});
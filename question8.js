// Question:Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that returns the current date and time. The server should respond to incoming requests by displaying the current date and time.


    const http = require('http');
const myDateTime = require('./myDateTime');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const currentDate = myDateTime.getCurrentDateTime();
    res.end(`The current date and time is: ${currentDate}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
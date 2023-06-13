// Question: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.

const http = require('http');


const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello World!');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
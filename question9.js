// Question: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.


    const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('sampleFile.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
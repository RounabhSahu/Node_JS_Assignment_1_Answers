// Write a node js script using file system which will
// - create a new file
// - add data to a file
// - append data to a file
// - read an html file and display it on the browser

const fs = require('fs');
const http = require('http');

const htmlPart1 = `
<!DOCTYPE html>
<html>
<head>
	<title>Hello World</title>
</head>
<body>
	<h1>Hello World!
`;

const htmlPart2 = `</h1>
	<p>This is a test file.</p>
</body>
</html>
`;

fs.writeFile('mynewfile.txt', htmlPart1, (err) => {
    if (err) throw err;
    console.log('File created successfully');
});

fs.appendFile('mynewfile.txt', htmlPart2, (err) => {
    if (err) throw err;
    console.log('HTML code added to file successfully');
});

http.createServer((req, res) => {
    fs.readFile('mynewfile.txt', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
// What is a URL. Break it down into several parts that the url consists of. Use URL module to write a nodejs script to show the breakdown parts of a url as well.

const { URL } = require('url');

const url = new URL('https://www.example.com:8080/path/to/resource?key1=value1&key2=value2');

console.log('Protocol:', url.protocol,' --> Protocol - the protocol used to access the resource, such as http:// or https://.');
console.log('Domain:', url.hostname,' --> Domain - the domain name or IP address of the server hosting the resource.');
console.log('Port:', url.port,' --> Port - the port number on the server that the resource is hosted on (optional).');
console.log('Path:', url.pathname,' --> Path - the path to the resource on the server.');
console.log('Query:', url.searchParams.toString(),' --> Query string - optional key-value pairs that provide additional information about the resource.');
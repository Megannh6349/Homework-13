// include http module in the file
var http = require('http');

// create a server
http.createServer(function (req, res) {
    // http header
    // 200 - is the OK message
    // to respond with html content, 'Content-Type' should be 'text/html'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Node.js says hello!'); //write a response to the client
    res.end(); //end the response
}).listen(9000); //the server object listens on port 9000

// require express
var express = require('express');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
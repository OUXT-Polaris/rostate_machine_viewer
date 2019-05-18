#!/usr/bin/env node
'use strict';
const rosnodejs = require('rosnodejs');
var fs = require('fs');
const rostate_machine_msgs = rosnodejs.require('rostate_machine').msg;

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
 
var server = http.createServer();
server.on('request', doRequest);


function doRequest(req, res) {
    fs.readFile('index.html', 'utf-8' , doReard );
    function doReard(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    }
    
}
 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
server.listen(3000);
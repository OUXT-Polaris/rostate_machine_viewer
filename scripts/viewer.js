#!/usr/bin/env node
'use strict';

class RostateMachineViewer
{
    constructor(package_dir,target_namespace)
    {
        this.package_dir = package_dir;
        this.target_namespace = target_namespace;
        const http = require('http');
        this.hostname = '127.0.0.1';
        this.port = 3000;
        this.server = http.createServer();
        this.initRos();
        //const rostate_machine_msgs = rosnodejs.require('rostate_machine').msg;
    }
    async initRos()
    {
        const rosnodejs = require('rosnodejs');
        await rosnodejs.initNode('viewer')
        this.nh = rosnodejs.nh;
    }
    run()
    {
        this.server.on('request', this.doRequest);
        this.server.listen(this.port, this.hostname, () => 
        {
            console.log(`Server running at http://${this.hostname}:${this.port}/`);
        });
    }
    doRequest(req,res)
    {
        var fs = require('fs');
        //fs.readFile(this.package_dir+'/scripts/index.html', 'utf-8' , doReard );
        //console.log(this.package_dir+'/scripts/index.html')
        function doReard(err, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    }
}

var package_dir = process.argv[2];
var target_namespace = process.argv[3];
var viewer = new RostateMachineViewer(package_dir,target_namespace);
viewer.run();
/*
for(var i = 0;i < process.argv.length; i++)
{
    console.log("argv[" + i + "] = " + process.argv[i]);
}
*/
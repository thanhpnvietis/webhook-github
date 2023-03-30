var secret = "testSecret";
var repo = "/var/www/tool-upload-img/webhook-github";
let http = require('http');
let crypto = require('crypto');
const exec = require('child_process').exec;
http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        // let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');
        // console.log(req.headers['x-hub-signature'] == sig);
        console.log(chunk.toString());
        // if (req.headers['x-hub-signature'] == sig) {
        //     console.log(4);
        // }
    });
    req.on('issues', function(chunk) {
        // let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');
        // console.log(req.headers['x-hub-signature'] == sig);
        console.log('issues');
        // if (req.headers['x-hub-signature'] == sig) {
        //     console.log(4);
        // }
    });


    res.end();
}).listen(9084);
var secret = "testSecret";
var repo = "/var/www/tool-upload-img/webhook-github";
let http = require('http');
let crypto = require('crypto');
const exec = require('child_process').exec;
http.createServer(function (req, res) {
    req.on('data', function(chunk) {

        const signature = `sha1=${crypto
            .createHmac('sha1', secret)
            .update(chunk)
            .digest('hex')}`;
    
        const isAllowed = req.headers['x-hub-signature'] === signature;
            
        const body = JSON.parse(chunk);
        console.log(body);
        const isMaster = body?.ref === 'refs/heads/master';

        if (isAllowed && isMaster) {
        // do something
        }
    });
    req.on('payload', function(chunk) {

    });

    res.end();
}).listen(9084);
var express = require('express'); 
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
const token = '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';
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.xml({
    limit: '10MB', // Reject payload bigger than 10 MB 
    xmlParseOptions: {
        normalize: true, // Trim whitespace inside text nodes 
        normalizeTags: false, // Transform tags to lowercase 
        explicitArray: false // Only put nodes in array if >1 
    }
}));

app.post('/', function (request, response) {
    
    response.send(request.body);
    console.log(request.body);
});

var server = app.listen(9084,function (params) {
    console.log(9084)
});
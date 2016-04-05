var express = require('express');
var app = express();
var fs = require("fs");
var albums = fs.readFileSync('sample-data.json');


app.get('/api/albums', function(req, res) {
	res.json(JSON.parse(albums));
});


app.listen(3000, function() {
	console.log('the server start');
})
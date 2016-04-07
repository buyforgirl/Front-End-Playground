var express = require('express')
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	// body...
}) 

app.listen(3000, function() {
	console.log("successfully");
})

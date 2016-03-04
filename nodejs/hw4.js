var app = require('http');

function start(route) {
	function onRequest(request, respond) {
		var pathname = request.url;
		var matrix = route(pathname);
		respond.writeHead(200, {"Content-Type": "text/plain"});
		for (var i = 0; i < matrix.length; i++) {
			respond.write(matrix[i].join(',') + '\n');
		}	 
		respond.end();
	}

	app.createServer(onRequest).listen(8888);
}

exports.start_server = start;
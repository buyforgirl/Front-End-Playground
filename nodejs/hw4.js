var app = require('http');

function start(route, handle) {
	function onRequest(request, respond) {
		var pathname = request.url;
		var content = route(pathname, handle);
		respond.writeHead(200, {"Content-Type": "text/html"});
	 	respond.write(content);
		respond.end();
	}

	app.createServer(onRequest).listen(8888);
}

exports.start_server = start;
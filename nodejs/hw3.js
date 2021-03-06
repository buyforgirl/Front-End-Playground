var app = require('http');

function start() {
	app.createServer(onRequest).listen(8888);

	function onRequest(request, respond) {
		if (request.url.indexOf('/matrix/' !== -1)) {
			respond.writeHead(200, {"Content-Type": "text/plain"});
			var url = request.url.split('/');
			var n = parseInt(url[url.length - 1]);
			var matrix = spiralMatrix(n);
			for (var i = 0; i < matrix.length; i++) {
				respond.write(matrix[i].join(',') + '\n');
			}	
			respond.end();
		} else {
			respond.end();
		}
	}

	function spiralMatrix(n) {
		var matrix = new Array(n);
		for (var i = 0; i < n; i++) {
			matrix[i] = new Array(n);
		}
		helper(matrix, n, 0, 1);
		return matrix;
	}

	function helper(matrix, size, offset, count) {
		if (size == 0) {
			return;
		}
		if (size == 1) {
			matrix[offset][offset] = count++;
			return;
		}
		for (var i = 0; i < size - 1; i++) {
			matrix[0 + offset][i +offset] = count++;

		}
		for (var i = 0; i < size - 1; i++) {
			matrix[i + offset][size - 1 + offset] = count++;
		}
		for (var i = size - 1; i > 0; i--) {
			matrix[size - 1 +offset][i + offset] = count++;
		}
		for (var i = size - 1; i > 0; i--) {
			matrix[i + offset][0 + offset] = count++;
		}
		helper(matrix, size - 2, offset + 1, count);
	}
}

exports.start_server = start;
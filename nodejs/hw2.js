var app = require('http');
app.createServer(function(request, respond) {
	respond.writeHead(200, {"Content-Type": "text/plain"});
	var matrix = spiralMatrix(5);
	for (var i = 0; i < matrix.length; i++) {
		respond.write(matrix[i].join(',') + '\n');
	}	
	//respond.write("Hello World");
	respond.end();
}).listen(8888);


function spiralMatrix(n) {
	var matrix = new Array(n);
	for (var i = 0; i < n; i++) {
		matrix[i] = new Array(n);
	}
	console.log(matrix);
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

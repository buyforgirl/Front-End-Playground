function index() {
	var content = '';
	content = '<html>\
			   <head>\
				   <title>Document</title>\
			   </head>\
			   <body>\
			   	  <form action="/matrix" method="get">\
				  <input type="text" name="matrixNumber"/><br>\
				  <input type="submit" value="Submit">\
				  </form>';
	contentDiv = '<div>';
	if (arguments.length !== 0) {
		var param = arguments[0]
		var n = parseInt(param.slice(param.indexOf('=') + 1));
		var matrix = spiralMatrix(n);
		for (var i = 0; i < matrix.length; i++) {
			contentDiv += matrix[i].join(',') + '<br/>';
		}
	}
	contentEnd = '</div> \
				  </body>\
				   </html>';
	content += contentDiv + contentEnd;
	return content;
}

function spiralMatrix(n) {
	if (n > 0) {
		var matrix = new Array(n);
		for (var i = 0; i < n; i++) {
			matrix[i] = new Array(n);
		}
		helper(matrix, n, 0, 1);
		return matrix;
	} 
	return [];
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


exports.index = index;
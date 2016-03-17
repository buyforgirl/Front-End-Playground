// 2.10. Write a JavaScript function which returns the n rows by n columns identity matrix
function identityMatrix(n) {
	if (n <= 0) {
		return [];
	}
	var matrix = [];
	for (var i = 0; i < n; i++) {
		var col = [];
		for (var j = 0; j < n; j++) {
			if (i === j) {
				col.push(1);
			} else {
				col.push(0);
			}
		}
		matrix.push(col);
	}
	return matrix;
}

console.log(identityMatrix(5));
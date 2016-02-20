function printOrder(n) {
	var array = new Array(n);
	for (var i = 0; i < n; i++) {
		array[i] = new Array(n);
	}
	var count = 1;
	var level = 0;
	for (var level = 0; level <= Math.floor(n / 2); level++) {
		if (level === n - level - 1) {
			array[level][level] = count;
			break;
		}
		// from left top to right top
		for (var i = level; i < n - level - 1; i++) {
			array[level][i] = count++;
		}
		// from right top to right down
		for (var i = level; i < n - level - 1; i++) {
			array[i][n - level - 1] = count++;
		}
		// from right bottom to left bottom
		for (var i = n - level - 1; i > level; i--) {
			array[n - level - 1][i] = count++;
		}
		// from left bottom to left top
		for (var i = n - level - 1; i > level; i--) {
			array[i][level] = count++;
		}
	}
	return array;
}

console.log(printOrder(4));
console.log();
console.log(printOrder(5));
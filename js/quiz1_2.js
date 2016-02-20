function printOrder(n) {
	var array = new Array(n);
	for (var i = 0; i < n; i++) {
		array[i] = new Array(n);
	}
	var count = 1;
	dfs(n, array, count, 0);
	return array;
}

function dfs(n, array, count, level) {
	// base case
	if (level === Math.floor(n / 2)) {
		array[level][level] = count;
		return;
	}
	//recursive way
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
	dfs(n, array, count, level + 1);
}

console.log(printOrder(4));
console.log();
console.log(printOrder(100));

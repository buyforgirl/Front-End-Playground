// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function coinChange(amount, array) {
	var result = [];
	dfs(amount, array, result, 0);
	return result;
}

function dfs(amount, array, result, level) {
	if (amount === 0) {
		return;
	}
	var max = Math.floor(amount / array[level]);
	for (var i = 0; i < max; i++) {
		result.push(array[level]);
	}
	dfs(amount - max * array[level], array, result, level + 1);
}

console.log(coinChange(46, [25, 10, 5, 2, 1]));

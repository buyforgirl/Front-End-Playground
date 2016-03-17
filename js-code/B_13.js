//2.13. Write a JavaScript function to compute the factors of a positive integer. 
//2.13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(num) {
	var array = [];
	for (var i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
		if (num % i === 0) {
			array.push(i);
			if (i * i !== num) {
				array.push(num / i);
			}
		}
	}
	array.sort(function(x, y) {
		if (x === y) {
			return 0;
		}
		return x < y ? -1 : 1;
	});
	return array;
}
console.log(factors(16));
//3.4. Write a JavaScript program to compute the sum of an array of integers.  
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21 
function sum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
console.log(sum([1, 2, 3, 4, 5, 6]));
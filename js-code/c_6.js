//6. Write a JavaScript program to get the first n Fibonacci numbers.  
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two.
function fibonacci(n) {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(10);


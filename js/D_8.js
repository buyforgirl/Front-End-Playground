// 8. According to Wikipedia a happy number is defined by the following process : 
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in 
// a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, 
// while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.    
function happyNumber (num) {
	var map = {};
	var m, n;
	while (num !== 1 && !map[num]) {
		map[num] = true;
		m = 0;
		while (num > 0) {
			n = num % 10;
			m += n * n;
			num = Math.floor(num / 10);
		}
		num = m;
	}
	return num === 1;
}

(function checkFiveHappyNumber() {
	var count = 0;
	var start = 1;
	while (count < 5) {
		if (happyNumber(start)) {
			console.log(start);
			count++;
		}
		start++;
	}
})();
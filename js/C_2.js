// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.  
function gcd(one, two) {
	//base case
	if (one === 0) {
		return two;
	} else if (two === 0) {
		return one;
	} 
	
	if (one > two) {
		return gcd(one - two, two);
	} else {
		return gcd(one, two - one);
	}
}

console.log(gcd(252, 105));
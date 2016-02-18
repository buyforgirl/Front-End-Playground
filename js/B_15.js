//2.15. Write a JavaScript function to compute the value of b^n where n is the exponent 
// and b is the bases. Accept b and n from the user and display the result. 
function power(b, n) {
	if (b === 0 && n === 0) {
		return 0;
	}
	if (n === 1) {
		return b;
	}
	var flag = (n >= 0);
	if (!flag) {
		n = -n;
	}
	var result;
	var half = power(b, Math.floor(n / 2));
	if (n % 2 === 0) {
		result = half * half;
	} else {
		result = half * half * b;
	}
	return flag ? result : 1 / result; 
}

console.log(power(2, 11));
console.log(power(-2, 5));
console.log(power(2, -5));
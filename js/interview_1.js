// add(2, 5);
// add(2)(5);
function add() {
	if (arguments.length === 1) {
		var one = arguments[0];
		return function(two) {
			return one + two;
		};
	} else {
		return arguments[0] + arguments[1];	
	}
}

console.log(add(2, 5));
console.log(add(2)(5));
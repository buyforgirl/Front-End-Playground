//2.19. Write a JavaScript function that returns array elements larger than a number. 
Array.prototype.largerThan = function(number) {
	var result = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] > number) {
			result.push(this[i]);
		}
	}
	return result;
}
console.log([1,2,3,6,8,2,0,10,4,5,6].largerThan(3));
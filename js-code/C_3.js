//3.3. Write a JavaScript program to get the integers in range (x, y).  
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]
function getRange(x, y) {
	var array = [];
	for (var i = x + 1; i < y; i++) {
		array.push(i);
	}
	return array;
}
var result = getRange(2, 9).join(', ');
console.log(result);
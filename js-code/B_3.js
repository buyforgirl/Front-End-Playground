//2.3. Write a JavaScript function that generates all combinations of a string.
//Example string : 'dog'
//Expected Output : d,do,dog,o,og,g
function combination(str) {
	var array = str.split('');
	var result = [];
	helper(array, [], result, 0);
	return result;
}

function helper(array, list, result, level) {
	if (array.length === level) {
		result.push(list.join(''));
		return;
	}
	list.push(array[level]);
	helper(array, list, result, level + 1);
	list.pop();

	helper(array, list, result, level + 1);
}

var result = combination('dog');
console.log(result);
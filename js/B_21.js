//2.21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an 
//array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2]]
function subset(array, size) {
	if (array.length < size) {
		return [];
	}
	var result = [];
	helper(result, array, size, [], 0);
	return result;
}

function helper(result, array, size, list, level) {
	if (level === array.length) {
		if (list.length === size) {
			result.push(list.slice());
		}
		return;
	} 
	list.push(array[level]);
	helper(result, array, size, list, level + 1);
	list.pop();

	helper(result, array, size, list, level + 1);
}

console.log(subset([1, 2, 3] , 2));
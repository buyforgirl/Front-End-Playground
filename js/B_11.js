//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4 
function findLowestGreatest(array) {
	if (array.length < 2) {
		return [];
	}
	array.sort();
	var i = 1;
	while (i < array.length) {
		if (array[i] != array[0]) {
			break;
		}
		i++;
	}
	var j = array.length - 2;
	while (j >= 0) {
		if (array[j] != array[array.length - 1]) {
			break;
		}
		j--;
	}
	return [array[i], array[j]];
}
console.log(findLowestGreatest([1,2,3,4,5]));
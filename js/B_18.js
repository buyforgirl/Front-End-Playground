//2.18. Write a function for searching JavaScript arrays with a binary search. 
//Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
//[1,2, 3, 4, 5, 6].binarySearch(5) 
// > 4
Array.prototype.binarySearch = function(target) {
	var left = 0;
	var right = this.length - 1;
	while (left <= right) {
		var mid = left + Math.floor((right - left) / 2);
		if (this[mid] === target) {
			return mid;
		} else if (this[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return -1;
}

console.log([1,2, 3, 4, 5, 6].binarySearch(5));
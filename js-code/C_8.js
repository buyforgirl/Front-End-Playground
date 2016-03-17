//3.8. Write a JavaScript program for binary search.  
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
Array.prototype.br_search = function(target) {
	var start = 0;
	var end = this.length - 1;
	while (start <= end) {
		var mid = Math.floor(start + (end - start) / 2);
		if (this[mid] == target) {
			return mid;
		} else if (this[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
}

l= [0,1,2,3,4,5,6];  
  
console.log(l.br_search(5));  


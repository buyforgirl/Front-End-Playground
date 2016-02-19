// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function occurrences(str) {
	var map = {};
	for (var i = 0; i < str.length; i++) {
		if (map.hasOwnProperty(str.charAt(i))) {
			map[str.charAt(i)] += 1;
		} else {
			map[str.charAt(i)] = 1;
		}
	}
	return map;
}

console.log(occurrences('abacddbec'));
//2.23. Write a JavaScript function to find the first not repeated character. 
//Sample arguments : 'abacddbec' 
//Expected output : 'e' 
function firstRepeated(str) {
	for (var i = 0; i < str.length; i++) {
		var count = 0;
		for (var j = 0; j < str.length; j++) {
			if (str.charAt(i) === str.charAt(j)) {
				count++;
			}
		}
		if (count === 1) {
			return str.charAt(i);
		}
	}
	return '';
}

console.log(firstRepeated('abacddbec'));

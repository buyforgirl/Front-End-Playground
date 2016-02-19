//2.16. Write a JavaScript function to extract unique characters from a string. 
//Example string : "thequickbrownfoxjumpsoverthelazydog"
//Expected Output : "thequickbrownfxjmpsvlazydg"
function uniqueString(str) {
	var unique = '';
	for (var i = 0; i < str.length; i++) {
		if (unique.indexOf(str.charAt(i)) === -1) {
			unique += str.charAt(i); 
		}
	}
	return unique;
}
console.log(uniqueString("thequickbrownfoxjumpsoverthelazydog"));
//2.6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//Example string : 'Web Development Tutorial'
//Expected Output : 'Development'
function longestWord(str) {
    var array = str.split(' ');
    var longest = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}

console.log(longestWord('Web Development Tutorial'));
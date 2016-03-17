//22. Write a JavaScript function that accepts two arguments, a string and a letter and the
//function will count the number of occurrences of the specified letter within the string.
//Sample arguments : 'w3resource.com', 'o'
//Expected output : 2
function occurrences(str, letter) {
    if (typeof letter !== 'string' || letter.length !== 1) {
        return -1;
    }
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count++;
        }
    }
    return count;
}
console.log(occurrences('w3resource.com', 'o'));
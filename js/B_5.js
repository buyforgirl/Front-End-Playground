//2.5. Write a JavaScript function that accepts a string as a parameter and converts the
//first letter of each word of the string in upper case.
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '
function uppercase(str) {
    var array = str.split(' ');
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return newArray.join(' ');
}

console.log(uppercase('the quick brown fox'));
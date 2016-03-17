//2.7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count
// 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function vowelsCount(str) {
    var map = "aeiouAEIOU";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (map.indexOf(str.charAt(i)) != -1) {
            count++;
        }
    }
    return count;
}
console.log(vowelsCount('The quick brown fox'));
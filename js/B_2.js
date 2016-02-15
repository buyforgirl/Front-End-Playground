// 2.2 Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function palindrome(str) {
    var i = 0;
    var j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) {
            return false;
        }
        i = i + 1;
        j = j - 1;
    }
    return true;
}

console.log(palindrome("abcbq"));
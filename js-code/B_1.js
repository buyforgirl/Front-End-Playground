//1. Write a JavaScript function that reverse a number.
//Example x = 32243;
//Expected Output : 34223
function reverse(n) {
    n = n + "";
    n = n.split("").reverse().join("");
    console.log(n);
}
reverse(32243);
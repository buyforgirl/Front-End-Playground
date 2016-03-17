//2.8. Write a JavaScript function that accepts a number as a parameter and check the number
// is prime or not.

//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    var end = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= end; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(45));
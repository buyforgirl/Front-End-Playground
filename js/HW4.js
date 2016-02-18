//Write a JS function:
// there are unlimited numbers of 1c, 5c, 25c, 50c
// pick 48 coins to have 1 dollar
// identify 3 solutions
// print out 3 solutions, each of which has 48 coins.
function pickCoins(array, result, count) {
    if (result.length === 4 && count === 0) {
        if (checkSum(result, array, 100)) {
            console.log(result.join(','));
            return;
        }
    } else if (count < 0) {
        return;
    }
    var max = Math.floor(100 / array[result.length]);
    for (var i = 0; i <= max; i++) {
        result.push(i);
        pickCoins(array, result, count - i);
        result.pop();
    }
}

function checkSum(result, array, sum) {
    var resultSum = 0;
    for (var i = 0; i < result.length; i++) {
        resultSum += result[i] * array[i];
    }
    return resultSum === sum;
}

pickCoins([1, 5, 10, 25], [], 48);


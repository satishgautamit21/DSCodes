// we will use slow and fast pointers logic here and return true if the number is happy
// else return false


function getSquareSum(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

function happyNumber(n) {
    let slow = n;
    let fast = n;
    do {
        slow = getSquareSum(slow);
        fast = getSquareSum(getSquareSum(fast));
    } while (slow !== fast);
    return slow === 1;
}
    
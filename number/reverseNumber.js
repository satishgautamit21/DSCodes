// need to handle negative numbers
// need to handle overflow 32-bit integer range: -2^31 to 2^31 - 1

function reverseNumber(num) {
    let rev = 0;
    let sign = num < 0 ? -1 : 1;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    num = Math.abs(num);
    while (num > 0) {
        let rem = num % 10;

        if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && rem > 7)) {
            return 0;
        }
        if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && rem < -8)) {
            return 0;
        }
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev * sign;
}
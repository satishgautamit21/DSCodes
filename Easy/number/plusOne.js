function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {

        // If the current digit is not 9, increment it and return
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }

    // If all digits are 9, add a leading 1
    return [1, ...digits];
}
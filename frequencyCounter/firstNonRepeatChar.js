function firstNonetRepeatChar(str) {
    const freqCounter = {};

    for (let char of str) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }

    for (let char of str) {
        if (freqCounter[char] === 1) {
            return char;
        }
    }
    return null;
}
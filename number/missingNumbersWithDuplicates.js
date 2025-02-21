function missingNumbersInArrayWithDuplicates(arr) {
    const set = new Set(arr);
    const missingNumbers = [];
    for (let i = 1; i <= arr.length; i++) {
        if (!set.has(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
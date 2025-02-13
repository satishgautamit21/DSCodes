function ransomNote(note, magazine) {
    const frequencyCounter = {};
    for (let char of note) {
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
    }
    for (let char of magazine) {
        if (frequencyCounter[char]) {
            frequencyCounter[char] -= 1;
        }
    }
    for (let char in frequencyCounter) {
        if (frequencyCounter[char] !== 0) {
            return false;
        }
    }
    return true;
}
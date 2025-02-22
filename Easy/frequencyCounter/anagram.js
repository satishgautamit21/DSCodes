function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const frequency ={}
    for (let char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!frequency[char]) {
            return false;
        }
        frequency[char] -= 1;
    }
    return true;
}
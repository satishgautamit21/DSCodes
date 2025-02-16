function groupAnagrams(strs) {
    const anagramMap = new Map();
    for (let str of strs) {
        let sortedStr = str.split("").sort().join("");
        if (anagramMap.has(sortedStr)) {
            anagramMap.get(sortedStr).push(str);
        } else {
            anagramMap.set(sortedStr, [str]);
        }
    }
    return [...anagramMap.values()];
}
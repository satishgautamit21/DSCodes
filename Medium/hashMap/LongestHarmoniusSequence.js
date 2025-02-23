// https://leetcode.com/problems/longest-harmonious-subsequence/

function lonestHarmoniousSequence(arr) {
    const freq = new Map();
    let max = 0;
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    for (let num of arr) {
        if (freq.has(num + 1)) {
            max = Math.max(max, freq.get(num) + freq.get(num + 1));
        }
    }
    return max;
}
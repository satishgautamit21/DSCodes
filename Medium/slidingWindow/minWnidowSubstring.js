// Problem Statement: https://leetcode.com/problems/minimum-window-substring/

function minWindow(s, t) {
    if (t.length > s.length) return ""; // Edge case

    const tFreq = {}; // Frequency map of t
    for (let char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    let required = Object.keys(tFreq).length; // Unique chars required
    let formed = 0; // Unique chars currently in window
    const windowCounts = {}; // Frequency map for sliding window

    let l = 0, r = 0;
    let minLen = Infinity, minStart = 0;

    while (r < s.length) {
        // Expand the window
        let char = s[r];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        // If a character's frequency matches that in t, increase `formed`
        if (tFreq[char] && windowCounts[char] === tFreq[char]) {
            formed++;
        }

        // Try to contract the window
        while (formed === required) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                minStart = l;
            }

            // Remove leftmost character and adjust counts
            let leftChar = s[l];
            windowCounts[leftChar]--;

            if (tFreq[leftChar] && windowCounts[leftChar] < tFreq[leftChar]) {
                formed--;
            }

            l++; // Move left pointer
        }

        r++; // Expand right pointer
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Test Cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
console.log(minWindow("ab", "a")); // Output: "a"
console.log(minWindow("abc", "bc")); // Output: "bc"

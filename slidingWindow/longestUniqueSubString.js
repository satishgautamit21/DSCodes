function longestUniqueSubString(str) {
    let max = 0;
    let seen = new Set();
    let left = 0;
    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left]);
            left++;
        }
        seen.add(str[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
}

/* 
    Time complexity: O(n)
    Space complexity: O(n)
*/
function longestSubstringTwoDistinct(s) {
    const map = new Map();
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < s.length) {
        map.set(s[right], map.get(s[right]) + 1 || 1);
        right++;
        while (map.size > 2) {
            map.set(s[left], map.get(s[left]) - 1);
            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}
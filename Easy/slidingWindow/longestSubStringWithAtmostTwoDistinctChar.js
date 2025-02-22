// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

function longestSubstringTwoDistinct(s) {
    const map = new Map();
    let left = 0;
    let max = 0;

     for (let right = 0; right < s.length; right++) {
        map.set(s[right], map.get(s[right]) + 1 || 1);

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
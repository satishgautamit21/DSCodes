
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function longestUniqueSubString(str) {
    let max = 0;
    let seen = new Set();
    let left = 0;
    for (let right = 0; right < str.length; right++) {

        // we will keep deleting characters from the set until we find a duplicate
        // then we will update the left pointer. at the end left will be the index of the 
        // last unique character
        while (seen.has(str[right])) {
            seen.delete(str[left]);
            left++;
        }
        seen.add(str[right]);

        // here +1 is to include the current character
        max = Math.max(max, right - left + 1);
    }
    return max;
}

/* 
    Time complexity: O(n)
    Space complexity: O(n)
*/
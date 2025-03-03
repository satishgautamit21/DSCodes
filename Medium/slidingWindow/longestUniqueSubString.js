
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

// solution 2 using map

function longestUniqueSubString(str) {
    let max = 0;
    let charMap = new Map();
    let left = 0;
    for (let right = 0; right < str.length; right++) {
        if (charMap.has(s[right])) {

            // Here instead of deleting item like in set we ditrectly update the index 
            // of the last unique character
            left = Math.max(left, charMap.get(s[right]) + 1);
        }
        charMap.set(s[right], right);
        max = Math.max(max, right - left + 1);
    }
    return max;
}
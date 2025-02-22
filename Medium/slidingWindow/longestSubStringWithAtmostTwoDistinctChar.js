// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

function longestSubstringTwoDistinct(s) {
    const charCount = new Map();
    let left = 0;
    let max = 0;

     for (let right = 0; right < s.length; right++) {
        charCount.set(s[right], charCount.get(s[right]) + 1 || 1);

        // if charCount size is more than 2, then we will shrink the window
        // eg "aaabbcc" when c added to the map charCount size will be 3
        // so we will shrink the window
        while (charCount.size > 2) {

            // reduce the count of the character at the left pointer
            charCount.set(s[left], charCount.get(s[left]) - 1);

            // if the count of the character at the left pointer is 0, then we will delete
            // the character from the map
            if (charCount.get(s[left]) === 0) {
                charCount.delete(s[left]);
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}


// Note we can solve this problem in O(n) time and O(1) space using Map. We can use object as well 
// but it will take O(n). HEre only thing is geeting count of object key requre Object.keys(obj).length
// while map it is just map.size which make it efficient.
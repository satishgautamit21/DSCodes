function longestUniqueSubString(str) {
    let max = 0;
    let seen = new Set();
    let left = 0;
    for (let right = 0; right < str.length; right++) {

        // if the current character is present in the set
        // we will delete the character from the set
        // and increment the left pointer
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
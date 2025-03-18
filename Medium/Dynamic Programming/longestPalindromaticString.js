// https://leetcode.com/problems/longest-palindromic-substring/
// Expand around center


/*
    It expands outward from the given left and right indices as long as the characters match.
    It stops when:
    left becomes out of bounds (left < 0).
    right exceeds the string length (right >= str.length).
    The characters at left and right do not match.
    Since the last valid palindrome expansion goes one step beyond, we return [left + 1, right].
*/
function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return [left + 1, right];
}

// provide simple solution
function longestPalindromicString(str) {
    // Initially, longest = [0, 1], meaning we consider the first character as the longest palindrome.
    let longest = [0, 1]; // Stores the start and end index of the longest palindrome
    for (let i = 0; i < str.length; i++) {

        // Expands around the single character at index i.
        // This finds palindromes like "racecar", "aba", etc.
        const odd = expandAroundCenter(str, i, i);

        // Expands around two consecutive characters (i, i+1).
        // This finds palindromes like "bb", "abba", etc.
        const even = expandAroundCenter(str, i, i + 1);
        if (odd[1] - odd[0] > longest[1] - longest[0]) {
            longest = odd;
        }
        if (even[1] - even[0] > longest[1] - longest[0]) {
            
            longest = even;
        }
    }
    return str.slice(longest[0], longest[1]);
}


console.log(longestPalindromicString("babad")); // "bab" or "aba"
console.log(longestPalindromicString("cbbd"));  // "bb"
console.log(longestPalindromicString("a"));     // "a"
console.log(longestPalindromicString("ac"));    // "a" or "c"

/*
    Complexity Analysis:
Time Complexity: 𝑂(𝑁^2) (Each character is expanded in worst case O(N) and there are O(N) iterations)

Space Complexity: O(1) (Only a few variables are used, no extra data structures)

*/
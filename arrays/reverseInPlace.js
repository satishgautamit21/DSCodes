// Problem Statement: https://leetcode.com/problems/reverse-string/

function reverseInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}
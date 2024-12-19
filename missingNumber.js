/* Find the missing number in a sequence from 0 to n. */

function misssingNumber(nums) {
    let n = nums.length;
    let sum = n * (n + 1) / 2;
    for (let i = 0; i < n; i++) {
        sum -= nums[i];
    }
    return sum;
}

/* 
    Time complexity: O(n)
    Space complexity: O(1)
*/
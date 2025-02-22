// https://leetcode.com/problems/minimum-size-subarray-sum/

function smallestSubArray(nums, target) {
    let sum = 0;
    let minLen = Infinity;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

// Time complexity: O(n)
// Space complexity: O(1)
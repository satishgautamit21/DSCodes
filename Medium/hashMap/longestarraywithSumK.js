// Find Maximum Length Subarray with Sum K. Here array can have -ve values.

function maxSubArrayLen(nums, k) {
    let sumIndex = new Map(); // Stores (prefixSum → index)
    let runningSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        // If exact sum is found
        if (runningSum === k) {
            maxLength = i + 1; // Update maxLength from start to i
        }

        // Check if (runningSum - k) exists in the map
        if (sumIndex.has(runningSum - k)) {
            maxLength = Math.max(maxLength, i - sumIndex.get(runningSum - k));
        }

        // Store the first occurrence of runningSum
        if (!sumIndex.has(runningSum)) {
            sumIndex.set(runningSum, i);
        }
    }

    return maxLength;
}

// Example Usage:
let nums = [1, -1, 5, -2, 3];
let k = 3;
console.log("Max Length Subarray:", maxSubArrayLen(nums, k)); // Output: 4

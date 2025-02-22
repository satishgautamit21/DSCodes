// Given a binary array nums, return the maximum length of a contiguous subarray 
// with an equal number of 0 and 1.

function findMaxLength(nums) {
    let sumIndexMap = new Map();
    sumIndexMap.set(0, -1); // Base case: sum = 0 at index -1

    let sum = 0, maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += (nums[i] === 0) ? -1 : 1; // Convert 0 -> -1

        if (sumIndexMap.has(sum)) {
            // If sum was seen before, update maxLen
            maxLen = Math.max(maxLen, i - sumIndexMap.get(sum));
        } else {
            // Store the first occurrence of sum
            sumIndexMap.set(sum, i);
        }
    }

    return maxLen;
}

// Test Cases
console.log(findMaxLength([0,1])); // Output: 2
console.log(findMaxLength([0,1,0])); // Output: 2
console.log(findMaxLength([0,1,1,0,1,1,1,0])); // Output: 4
console.log(findMaxLength([0,0,1,1,0,1,1])); // Output: 6
console.log(findMaxLength([1,1,1,0,0,0,1,0,1])); // Output: 8

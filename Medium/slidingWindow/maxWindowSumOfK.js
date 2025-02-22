// Find Maximum Sum Subarray of Size K
function maxSumSubarrayK(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumSubarrayK([2, 1, 5, 1, 3, 2], 3)); // Output: 9 (subarray [5,1,3])
console.log(maxSumSubarrayK([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // Output: 17 (subarray [8,9])
console.log(maxSumSubarrayK([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3)); // Output: 16 (subarray [8,1,7])
console.log(maxSumSubarrayK([1, 2], 3)); // Output: null (k > array size)
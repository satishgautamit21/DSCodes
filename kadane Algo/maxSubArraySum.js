

function maxSubArraySum(arr) {
    // Initialize the maximum subarray sum
    let maxSum = arr[0];

    // Initialize the current subarray sum
    let currSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // This decides whether to extend the current subarray or start a new one. 
        currSum = Math.max(arr[i], currSum + arr[i]);

        // Update the maximum subarray sum
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}
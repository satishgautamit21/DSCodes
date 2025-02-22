// Find Maximum Average Subarray – Find the contiguous subarray of size k with the 
// highest average.

function maxAveragewithWindowK(arr, k) {
    let maxAverage = 0;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxAverage = windowSum / k;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxAverage = Math.max(maxAverage, windowSum / k);
    }
    return maxAverage;
}

console.log(maxAveragewithWindowK([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(maxAveragewithWindowK([1, 12, -5, -6, 50, 3], 2)); // 37.5
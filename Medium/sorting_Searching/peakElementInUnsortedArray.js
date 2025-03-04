// https://leetcode.com/problems/find-peak-element/

function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // If mid element is smaller than its right neighbor, move right
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } 
        // Otherwise, move left
        else {
            right = mid;
        }
    }
    
    // 'left' (or 'right') will point to a peak element
    return left;
}

// Test Cases
console.log(findPeakElement([1, 2, 3, 1]));       // Output: 2 (index of peak '3')
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5 or 1 (index of peak)
console.log(findPeakElement([10, 20, 15, 2, 23, 90, 67])); // Output: 1 or 5
console.log(findPeakElement([1]));               // Output: 0 (only one element)
console.log(findPeakElement([3, 2, 1]));         // Output: 0 (peak at the start)
console.log(findPeakElement([1, 2, 3]));         // Output: 2 (peak at the end)

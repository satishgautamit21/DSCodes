function searchWithinSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        
        // When the middle element (arr[mid]) is not the target, we must determine which 
        // half of the array is sorted and then decide where to search next.

         // Check which half is sorted
        if (nums[left] <= nums[mid]) { // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) { // Target is in the left half
                right = mid - 1;
            } else {  // Target is in the right half
                left = mid + 1;
            }
        } else {  // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) { // Target is in the right half
                left = mid + 1;
            } else { // Target is in the left half
                right = mid - 1;
            }
        }
    }
    return -1;
}
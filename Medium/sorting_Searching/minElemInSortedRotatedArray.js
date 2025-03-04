function minElemInSortedArray(nums) {
    let left = 0;
    let right = nums.length - 1;

    // when the array is not rotated
    if (nums[left] < nums[right]) {
        return nums[left];
    }
    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}
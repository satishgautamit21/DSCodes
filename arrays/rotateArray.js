function rotateArray(nums, k) {
    return [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)];
}
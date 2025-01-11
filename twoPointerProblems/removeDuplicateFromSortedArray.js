function removeDuplicatesFromSortedArray(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i += 1;
            nums[i] = nums[j];
        }
    }
    nums.length = i + 1;
    return nums;
}

console.log("remove duplicates ", removeDuplicatesFromSortedArray([1, 1, 2]));
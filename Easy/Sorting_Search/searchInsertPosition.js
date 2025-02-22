// https://leetcode.com/problems/search-insert-position/

function searchInsertPosition(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // if the target is found, return the index
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

console.log(searchInsertPosition([1, 3, 5, 6], 5)); // 2
console.log(searchInsertPosition([1, 3, 5, 6],4)); // 2 here last return statemet execute
console.log(searchInsertPosition([1, 3, 5, 6], 3)); // 1
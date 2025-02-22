// https://leetcode.com/problems/find-pivot-index/

function pivotIndex(nums) {
    let leftSum = 0;
    let totalSum = nums.reduce((a, b) => a + b, 0);
    for (let i = 0; i < nums.length; i++) {
        if(leftSum*2 === totalSum - nums[i]) return i;
        leftSum += nums[i];
    }
    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));// 3
console.log(pivotIndex([1, 2, 3]));// -1
console.log(pivotIndex([2, 1, -1]));// 0
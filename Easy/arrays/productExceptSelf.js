// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums) {

    // we will create an array of size nums.length and fill it with 1
    const result = new Array(nums.length).fill(1);
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }
    return result;
}
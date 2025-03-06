// https://leetcode.com/problems/product-of-array-except-self/

/*
    We solve this in two passes:

    First pass: Compute prefix product (product of elements before nums[i]).
    Second pass: Compute suffix product (product of elements after nums[i]).
    Multiply prefix and suffix products to get the final answer.
*/


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

// brute force way

function productExceptSelf(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }
        result.push(product);
    }
    return result;
}


console.log(productExceptSelf([5, 2, 3, 4])); // Output: [24, 12, 8, 6]
function maxProductOfSubArray(nums=[2, 3, -2, 5]) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        if (curr < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(curr, maxProduct * curr);
        minProduct = Math.min(curr, minProduct * curr);
        result = Math.max(result, maxProduct);
    }
    return result;
}

console.log(maxProductOfSubArray());

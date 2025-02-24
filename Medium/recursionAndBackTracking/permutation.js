function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]); // Push a copy of the current permutation
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack (undo swap)
        }
    }

    backtrack(0);
    return result;
}

// Example
console.log(permute([1, 2, 3]));

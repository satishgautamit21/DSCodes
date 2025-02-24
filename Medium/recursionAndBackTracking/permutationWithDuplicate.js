function permuteUnique(nums) {
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(temp = []) {
        if (temp.length === nums.length) {
            result.push([...temp]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // Skip already used numbers
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // Skip duplicates

            used[i] = true;
            temp.push(nums[i]);
            backtrack(temp);
            used[i] = false;
            temp.pop();
        }
    }

    backtrack();
    return result;
}

// Example
console.log(permuteUnique([1, 1, 2]));

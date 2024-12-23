function threesum(nums) {
    nums.sort((a, b) => a - b);
    const result = []
    for (let i = 0; i < nums.length - 2; i++) {

        // to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--
            } else {
                result.push([nums[i], nums[left], nums[right]])
                left++;
                right--;

                // to avoid duplicate triplets
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // to avoid duplicate triplets
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }
    return result
}
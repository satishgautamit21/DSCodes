// problem: https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        // Only check for the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4 as we have 1, 2, 3, 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9 as we have 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
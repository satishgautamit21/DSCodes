// https://leetcode.com/problems/third-maximum-number/
function getThirdMax(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let num of nums) {
        // ignore duplicates
        if (num === first || num === second || num === third) {
            continue;
        }

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num < first) {
            third = second;
            second = num;
        } else if (num > third && num < second) {
            third = num;
        }
    }
    return third === -Infinity ? first : third;
}

console.log(getThirdMax([3,3,3,2,2, 2,1, 1]));
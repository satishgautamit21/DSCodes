/* Find a duplicate in an array of integers */

function findDuplicate(nums) {
    const obj = {};

    for (let item of nums) {
        obj[item] = (obj[item] || 0) + 1;
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            return key;
        }
    }
    return -1;
}

function findDuplicate(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return -1;
} 

/* 
    Time complexity and space complexity of solution one is O(n)
    Time complexity and space complexity of solution two is O(n)
*/
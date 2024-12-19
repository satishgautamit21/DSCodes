/* Find a duplicate in an array of integers */

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


/* 
    Time complexity and space complexity of both functions are O(n) but solution 
    one is more readable while solution two is more efficient in terms of space because it uses an object.
*/
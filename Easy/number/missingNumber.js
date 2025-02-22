/* Find the missing number in a sequence from 0 to n. */

function misssingNumber(nums) {
    let n = nums.length;
    let sum = n * (n + 1) / 2;
    for (let num of nums) {
        sum = sum - num;
    }
    return sum;
}

let arr = [0,1,2,3,4,6]
console.log(misssingNumber(arr))

/* 
    Time complexity: O(n)
    Space complexity: O(1)
*/
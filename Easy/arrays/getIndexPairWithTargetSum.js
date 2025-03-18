// #1 https://leetcode.com/problems/two-sum/

// solution 1 using object

function getIndexPairWithTargetSum(arr, target) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i]
        if (diff in obj) {
            return [obj[diff], i]
        }
        obj[arr[i]] = i
    }
    return []
}

// Time complexity: O(n)
// Space complexity: O(n) beacause of object of size n

// solution 2 using sorting and two pointer

function getIndexPairWithTargetSum(arr, target) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

// Time complexity: O(nlogn)
// Space complexity: O(1)

/*
 conlusion
 solution 1 has time complexity of O(n) and space complexity of O(n)
 solution 2 has time complexity of O(nlogn) and space complexity of O(1)
*/
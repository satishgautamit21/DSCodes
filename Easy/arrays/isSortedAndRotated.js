function isSortedAndRotated(arr) {
    let n = arr.length;
    let count = 0;

    for (let i = 0; i < n - 1; i++) {
        // criteria 1: Check if the current element is greater than the next element
        // it should be fail only one time
        if (arr[i] > arr[i + 1]) {
            count++;
        }
    }

    // criteria 2: Check the last element with the first element. 
    // it should not fail 
    if (arr[n - 1] > arr[0]) {
        count++;
    }

    return count === 1;  // A rotated sorted array has exactly one dip
}

// Test Cases
console.log(isSortedAndRotated([3, 4, 5, 1, 2])); // true
console.log(isSortedAndRotated([1, 2, 3, 4, 5])); // false
console.log(isSortedAndRotated([2, 1, 3, 4, 5])); // false
console.log(isSortedAndRotated([4, 5, 1, 2, 3])); // true
console.log(isSortedAndRotated([5, 1, 2, 3, 4])); // true

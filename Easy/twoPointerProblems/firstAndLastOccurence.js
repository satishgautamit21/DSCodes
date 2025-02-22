// Here array is sorted but it can have duplicates

// this has time complexity of O(n) in worst case
function firstAndLastOccurence(arr, target) {
    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        if(arr[first] !== target) first++;
        if(arr[last] !== target) last--;
        if(arr[first] === target && arr[last] === target) return [first, last];
    }
    return [-1, -1];
}



// other solution using binary search

function binarySearch(arr, target, findFirst) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] > target) {
            end = mid - 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            // since there can be duplicates
            // we still need to find the first
            result = mid; // probable match
            if (findFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return result;
}

function firstAndLastOccurence(arr, target) {
    let first = binarySearch(arr, target, true);
    let last = binarySearch(arr, target, false) - 1;
    return [first, last];
}

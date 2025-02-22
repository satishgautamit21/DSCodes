// this can be solved using sorting as well as heap

function kthLargestElement(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - k];
}


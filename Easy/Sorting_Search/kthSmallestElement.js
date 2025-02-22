function kthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}
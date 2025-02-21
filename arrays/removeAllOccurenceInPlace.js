function removeAllOccurenceInPlace(arr, val) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[index++] = arr[i];
        }
    }
    arr.length = index;
    return arr;
}

console.log(removeAllOccurenceInPlace([1, 2, 3, 4, 1, 2, 1], 1)); // [2, 3, 4, 2]
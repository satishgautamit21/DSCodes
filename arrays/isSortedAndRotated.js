function isSortedAndRotated(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    if (min === arr[0]) {
        return true;
    }
    return false;
}
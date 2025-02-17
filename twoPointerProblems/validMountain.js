function validMountainArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] < arr[left + 1]) {
            left += 1;
        } else {
            break;
        }
    }
    while (right > left) {
        if (arr[right] < arr[right - 1]) {
            right -= 1;
        } else {
            break;
        }
    }
    return left === right && left !== 0 && right !== arr.length - 1;
}
// here we will maintain a flag to check if we need to swap or not

function bubbleSort(arr) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        flag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
        if (!flag) break;
    }
    return arr;
}
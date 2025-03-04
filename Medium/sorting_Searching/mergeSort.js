
function merge(left, right) {
    let result = [];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    while(i<left.length){
        result.push(left[i]);
        i++;
    }
    while(j<right.length){
        result.push(right[j]);
        j++;
    }
    return result
}
Array.prototype.customSlice = function (start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.customSlice(0, mid));
    let right = mergeSort(arr.customSlice(mid));
    return merge(left, right);
}
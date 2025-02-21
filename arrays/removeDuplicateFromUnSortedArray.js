// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicatesFromUnSortedArray(arr) {
    const seen = {};
    let index = 0;
    for(let i=0; i<arr.length; i++) {
        const item = arr[i];
        if(!seen[item]) {
            arr[index++] = item;
            seen[item] = true;
        }
    }
    arr.length = index;
    return arr;
}
function getFirstSecondAndThirdMax(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }
    return [first, second, third];
}

/* 
    Time complexity: O(n)
    Space complexity: O(1)
*/
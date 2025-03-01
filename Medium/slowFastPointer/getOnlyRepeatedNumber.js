// Get only repeated number in an array of N+1 integers having digit from 1 to N

// We will use floyd's cycle detection algorithm
function getOnlyRepeatedNumber(arr) {
    let slow = arr[0];
    let fast = arr[0];
    console.log("slow, fast   ",slow, fast);
    // this loop will find the starting point of the cycle
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
        console.log("slow, fast   ",slow, fast);
    } while (slow !== fast);

    // this loop will find the repeated number
    fast = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    return slow;
}


console.log(getOnlyRepeatedNumber([1, 3, 4, 2, 2])); // Output: 2
// console.log(getOnlyRepeatedNumber([3, 1, 3, 4, 2])); // Output: 3
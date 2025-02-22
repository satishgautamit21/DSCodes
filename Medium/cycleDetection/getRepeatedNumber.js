// Get repeated number in an array of N+1 integers having digit from 1 to N

// We will use floyd's cycle detection algorithm
function getRepeatedNumber(arr) {
    let slow = arr[0];
    let fast = arr[0];

    // this loop will find the starting point of the cycle
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow !== fast);

    // this loop will find the repeated number
    fast = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    return slow;
}
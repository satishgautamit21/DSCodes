// Get only repeated number in an array of N+1 integers having digit from 1 to N


function getOnlyRepeatedNumber(arr) {
    let slow = arr[0];
    let fast = arr[0];
    console.log("slow ", slow, "fast ", fast, arr);
        
    // Here do -while is preffered over while loop because it will 
    // execute at least once before comparing slow and fast
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
        console.log("slow ", slow, "fast ", fast);
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

/*
    Yes! The function does not use extra space (like a hash table or set), and it processes
    the array in a single pass (O(N)). Even for millions of elements, it remains efficient.
    
    With Slow and Fast Pointers
    Time complexity: O(N)
    Space complexity: O(1)

    With Hash Table
    Time complexity: O(N)
    Space complexity: O(N)
*/
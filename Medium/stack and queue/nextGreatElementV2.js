/* 
    The Next Greater Element (NGE) problem requires finding the next greater 
    number for each element in an array. The next greater element for an element 
    x is the first greater element that appears to the right of x in the array. 
    If no such element exists, return -1.
*/

function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n); // No prefilling
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
        // Pop elements from stack that are <= current element
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // If stack is empty, there's no greater element
        result[i] = stack.length > 0 ? stack[stack.length - 1] : -1;

        // Push the current element onto stack
        stack.push(arr[i]);
    }

    return result;
}

// Example
console.log(nextGreaterElement([4, 5, 2, 10, 8])); // Output: [5, 10, 10, -1, -1]
console.log(nextGreaterElement([3, 2, 1])); // Output: [-1, -1, -1]
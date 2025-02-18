function nextGreaterElement(nums1, nums2) {
    let stack = [];
    let nextGreater = new Map();

    // Step 1: Process nums2 and find next greater elements

    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }


    // Step 2: Map each element in nums1 to its next greater element in nums2
    return nums1.map(num => nextGreater.get(num) || -1);
}

// Example Usage
console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // Output: [-1, 3, -1]
console.log(nextGreaterElement([2,4], [1,2,3,4]));   // Output: [3, -1]

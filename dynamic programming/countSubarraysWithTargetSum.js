function countSubarraysWithTargetSum(nums, target) {
    // we will use Map to store the prefix sum and the number of subarrays with that prefix sum
    const map = new Map();
    let count = 0;
    let sum = 0;

    // we will add 1 to the map for the prefix sum 0
    map.set(0, 1);
    for (let num of nums) { 
        sum += num;

        // if the prefix sum is equal to the target, then we will 
        //add the number of subarrays with that prefix sum
        count += map.get(sum - target) || 0;
        
        // add the current prefix sum to the map 
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}


        



// Time complexity: O(n)
// Space complexity: O(1)
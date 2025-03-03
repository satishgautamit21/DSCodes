function threeSum(arr, target) {
    if (arr.length < 3) return [];
    
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates
        
        let j = i + 1;
        let k = arr.length - 1;
        
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            
            if (sum === target) {
                return [arr[i], arr[j], arr[k]];
            } 
            
            if (sum > target) {
                k--;
            } else {
                j++;
            }
            
            // Skip duplicates for j and k
            while (j < k && arr[j] === arr[j - 1]) j++;
            while (j < k && arr[k] === arr[k + 1]) k--;
        }
    }
    
    return [];
}

console.log("op ", threeSum([1, 2, 3, 4, 5, 6, 7], 14)); // Output: 
console.log("op ", threeSum([1, 2, 3, 4, 5, 6, 7], 15));
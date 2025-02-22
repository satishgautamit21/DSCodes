function majorityElementK(arr, k) {
    if (k < 2) return []; // Edge case: k must be >= 2
  
    let candidates = new Map();
  
    // Phase 1: Find possible candidates
    for (let num of arr) {
      if (candidates.has(num)) {
        candidates.set(num, candidates.get(num) + 1);
      } else if (candidates.size < k - 1) {
        candidates.set(num, 1);
      } else {
        for (let [key, count] of candidates) {
          candidates.set(key, count - 1);
          if (candidates.get(key) === 0) {
            candidates.delete(key);
          }
        }
      }
    }
  
    // Phase 2: Validate candidates
    let result = [];
    for (let candidate of candidates.keys()) {
      let count = arr.filter(x => x === candidate).length;
      if (count > Math.floor(arr.length / k)) {
        result.push(candidate);
      }
    }
  
    return result;
  }
  
  // Example Test
  console.log(majorityElementK([1, 1, 2, 3, 1, 4, 5, 1], 4)); // Output: [1]
  
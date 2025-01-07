class IndexPair {
   getIndexPairWithTargetSum(array, targetSum) {
       const seen = {};
       for (let i = 0; i < array.length; i++) {
           const complement = targetSum - array[i];
           if (complement in seen) {
               return [seen[complement], i];
           }
           seen[array[i]] = i;
       }
       return [-1, -1];
   }
}
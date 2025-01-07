class IndexPair {
   getIndexPairWithTargetSum(array, targetSum): number[] {
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

const indexPair = new IndexPair();
console.log(indexPair.getIndexPairWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)); // [6,7]
// problem statement
// index-of pair with target sum

class IndexPair {
   getIndexPairWithTargetSum(array, targetSum) {
       const seen = new Map();
       for (let i = 0; i < array.length; i++) {
           const complement = targetSum - array[i];
           if (seen.has(complement)) {
               return [seen.get(complement), i];
           }
           seen.set(array[i], i);
       }
       return [-1, -1];
   }
}

const indexPair = new IndexPair();
console.log(indexPair.getIndexPairWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)); // [6,7]
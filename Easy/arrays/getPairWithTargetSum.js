// problem statement
// pair-with-target-sum

function getPairWithTargetSum(array, targetSum) {
    const seen = new Set();
    for (let item of array) {
        const complement = targetSum - item;
        if (seen.has(complement)) {
            return [complement, item];
        }
        seen.add(item);
    }
    return [-1, -1];
}
   
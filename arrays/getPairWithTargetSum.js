// problem statement
// pair-with-target-sum

function getPairWithTargetSum(array, targetSum) {
    const seen = new Set();
    for (let i = 0; i < array.length; i++) {
        const complement = targetSum - array[i];
        if (seen.has(complement)) {
            return [complement, array[i]];
        }
        seen.add(array[i]);
    }
}
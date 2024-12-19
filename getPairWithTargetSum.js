function getPairWithTargetSum(array, targetSum) {
    const seen = {}
    for (let i = 0; i < array.length; i++) {
        const complement = targetSum - array[i];
        if (seen[complement]) {
            return [complement, array[i]];
        }
        seen[array[i]] = true;
    }
}
// function getPairWithTargetSum(array, targetSum) {
//     const seen = {}
//     for (let i = 0; i < array.length; i++) {
//         const complement = targetSum - array[i];
//         if (seen[complement]) {
//             return [complement, array[i]];
//         }
//         seen[array[i]] = true;
//     }
// }

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
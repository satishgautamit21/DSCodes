function powerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// function powerOfTwo(n) {
//     while(n > 1) {
//         if(n % 2 !== 0) {
//             return false;
//         }
//         n /= 2;
//     }
//     return true;
// }

/* 
    Solution one has time complexity of O(1) and space complexity of O(1) 
    Solution two has time complexity of O(log n) and space complexity of O(1)
*/
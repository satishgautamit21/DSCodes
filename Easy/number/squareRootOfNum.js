// https://leetcode.com/problems/sqrtx/


// idea is square root of a number can never be bigger 
// than half of that number
function sqrtBinarySearch(num, precision = 0.00001) {
    if (num < 0) return NaN; // No real square root for negative numbers
    if (num === 0 || num === 1) return num;

    let left = 0, right = num;
    let mid;

    while ((right - left) > precision) {
        mid = (left + right) / 2;
        
        if (mid * mid === num) return mid;
        else if (mid * mid < num) left = mid;
        else right = mid;
    }

    return Number(mid.toFixed(5)); // Rounding for precision
}

// Example Usage:
let num = 50;
console.log(`Square root of ${num} is`, sqrtBinarySearch(num));

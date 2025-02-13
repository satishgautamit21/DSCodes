function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
}


/* 
optimized solution
function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    const res = [1, 2];
    for (let i = 2; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n - 1];
}


*/

/*
    For 1 stair possible ways are 1
    For 2 stairs possible ways are 2 i.e. 1 + 1 and 2
    For 3 stairs possible ways are 3 i.e. 1 + 1 + 1, 1 + 2 and 2 + 1
    for n stairs possible ways are n-1 + n-2
*/
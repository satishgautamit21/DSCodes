function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n === 3) {
        return 4;
    }
    return climbStairs(n - 1) + climbStairs(n - 2) + climbStairs(n - 3);
}

/*
   function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n === 3) {
        return 4;
    }
    let res = [1, 2, 4];
    for(let i = 3; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2] + res[i - 3];
    }
    return res[n-1];
} 
*/
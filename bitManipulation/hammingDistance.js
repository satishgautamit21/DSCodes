function hammingDistance(x, y) {
    // return 1 only when the corresponding bits are different
    // 1 ^ 1 = 0
    // 1 ^ 0 = 1
    // 0 ^ 0 = 0
    // 0 ^ 1 = 1
    let binary= (x ^ y).toString(2);
    let binArr = binary.split('0')
    return binArr.join('').length;
}

console.log(hammingDistance(1, 4));
console.log(hammingDistance(10, 4));
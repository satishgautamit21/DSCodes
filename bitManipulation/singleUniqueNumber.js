function singleUniqueNumber(arr) {
    let xor = 0;
    for (let num of arr) {
        xor ^= num;
    }
    return xor;
}
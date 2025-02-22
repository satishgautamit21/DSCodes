function stoneJewel(str1, srt2) {
    let count = 0;
    for (let char of str1) {
        if (srt2.includes(char)) {
            count += 1;
        }
    }
    return count;
}
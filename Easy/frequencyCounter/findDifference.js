function findDifference(s1, s2) {
    let freq1 = {}, freq2 = {}, res = [];
    for (let i = 0; i < s1.length; i++) {
        freq1[s1[i]] = (freq1[s1[i]] || 0) + 1;
    }
    for (let i = 0; i < s2.length; i++) {
        freq2[s2[i]] = (freq2[s2[i]] || 0) + 1;
    }
    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            res.push(key);
        }
    }
    return res;
}
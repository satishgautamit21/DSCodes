function findDifference(s1, s2) {
    let freq1 = {}, freq2 = {}, res = [];
    for (let i = 0; i < s1.length; i++) {
        freq1[s1[i]] = (freq1[s1[i]] || 0) + 1;
    }
    
    for(let char of s2) {
        if(!freq1[char]) return char;
        freq1[char]--
    }
}
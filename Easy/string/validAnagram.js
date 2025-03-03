function frequencyCounter(str) {
    const frequencyCounter = {};
    for (let char of str) {
        frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
    }
    return frequencyCounter;
}


function  validAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    // we are avoiding extra loop to get fc count for t string
    // Here we are checking only for string s
    const freqCounter = frequencyCounter(s);
    
    //  In next iteration
    // we are directly loop next time to get result
    for (let char of t) {
        if (!freqCounter[char]) return false;
        freqCounter[char] -= 1;
    }
    return true;
}

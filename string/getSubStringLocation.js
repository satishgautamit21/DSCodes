function getSubStringLocation(str, subStr) {
    // we don't have to use built-in method here
    for (let i = 0; i < str.length; i++) {
        let found = true;
        for (let j = 0; j < subStr.length; j++) {
            if (str[i + j] !== subStr[j]) {
                found= false
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
}

/* 
    Time complexity: 
        O(str.lengt) in best case and 
        O(str.length * subStr.length) in worst case i.e. ex str1 ="aaaaaaa" str2="aaa"
        
    Space complexity: O(1)
*/
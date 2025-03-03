function checkPalindromeWithUnichar(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        while(left < right && !isAlphaNumeric(str[left])) left++;
        while(left < right && !isAlphaNumeric(str[right])) right--;
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
 }

 function isAlphaNumeric(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
 }
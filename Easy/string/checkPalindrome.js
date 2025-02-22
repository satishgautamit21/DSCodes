function checkPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
}

console.log("is palin ",checkPalin("madam"));
console.log("is palin ",checkPalin("rammar"));
console.log("is palin ",checkPalin("mango"));
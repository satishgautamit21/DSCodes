function licenseKeyFormatting(s, k) {
    let str = s.split('-').join("").toUpperCase();

    let firstgroupLen  = str.length % k || k;

    let result = str.slice(0, firstgroupLen)

    for(let i=firstgroupLen; i<str.length; i+=k) {
        result += "-" + str.slice(i, i + k);
    }
    return result;
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)) // "5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)) // "2-5G-3J"
console.log(licenseKeyFormatting("2-5g-3-J", 3)) // "2-5G-J"
console.log(licenseKeyFormatting("2-5g-3-J", 4)) // "2-5G-J"
console.log(licenseKeyFormatting("2-5g-3-J", 5)) // "2-5G-J"
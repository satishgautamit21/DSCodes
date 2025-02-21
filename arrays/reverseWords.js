// Problem reverse words in a string also remove extra spaces at any place

function reverseWords(str) {
    let str = str.trim();
    let result = '';
    let words = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            words.push(result);
            result = '';
        } else {
            result += str[i];
        }
    }
    if (result) words.push(result);
    return words.reverse().join(' ');
}
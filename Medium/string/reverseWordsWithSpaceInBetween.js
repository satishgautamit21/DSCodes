// Problem reverse words in a string also remove extra spaces at any place

function reverseWordsInString(str) {
    const trimmedStr = str.trim();
    const words = [];
    let currentWord = '';

    for (const char of trimmedStr) {
        if (char === ' ') {
            // Push the current word and start a new one
            if (currentWord) {
                words.push(currentWord);
                currentWord = '';
            }
        } else {
            currentWord += char;
        }
    }

    // Push the last word when sentence ends with no leading spaces
    if (currentWord) {
        words.push(currentWord);
    }

    return words.reverse().join(' ');
}

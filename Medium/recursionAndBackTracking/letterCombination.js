function letterCombinations(digits) {
    if (!digits.length) return []; // Edge case: empty input

    const phoneMap = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };
    
    const result = [];

    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }

        for (let letter of phoneMap[digits[index]]) {
            backtrack(index + 1, current + letter);
        }
    }

    backtrack(0, "");
    return result;
}

// Example Usage:
console.log(letterCombinations("23"));

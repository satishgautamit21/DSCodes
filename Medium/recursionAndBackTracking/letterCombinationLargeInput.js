function letterCombinations(digits) {
    if (!digits.length) return [];

    const phoneMap = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };

    let queue = [""];
    
    for (let digit of digits) {
        let letters = phoneMap[digit];
        let newQueue = [];
        
        for (let combination of queue) {
            for (let letter of letters) {
                newQueue.push(combination + letter);
            }
        }

        queue = newQueue;
    }

    return queue;
}

// Example Usage:
console.log(letterCombinations("23"));

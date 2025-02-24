function findSubsequences(str) {
    let result = [];

    function backtrack(index, current) {
        if (index === str.length) {
            result.push(current);
            return;
        }

        // Include current character
        backtrack(index + 1, current + str[index]);

        // Exclude current character
        backtrack(index + 1, current);
    }

    backtrack(0, "");
    return result;
}

// Example
console.log(findSubsequences("abc"));

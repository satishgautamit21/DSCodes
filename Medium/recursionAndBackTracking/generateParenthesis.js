function generateParenthesis(n) {
    const result = []
    const backtrack = (str, open, close) => {

        // base case
        if (open === n && close === n) {
            result.push(str)
            return
        }
        if (open < n) {
            backtrack(str + "(", open + 1, close)
        }
        if (close < open) {
            backtrack(str + ")", open, close + 1)
        }
    }
    backtrack("", 0, 0)
    return result
}


console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
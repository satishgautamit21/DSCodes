// A string is considered valid if all opening brackets are closed.
// and all opening brackets are closed in the correct order .
// ( ) [] { }
// include empty string

function validateParenthesis(str) {
    const obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    const stack = [];
    for (let char of str) {
        // if char is opening bracket
        if( char in obj) {
            // push obj[char] to stack
            stack.push(char);
        } else {
            // if char is closing bracket and stack is empty or stack top is not equal to char
            if(stack.length === 0 || obj[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(validateParenthesis("()")); // true
console.log(validateParenthesis("()[]{}")); // true
console.log(validateParenthesis("(]")); // false
console.log(validateParenthesis("([)]")); // false
console.log(validateParenthesis("{[]}")); // true
console.log(validateParenthesis("")); // true

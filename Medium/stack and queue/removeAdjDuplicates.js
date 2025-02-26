// Problem: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

function removeAdjDuplicates(str) {
    let stack = []

    for (let i = 0; i < str.length; i++) {

        // if stack is empty or stack top is not equal to str[i]
        if (stack.length === 0 || stack[stack.length - 1] !== str[i]) {
            stack.push(str[i])
        } else {
            stack.pop()
        }
    }
    return stack.join('')
}
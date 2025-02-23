// https://leetcode.com/problems/baseball-game/

function calPoints(ops) {
    let stack = [];

    for (let op of ops) {
        if (op === "C") {
            stack.pop();
        } else if (op === "D") {
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(parseInt(op));
        }
    }

    return stack.reduce((sum, score) => sum + score, 0);
}

// Example Test Cases
console.log(calPoints(["5", "2", "C", "D", "+"])); // Output: 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // Output: 27
console.log(calPoints(["1", "C"])); // Output: 0

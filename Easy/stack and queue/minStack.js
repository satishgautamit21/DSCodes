class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    pop() {
        if (this.stack.length === 0) return null;

        // if the top element of stack is equal to the top element of minStack
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return this.stack.pop();
    }
    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }
}
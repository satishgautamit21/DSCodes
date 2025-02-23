// implement queue using two stacks

function implementQueueUsingTwoStacks() {
    const stack1 = []
    const stack2 = []
    return {
        enqueue(item) {
            stack1.push(item)
        },
        dequeue() {
            if (stack2.length === 0) {
                while (stack1.length > 0) {
                    stack2.push(stack1.pop())
                }
            }
            return stack2.pop()
        },
        peek() {
            if (stack2.length === 0) {
                while (stack1.length > 0) {
                    stack2.push(stack1.pop())
                }
            }
            return stack2[stack2.length - 1]
        },
        
    }
}

const queue = implementQueueUsingTwoStacks()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(" dequeue ", queue.dequeue());
console.log(" dequeue ", queue.dequeue());
console.log(" dequeue ", queue.dequeue());
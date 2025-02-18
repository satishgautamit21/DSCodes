function stackUsingTwoQueue(){
    const queue1 = [];
    const queue2 = [];
    return {
        push(item) {
            queue1.push(item);
        },
        pop() {
            if (queue1.length === 0 && queue2.length === 0) {
                return null;
            }
            if (queue2.length === 0) {
                while (queue1.length > 0) {
                    queue2.push(queue1.pop());
                }
            }
            return queue2.pop();
        }
    }
}
    
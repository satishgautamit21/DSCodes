function nextSmallerElement(arr) {
    const stack = []
    const result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop()
        }
        if (stack.length === 0) {
            result[i] = -1
        } else {
            result[i] = stack[stack.length - 1]
        }
        stack.push(arr[i])
    }
    return result
}
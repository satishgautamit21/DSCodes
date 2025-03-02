function BFS(root) {
    const queue = [root];
    const result = [];

    // while queue is not empty
    while (queue.length) {

        // remove the first element from the queue
        const node = queue.shift();

        // add the value of the node to the result
        result.push(node.val);

        // add the left and right child of the node to the queue
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return result;
}

/*
        BFS Tree

        1
       / \
      2   3
     / \   \
    4   5   6

    Output: [1, 2, 3, 4, 5, 6]


*/
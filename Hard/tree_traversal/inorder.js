/*
    In Depth-First Search (DFS) - Inorder Traversal, we visit the nodes of a binary tree in 
    the following order:

    Left Subtree
    Root Node
    Right Subtree

    This is commonly used in Binary Search Trees (BSTs) because it retrieves 
    the elements in sorted order.
*/


function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}

/*     1
      / \
     2   3
    / \
   4   5
*/
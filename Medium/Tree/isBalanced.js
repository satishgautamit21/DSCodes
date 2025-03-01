class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isBalanced(root) {
        function checkHeight(node) {
            if (!node) return 0; // Base case: height of null node is 0

            let leftHeight = checkHeight(node.left);
            if (leftHeight === -1) return -1; // Left subtree is unbalanced

            let rightHeight = checkHeight(node.right);
            if (rightHeight === -1) return -1; // Right subtree is unbalanced

            if (Math.abs(leftHeight - rightHeight) > 1) return -1; // If unbalanced, return -1

            return Math.max(leftHeight, rightHeight) + 1; // Return height of subtree
        }

        return checkHeight(root) !== -1;
    }
}
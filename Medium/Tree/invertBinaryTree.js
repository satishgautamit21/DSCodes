// https://leetcode.com/problems/invert-binary-tree/

// Inverting a tree means swapping the left and right children of every node in a binary tree. 
// This results in a mirror image of the original tree.

function invertTree(root) {
    if (!root) return null;

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}
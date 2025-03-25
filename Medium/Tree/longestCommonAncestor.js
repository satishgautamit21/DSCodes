/*
    The key idea is that in the Lowest Common Ancestor (LCA) problem, a node can be 
    considered a descendant of itself.

What Does This Mean?
Normally, a descendant of a node is any node that appears in its subtree.

However, in the context of LCA, we also allow a node to be its own descendant.

Example 1 

    6
   / \
  2   8
 / \  / \
0   4 7  9
   / \
  3   5

p = 2, q = 4

output = 2

Example 2

      10
     /  \
    5    15
   / \   / \
  3   7 13  18

p = 10, q = 7

output = 10

Exmaple 3
    6
   / \
  2   8
 / \  / \
0   4 7 9
   / \
  3   5

p = 2, q = 8

output = 6
*/

function longestCommonAncestor(root, p, q) {
    while (root) {
        // If both p and q are smaller, go left
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } 
        // If both p and q are greater, go right
        else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } 
        // If they are on different sides or one is the root, return root
        else {
            return root;
        }
    }
    return null;
};

/*
    ✅ Time Complexity: O(h) (since we traverse the height of the BST)
    ✅ Space Complexity: O(1) (constant space, no recursion stack)
*/

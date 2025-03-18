// leetcode #21 https://leetcode.com/problems/merge-two-sorted-lists/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeList(head1, head2) {
    // Create a dummy node
    let node = new Node();
    let current = node;
    while (head1 && head2) {
        if (head1.val < head2.val) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        // Move to the next node
        current = current.next;
    }
    // Connect the remaining list
    current.next = head1 || head2;

    // Return the merged list leaving the dummy node
    return node.next;
}

/*
   Solution Approach
    Initialize variables:

    A dummy node to form the result linked list.
    A carry variable to keep track of sums exceeding 9.
    Iterate through both linked lists:

    Add corresponding digits (val1 + val2 + carry).
    Store the unit place of the sum in a new node.
    Update carry for the next addition (Math.floor(sum / 10)).
    Handle remaining carry:

    If carry > 0 after traversal, add it as a new node.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new Node(0);
    let current = dummyHead;
    let carry = 0;
    while (l1 || l2) {
        let sum = carry;
        if (l1) sum += l1.val;
        if (l2) sum += l2.val;
        carry = Math.floor(sum / 10);
        current.next = new Node(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry) current.next = new Node(carry);
    return dummyHead.next;
}
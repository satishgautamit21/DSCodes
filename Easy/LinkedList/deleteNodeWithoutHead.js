// Delete Node without head

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    delteNode(node) {
        if (!node || !node.next) return;
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
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

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.length++;
        return this;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current; // move prev to current
            current = next; // move current to next
        }
        this.head = prev;
        return this;
    }
}
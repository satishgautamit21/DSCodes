class LinkedNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    removeNthFromEnd(head, n) {
        if (!head) return head;
        let dummy = new LinkedNode();
        let fast = dummy;
        let slow = dummy;
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }
        while (fast!==null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
    }
}
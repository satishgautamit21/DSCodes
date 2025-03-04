class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function detectCycle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
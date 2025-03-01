class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function detectCycle(head) {
    let slow = head, fast = head;

    // Step 1: Detect Cycle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // if just detecting cycle is goal then this much code is enough
        if (slow === fast) break; // Cycle detected
    }


    if (fast === null || fast.next === null) return null; // No cycle

    // Step 2: Find Cycle Start
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow; // Cycle start node
}

// Example Usage:
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Cycle at node 2

console.log(detectCycle(head).val); // Output: 2

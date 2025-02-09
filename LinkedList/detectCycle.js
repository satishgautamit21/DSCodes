function detectCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // Cycle found now find the starting point
        // Here slow and fast will meet at the starting point of the cycle
        if (slow === fast) {
            let p1 = head;
            let p2 = slow;
            while (p1 !== p2) {
                p1 = p1.next;
                p2 = p2.next;
            }
            return p1;
        }
    }
    return null;
}
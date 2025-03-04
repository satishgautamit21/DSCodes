class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function detectNodeWithCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) { // Cycle detected
            slow = head;  // Reset slow to head

            /*
                How Does the Second Loop Help?
                Once a cycle is detected (slow === fast), we reset slow to head while keeping fast 
                at the meeting point.
                We now move both pointers one step at a time.
                The node where they meet again is the start of the cycle.
            */

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;  // Cycle start node
        }
    }
    
    return null; // No cycle
}


/*
    Why We Need a Second While Loop?
When slow === fast, it only confirms that a cycle exists. But it doesn't tell us where the cycle starts.

Example:
Consider this linked list with a cycle:


1 → 2 → 3 → 4 → 5
         ↑      ↓
         8 ← 7 ← 6
Suppose the cycle starts at 3 (head.next.next).
Initially, slow and fast start from head.
After slow and fast move, they eventually meet somewhere inside the cycle, say at 6, not 
necessarily at the start (3).
If we return slow immediately at the first meeting, it would return 6, which is not the 
start of the cycle.
*/
function middleOfLL(head) {
    let slow = head;
    let fast = head;

    // fast moving twice and slow moving once hence 
    // by the time fast reaches the end slow will be in the middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
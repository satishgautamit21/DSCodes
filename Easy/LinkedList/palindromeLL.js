
function reverseLL(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function palindromeLL(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let secondHalf = reverseLL(slow);
    let firstHalf = head;
    while (secondHalf) {
        if (secondHalf.val !== firstHalf.val) {
            return false;
        }
        secondHalf = secondHalf.next;
        firstHalf = firstHalf.next;
    }
    return true;
}
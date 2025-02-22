function intersectionOfTwoLL(head1, head2) {
    let a = head1, b = head2;

    if (a === null || b === null) {
        return null;
    }

    // if there is intersection in the LL, they will be at the same point
    while (a !== b) {
        a = a? a.next : head2;
        b = b? b.next : head1;
    }

    return a;
}
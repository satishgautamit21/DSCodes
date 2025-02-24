function candidateVoteGreaterthanN_by_two(array) {
    let count = 0;
    let candidate = null;

    /* 
        How It Works:
        If a number appears more than n/2 times, all other elements together can't "cancel" its presence.
        For probable candidate, count must be greater than 0.
        By the end of the loop, the candidate variable holds the element that could be the majority.

    */
    // At the end of this loop we get a probable candidate not gurrented candidate
    for (let i = 0; i < array.length; i++) {
        if (count === 0) {
            candidate = array[i];
        }
        if (array[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Validate candidate
    count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === candidate) {
            count++;
        }
    }
    if (count > array.length / 2) {
        return candidate;
    }
    return -1;
}


console.log(candidateVoteGreaterthanN_by_two([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(candidateVoteGreaterthanN_by_two([3, 2, 3])); // Output: -1

function candidateVoteGreaterthanN_by_two(array) {
    let count = 0;
    let candidate = null;

    // Phase 1: Find possible candidate
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


console.log(candidateVoteGreaterthanN_by_two([2, 2, 1, 1, 1, 2, 2]));
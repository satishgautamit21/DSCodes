function candidateVoteGreaterthanN_by_two(array) {
    let count = 0;
    let candidate = null;
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
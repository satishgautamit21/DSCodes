function candidateVoteGreaterthanN_by_three(array) {
    let count1 = 0;
    let candidate1 = null;
    let count2 = 0;
    let candidate2 = null;
    for (let i = 0; i < array.length; i++) {
        if (count1 === 0) {
            candidate1 = array[i];
        }
        if (count2 === 0) {
            candidate2 = array[i];
        }
        if (array[i] === candidate1) {
            count1++;
        } else if (array[i] === candidate2) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === candidate1) {
            count1++;
        } else if (array[i] === candidate2) {
            count2++;
        }
    }
    let result = [];
    [candidate1, candidate2].forEach((candidate) => {
        if (count1 > array.length / 3) {
            result.push(candidate);
        }
        if (count2 > array.length / 3) {
            result.push(candidate);
        }
    });
    return result.length === 0 ? -1 : result;
}

console.log(candidateVoteGreaterthanN_by_three([2, 2, 1, 1, 1, 2, 2])); // 
   
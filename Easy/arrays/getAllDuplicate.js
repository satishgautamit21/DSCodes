// problem statement
// find-all-duplicates-in-an-array/

function getAllDuplicates(nums) {
    const seen = new Set();
    const duplicates = [];
    for (let num of nums) {
        if (seen.has(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }    
    }
    return duplicates;
}
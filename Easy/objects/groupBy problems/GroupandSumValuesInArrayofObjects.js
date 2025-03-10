function groupandSum(arr, key) {
    const grouped = {};
    for (let obj of arr) {
        const group = obj[key];
        if (!grouped[group]) {
            grouped[group] = 0;
        }
        grouped[group] += obj.value;
    }
    return grouped;
}
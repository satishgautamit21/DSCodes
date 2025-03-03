// find common elements in two arrays excluding duplicates

function getIntersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [...set1].filter((num) => set2.has(num));
}

// solution 2 using sort and two pointer

function getIntersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const result = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}
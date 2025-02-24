function subsets(nums) {
    const result = []
    const backtrack = (arr, start) => {
        result.push([...arr])
        for (let i = start; i < nums.length; i++) {
            arr.push(nums[i])
            backtrack(arr, i + 1);
            console.log("arr is ", arr)
            arr.pop()
        }
    }
    backtrack([], 0)
    return result
}


console.log(subsets([1, 2, 3])) // Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
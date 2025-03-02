function removeDuplicatesFromSortedArray(nums) {
   let left = 0;
   for (let right = 1; right < nums.length; right++) {
      if (nums[left] !== nums[right]) {
         nums[++left] = nums[right];
      }
   }
   nums.length = left + 1;
   return nums;
}

console.log("remove duplicates ", removeDuplicatesFromSortedArray([1, 1, 2]));
// https://leetcode.com/problems/container-with-most-water/
/*
You are given an integer array height of length n. There are n vertical lines drawn such that 
the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container 
contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.


Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
*/
function containerWithMostWater(height) {
    let l=0;
    let r=height.length-1;
    let maxArea=0;

    while(l<r){
        h = Math.min(height[l], height[r]);
        width = r-l;
        area = h*width;
        maxArea = Math.max(maxArea, area);

        // move the smaller height
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return maxArea;
}
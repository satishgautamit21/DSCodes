// https://leetcode.com/problems/container-with-most-water/
function containerWithMostWater(height) {
    let l=0;
    let r=height.length-1;
    let maxArea=0;

    while(l<r){
        h = Math.min(height[l], height[r]);
        width = r-l;
        area = h*width;
        maxArea = Math.max(maxArea, area);

        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return maxArea;
}
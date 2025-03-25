/* 
Input

image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ]
  sr = 1, sc = 1, newColor = 2
  
output = [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]
]
*/

/*
We can solve this using DFS (Depth-First Search)

- DFS (Recursive) Approach

If the starting pixel is already newColor, return the image as no change is needed.
Otherwise, traverse in all four directions (up, down, left, right).
Change the color if it matches the original color.
*/

function floodFill(image, sr, sc, newColor) {
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor === newColor) {
        return image;
    }
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return;
        }
        if (image[i][j] !== oldColor) {
            return;
        }
        image[i][j] = newColor;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    dfs(sr, sc);
    return image;
}
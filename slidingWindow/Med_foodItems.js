function foodItems(N, M, K, V) {
    if (N < K) return -1; // Not enough food items to form a valid meal

    V.sort((a, b) => a - b); // Ensure sorted order

    let meals = [];
    let currentMeals = [];

    for (let i = 0; i < N; i++) {
        currentMeals.push(V[i]);

        let minVal = Math.min(...currentMeals);
        let maxVal = Math.max(...currentMeals);

        // If meal has at least K items and satisfies the max-min condition
        if (currentMeals.length >= K && maxVal - minVal <= M) {
            meals.push([...currentMeals]); // Store the meal
            currentMeals = []; // Reset for next meal
        } 
        // If adding the current item causes max-min > M, start a new meal
        else if (maxVal - minVal > M) {

            /*
                This condition is inside the else if (maxVal - minVal > M) block.
                It executes when adding the current element (V[i]) causes the difference 
                (maxVal - minVal) to exceed M.
                At this point, we must split the meal and start a new one.

                Before doing that, we need to check if the previous meal (before adding V[i]) 
                contained at least K elements.
                If not, it means we cannot form a valid meal, and the function should return -1.
            */
            if (currentMeals.length - 1 < K) return -1; // Not enough elements to form a valid meal
            
            meals.push([...currentMeals.slice(0, -1)]); // Save previous valid meal
            currentMeals = [V[i]]; // Start new meal with the last added element
        }
    }

    // If there are leftover items that don't form a valid meal, return -1
    if (currentMeals.length > 0) return -1;

    return meals.length;
}

// Example Test Cases
console.log(foodItems(5, 3, 2, [1, 2, 3, 4, 5])); // Expected Output: 3
console.log(foodItems(5, 3, 2, [5, 1, 8, 2, 7])); // Expected Output: -1 (Sorted: [1,2,5,7,8])
console.log(foodItems(6, 2, 3, [1, 2, 3, 4, 5, 6])); // Expected Output: 2

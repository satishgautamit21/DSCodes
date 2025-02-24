function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for( let price of prices) {
        minPrice = Math.min(minPrice, price);

        // here to gain profit we need to buy first
        // then sell the stock
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (Buy at 1, Sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0 (No profit possible)


// max profit in single transaction would be the difference between the max and min price
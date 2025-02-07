function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for( let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

// max profit in single transaction would be the difference between the max and min price
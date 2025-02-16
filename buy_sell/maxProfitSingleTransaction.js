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


console.log(maxProfit([7,1,5,3,6,4])); 
// here in 1st iteration min price is 1 and max profit is 6-1 = 5
// in 2nd iteration min price is 1 and max profit is 6-1 = 5
// in 3rd iteration min price is 1 and max profit is 5-1 = 4
// in 4th iteration min price is 1 and max profit is 6-1 = 5
// in 5th iteration min price is 1 and max profit is 4-1 = 3
// in 6th iteration min price is 1 and max profit is 4-1 = 3


// max profit in single transaction would be the difference between the max and min price
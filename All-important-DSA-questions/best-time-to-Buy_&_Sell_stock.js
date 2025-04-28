/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

//time complexity-O(n)

// function findMaxProfit(price) {
//   minPrice = Infinity;
//   maxProfit = 0;
//   for (i = 0; i < price.length; i++) {
//     if (price[i] < minPrice) minPrice = price[i];
//     else if (price[i] - minPrice > maxProfit) maxProfit = price[i] - minPrice;
//   }
//   return maxProfit;
// }
function findMaxProfit(price) {
  let maxProfit = 0;
  let coord = {};
  for (let i = 0; i <= price.length - 1; i++) {
    for (let j = i + 1; j < price.length - 1; j++) {
      if (price[j] - price[i] > maxProfit) {
        maxProfit = price[j] - price[i];
        coord = { i, j };
      }
    }
  }
  return { maxProfit, coord };
}

//Driver code=
const price = [7, 1, 5, 3, 6, 4];
const maxProfit_value = findMaxProfit(price);
console.log(maxProfit_value);

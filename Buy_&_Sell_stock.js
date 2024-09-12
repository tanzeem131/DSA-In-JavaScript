//time complexity-O(n)

function findMaxProfit(price) {
  minPrice = Infinity;
  maxProfit = 0;
  for (i = 0; i < price.length; i++) {
    if (price[i] < minPrice) minPrice = price[i];
    else if (price[i] - minPrice > maxProfit) maxProfit = price[i] - minPrice;
  }
  return maxProfit;
}

//Driver code
const price = [7, 1, 5, 3, 6, 4];
const maxProfit_value = findMaxProfit(price);
console.log(maxProfit_value);

function findTotalWays(n) {
  if (n == 1 || n == 2) {
    return n;
  } else {
    return findTotalWays(n - 1) + findTotalWays(n - 2);
  }
}

//Driver code
const n = 4;
const result = findTotalWays(n);
console.log(result);

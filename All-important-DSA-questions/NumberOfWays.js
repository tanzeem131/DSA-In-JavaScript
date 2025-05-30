//You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function findTotalWays(n) {
  if (n == 1 || n == 2) {
    return n;
  } else {
    //recursion
    return findTotalWays(n - 1) + findTotalWays(n - 2);
  }
}

//Driver code
const n = 4; //but for larger value of n recursion will fail-->"OVERLAPPING SUBPROBLEM"(findTotalWays(n - 2) is overlapping in next iteration and so on..)--->>then we will use Dynamic programming
const result = findTotalWays(n);
console.log(result);

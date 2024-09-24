/*
1.Compute and return the square root of x, where x is guaranteed to be a non-negative integer. And since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned. Also, talk about the time complexity of your code. 

Test Cases:

Input: 4 Output: 2 
Input: 8 Output: 2 
Explanation: The square root of 8 is 2.8284...., the decimal part is truncated and 2 is returned. 

Hint: Try to use a modified binary search approach for an optimized solution

*/

//brute force
//time complexity-O(x^(1/2))
// function squareRoot(x) {
//   let i = 0;
//   while (i * i <= x) {
//     i++;
//   }
//   return i - 1;
// }

//optimal approach
//time-complexity-O(log(x))
//modified binary search
function squareRoot(x) {
  if (x == 0 || x == 1) return x;
  let start = 1;
  let end = x / 2;
  let ans;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid < x) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
//driver code
const x = 11;
const result = squareRoot(x);
console.log(result);

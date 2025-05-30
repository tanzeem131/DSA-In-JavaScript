/**
 * 
 * Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
You must not use any built-in library function, such as sqrt.


Example 1:
Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

Example 2:
Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 */

function isPerfectSquare(num) {
  if (num < 0) return false;
  if (num === 0 || num === 1) return true;
  let l = 0;
  let h = Math.floor(num / 2);
  while (l <= h) {
    const mid = l + Math.floor((h - l) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return false;
}

const num = 16;
const result = isPerfectSquare(num);
console.log(result);

/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 
Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 
 */

const reverse = (x) => {
  let rev = 0;
  while (x !== 0) {
    const lastdigit = x % 10;
    x = Math.trunc(x / 10);
    if (rev > (2 ** 31 - 1) / 10 || rev < -(2 ** 31) / 10) return 0;
    rev = rev * 10 + lastdigit;
  }
  return rev;
};

const x = -321;
const result = reverse(x);
console.log(result);

/**
 * You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this so that the resulting number is a power of two.

 

Example 1:

Input: n = 1
Output: true
Example 2:

Input: n = 10
Output: false
 */

var reorderedPowerOf2 = function (n) {
  let nsorted = String(n).split("").sort().join("");

  for (let i = 0; i < 31; i++) {
    const powerofTwo = Math.pow(2, i);

    const powerednumbersorted = String(powerofTwo).split("").sort().join("");

    if (nsorted === powerednumbersorted) {
      return true;
    }
  }

  return false;
};

const n = 10;
const result = reorderedPowerOf2(n);
console.log(result);

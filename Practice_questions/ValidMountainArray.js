/**
 * Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

 */

function validMountainArray(arr) {
  const n = arr.length;
  if (n === 1) return false;

  let increasing = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      if (i === 1) {
        return false; //strictly decreasing
      }
      increasing = 0;
    }

    if (increasing) {
      if (arr[i] <= arr[i - 1]) {
        return false;
      }
    } else {
      if (arr[i] >= arr[i - 1]) {
        return false;
      }
    }
  }

  if (increasing === 1) return false;
  return true;
}
const arr = [0, 1, 1, 1];
console.log(validMountainArray(arr));

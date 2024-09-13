/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.


Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

function findTarget(arr, target) {
  const m = arr.length;
  if (m == 0) return false;
  const n = arr[0].length;
  let right = m * n - 1;
  let left = 0;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const mid_Element = arr[Math.floor(mid / n)][mid % n];
    if (mid_Element === target) {
      return true;
    } else if (target < mid_Element) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

//driver code
const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 60;
const result = findTarget(arr, target);
console.log(result);

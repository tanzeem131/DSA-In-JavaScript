/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

//Two pointer approach

function twoSum(arr, l, r, target) {
  while (l <= r) {
    if (arr[l] + arr[r] == target) {
      return { l, r };
    } else if (arr[l] + arr[r] > target) {
      r = r - 1;
    } else {
      l = l + 1;
    }
  }
  return -1;
}

//driver code
const arr = [20, 40, 60, 80, 90, 120, 240];
const target = 210;
const l = 0;
const r = arr.length - 1;
const result = twoSum(arr, l, r, target);
console.log(result);

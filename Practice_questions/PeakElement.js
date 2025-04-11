/**
 * A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 */

function FindPeakElement(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (mid > 0 && mid < high) {
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else if (mid === 0) {
      if (arr[0] > arr[1]) {
        return 0;
      } else {
        return 1;
      }
    } else if (mid === high) {
      if (arr[mid] > arr[high - 1]) {
        return mid;
      } else {
        return high - 1;
      }
    }
  }
}

const arr = [1, 2, 3, 9, 1];
const result = FindPeakElement(arr);
console.log(result);

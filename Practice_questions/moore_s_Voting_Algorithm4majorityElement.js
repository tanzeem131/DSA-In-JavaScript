/**
* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

function findMajorityElement(arr) {
  let cnt = 0;
  let el = null;
  for (let i = 0; i < arr.length; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = arr[i];
    } else if (arr[i] === el) {
      cnt++;
    } else {
      cnt--;
    }
  }

  let cnt1 = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === el) {
      cnt1++;
    }
  }
  if (cnt1 > arr.length / 2) return el;
  return false;
}

const arr = [2, 2, 1, 1, 1, 2, 2];
const result = findMajorityElement(arr);
console.log(result);

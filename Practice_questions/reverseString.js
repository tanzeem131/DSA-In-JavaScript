/**
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 
 */

/**OPTIMIZED APPROACH - TWO POINTER
 * TIME COMPLEXITY=O(n)
 * SPACE COMPLEXITY=O(1)---IN PLACE (NO EXTRAA SPACE)
 */

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

let s = ["h", "e", "l", "l", "o"];
let result = reverseString(s);
console.log(result);

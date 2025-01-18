/**Reverse an Array 
Example 1:
Input: s = [1, 2, 3, 4, 5, 6, 7]
Output: [7, 6, 5, 4,3, 2, 1]
*/

/**OPTIMIZED APPROACH - TWO POINTER
 * TIME COMPLEXITY=O(n)
 * SPACE COMPLEXITY=O(1)---IN PLACE (NO EXTRAA SPACE)
 */

function reverseArray(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}

let s = [1, 2, 3, 4, 5, 6, 7];
let result = reverseArray(s);
console.log(result);

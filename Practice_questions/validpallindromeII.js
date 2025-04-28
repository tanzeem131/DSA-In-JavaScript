/**
 * Given a string s, return true if the s can be palindrome after deleting at 
most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
 */

var validPalindrome = function (s) {
  // Check if substring is a palindrome
  const checkPalindrome = (str, i, j) => {
    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }
    return true;
  };

  // Main logic
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // If characters don't match
    if (s[left] !== s[right]) {
      // Try removing either left or right character
      return (
        checkPalindrome(s, left + 1, right) ||
        checkPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
};

const s = "abca";
const result = validPalindrome(s);
console.log(result);

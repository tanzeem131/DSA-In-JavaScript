/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting 
some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not). 

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 */

function isSubsequence(s, t) {
  let spointer = 0;
  let tpointer = 0;
  while (tpointer < t.length) {
    if (s[spointer] === t[tpointer]) {
      spointer++;
    } else {
      tpointer++;
    }
  }
  return spointer === s.length;
}

const s = "abc";
const t = "ahbgdc";
const result = isSubsequence(s, t);
console.log(result);

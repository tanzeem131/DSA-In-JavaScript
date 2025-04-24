/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

/*T-O(n) and S-O(n)
var isPalindrome = function (s) {
  if (s === " ") return true;
  const letters = s
    .match(/[a-z0-9]/gi)
    ?.join("")
    .toLowerCase();
  let h = letters?.length - 1;
  for (let i = 0; i < h / 2; i++) {
    if (letters[i] !== letters[h - i]) {
      return false;
    }
  }
  return true;
};
*/

//Optimized solution using two pointer appoach
const isPalindrome = function (s) {
  let l = 0;
  let h = s.length - 1;

  while (l < h) {
    while (l < h && !isalphanumeric(s[l])) l++;
    while (l < h && !isalphanumeric(s[h])) h--;

    if (s[l].toLowerCase() !== s[h].toLowerCase()) {
      return false;
    }
    l++;
    h--;
  }
  return true;
};

const isalphanumeric = function (char) {
  return /[a-z0-9]/i.test(char);
};

const s = "race a car";
const result = isPalindrome(s);
console.log(result);

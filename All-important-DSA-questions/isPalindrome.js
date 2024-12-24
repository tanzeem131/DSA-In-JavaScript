/*
//Palindrome check for STRING

function isPalindromeStr(str) {
    const j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        if (str[i] != str[j - i]) {
            return false;
        }
    }
    return true;
}

const str1 = "helleh";
const result = isPalindromeStr(str1);
console.log(result);
*/

/*
//Palindrome check for NUMBER
//Converting number to string

function isPalindromeNumber(num) {
  const str = num.toString();
  const j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    if (str[i] != str[j - i]) {
      return false;
    }
  }
  return true;
}


//Without converting number to string

function isPalindromeNumber(num) {
  if (num < 0) return false;
  let reverse = 0;
  for (let i = num; i >= 1; i = Math.floor(i / 10)) {
    reverse = reverse * 10 + (i % 10);
  }
  return reverse === num;
}

const num1 = 121;
const result = isPalindromeNumber(num1);
console.log(result);
*/

/**
 *
 *
 *
 *
 *
 *
 */
/**An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

Given an integer n, return true if n is strictly palindromic and false otherwise.

A string is palindromic if it reads the same forward and backward.

Example 1:
Input: n = 9
Output: false
Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

Example 2:
Input: n = 4
Output: false
Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
Therefore, we return false. */
/**
 * 1.
function isStrictlyPalindrome(num) {
    if (num < 2) return false;
    const isPlaindromic = (str) => str === str.split("").reverse().join("");
    for (let i = 2; i <= num - 2; i++) {
        const isbase = num.toString(i);
        if (!isPlaindromic(isbase)) return false;
    }
    return true;
}
*/

function isStrictlyPalindrome(n) {
  if (n < 2) return false;
  const isPalindromic = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  const convertToBase = (number, base) => {
    let result = "";
    while (number > 0) {
      result = (number % base) + result;
      number = Math.floor(number / base);
    }
    return result || "0";
  };

  for (let i = 2; i <= n - 2; i++) {
    const baseRepresentation = convertToBase(n, i);
    if (!isPalindromic(baseRepresentation)) return false;
  }

  return true;
}

const num1 = 17;
const result = isStrictlyPalindrome(num1);
console.log(result);

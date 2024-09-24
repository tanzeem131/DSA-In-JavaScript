/*
Given a positive integer num, write a program that returns True if num is a perfect square else return False. Do not use built-in functions like sqrt. Also, talk about the time complexity of your code. 

Test Cases: 
Input: 16 Output: True 
Input: 14 Output: False
*/

//Two pointer approach

function isPerfectSquare(x) {
  if (x === 0 || x === 1) return true;
  let start = 1;
  let end = x / 2;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid * mid === x) {
      return true;
    } else if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

//driver code
const x = 16;
const result = isPerfectSquare(x);
console.log(result);

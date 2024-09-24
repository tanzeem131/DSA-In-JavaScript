/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n version and you want to find out the first bad one, which causes all the following ones to be bad. Also, talk about the time complexity of your code. 
Test Cases: 
Input: [0,0,0,1,1,1,1,1,1] 
Output:3 

Explanation: 0 indicates a good version and 1 indicates a bad version. So, the index of the first 1 is at 3. Thus, the output is 3
*/

function findIndexofFirstBadVersion(arr) {
  let i = 0;
  let j = arr.length - 1;
  let firstBad = -1;
  while (i <= j) {
    let mid = Math.floor(i + (j - i) / 2);
    if (arr[mid] == 1) {
      firstBad = mid;
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return firstBad;
}

const arr = [0, 0, 0, 1, 1, 1, 1, 1, 1];
const result = findIndexofFirstBadVersion(arr);
console.log(result);

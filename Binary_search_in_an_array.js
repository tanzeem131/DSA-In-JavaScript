/*
//Recursion Approach (RECURSIVE APPROACH)

function binarysearch(arr, i, j, x) {
  while (i <= j) {
    const mid = Math.floor(i + (j - i) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      return binarysearch(arr, mid + 1, j, x);
    } else {
      return binarysearch(arr, i, mid - 1, x);
    }
  }
  return -1;
}

//driver code
const arr = [20, 30, 40, 50, 60, 70, 80, 90];
const x = 80;
const i = 0;
const j = arr.length - 1;
const result = binarysearch(arr, i, j, x);
console.log(`The index of ${x} is ${result}`);

*/

//Without Recursion(Iterative Approach)

function binarysearch(arr, i, j, x) {
  while (i <= j) {
    const mid = Math.floor(i + (j - i) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return -1;
}

//driver code
const arr = [20, 30, 40, 50, 60, 70, 80, 90];
const x = 80;
const i = 0;
const j = arr.length - 1;
const result = binarysearch(arr, i, j, x);
console.log(`The index of ${x} is ${result}`);

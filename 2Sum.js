//Two pointer approach

function twoSum(arr, l, r, target) {
  while (l <= r) {
    if (arr[l] + arr[r] == target) {
      return { l, r };
    } else if (arr[l] + arr[r] > target) {
      r = r - 1;
    } else {
      l = l + 1;
    }
  }
  return -1;
}

//driver code
const arr = [20, 40, 60, 80, 90, 120, 240];
const target = 210;
const l = 0;
const r = arr.length - 1;
const result = twoSum(arr, l, r, target);
console.log(result);

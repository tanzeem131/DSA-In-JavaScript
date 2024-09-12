function findTarget(arr, target) {
  const m = arr.length;
  if (m == 0) return false;
  const n = arr[0].length;
  let right = m * n - 1;
  let left = 0;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const mid_Element = arr[Math.floor(mid / n)][mid % n];
    if (mid_Element === target) {
      return true;
    } else if (target < mid_Element) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

//driver code
const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 60;
const result = findTarget(arr, target);
console.log(result);

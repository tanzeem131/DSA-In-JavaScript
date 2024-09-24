function ternarySeacrh(arr, l, r, target) {
  let mid1 = Math.floor(l + (r - l) / 3);
  let mid2 = Math.floor(r - (r - l) / 3);
  while (l <= r) {
    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    if (target < arr[mid1]) {
      return ternarySeacrh(arr, l, mid1 - 1, target);
    }
    if (target > arr[mid2]) {
      return ternarySeacrh(arr, mid2 + 1, r, target);
    } else {
      return ternarySeacrh(arr, mid1 + 1, mid2 - 1, target);
    }
  }
  return -1;
}

//driver code
const arr = [20, 25, 47, 56, 54, 63, 65, 79, 82];
const l = 0;
const r = arr.length;
const target = 79;
const result = ternarySeacrh(arr, l, r, target);
console.log(result);

//BUBBLE SORT
//Time-complexity-O(n^2)

function sortedArray(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      //comparisons
      if (arr[j] > arr[j + 1]) {
        //swap of the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//driver code
const arr = [70, 20, 50, 90, 33, 3, 5];
const n = arr.length;
const result = sortedArray(arr, n);
console.log(result);

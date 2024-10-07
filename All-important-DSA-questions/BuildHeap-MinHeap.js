/**
arr = [1, 3, 7, 9, 12, 10, 8, 16, 18, 22, 27]
Create a buildHeap method that returns a minheap.
*/

//Time complexity:O(n);

function heapify(arr, n, i) {
  let smallest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (arr[l] < arr[smallest]) smallest = l;

  if (arr[r] < arr[smallest]) smallest = r;

  [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  heapify(arr, n, smallest);
}

function buildheap(arr, n) {
  let startIndex = Math.floor(n / 2) - 1;
  for (let i = startIndex; i >= 0; i--) {
    heapify(arr, n, i);
  }
  return arr;
}

//driver code
const arr = [1, 3, 7, 9, 12, 10, 8, 16, 18, 22, 27];
const n = arr.length;
const result = buildheap(arr, n);
console.log(result);

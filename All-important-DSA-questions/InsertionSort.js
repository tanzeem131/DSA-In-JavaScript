//Insertion Sort
//Time complexity: O(n^2)

function insertionSort(arr, n) {
  for (i = 1; i < n; i++) {
    let key = arr[i];
    for (j = i - 1; j >= 0 && key < arr[j]; j--) {
      arr[j + 1] = arr[j];
      //   j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

//driver code
const arr = [75, 90, 100, 95, 85, 80];
const n = arr.length;
const result = insertionSort(arr, n);
console.log(result);

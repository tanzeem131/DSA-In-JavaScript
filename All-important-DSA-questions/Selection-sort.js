//SELECTION SORT
//time complexity - O(n^2)

function sortedArray(arr, n) {
  for (let i = 0; i < n; i++) {
    //storing the index of min value
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

//driver code
const arr = [70, 20, 50, 90, 33, 3, 5];
const n = arr.length;
const result = sortedArray(arr, n);
console.log(result);

//time-complexity:O(n);
//space-complexity:O(1);but in merge sort we will use n space so for that we will write space complexity as O(n);

function linearsearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i;
  }
  return -1;
}

const arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];
const x = 65;
result = linearsearch(arr, x);
console.log(`The index of ${x} is ${result}`);

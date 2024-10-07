//Divide And Conquer Approach
//Recurrence relation: T(n)=2T(n/2)+c
//Time comlexity:T(n)=O(n)

function findMinAndMax(arr, i, j) {
  let min_val, max_val;
  //Small Problem-c
  if (i == j) {
    max_val = arr[i];
    min_val = arr[i];
  } else if (i == j - 1) {
    if (arr[i] < arr[j]) {
      max_val = arr[j];
      min_val = arr[i];
    } else {
      max_val = arr[i];
      min_val = arr[j];
    }
  } else {
    //Big Problem
    //Divide and conquer
    //1.Divide-c
    const mid = Math.floor(i + (j - i) / 2);
    //2.Conquer-2T(n/2)
    const { min_val: min_1, max_val: max_1 } = findMinAndMax(arr, i, mid);
    const { min_val: min_2, max_val: max_2 } = findMinAndMax(arr, mid + 1, j);
    //3.Combine
    //3.1 To find final minima
    if (min_1 < min_2) {
      min_val = min_1;
    } else {
      min_val = min_2;
    }
    //3.2 To find final maxima
    if (max_1 < max_2) {
      max_val = max_2;
    } else {
      max_val = max_1;
    }
  }
  return { min_val, max_val };
}

//Driver code
// const arr = [20];
// const arr = [20, 35];
const arr = [20, 35, 40, 10, 70, 20, 30, 80];
const i = 0;
const j = arr.length - 1;
const { min_val, max_val } = findMinAndMax(arr, i, j);
console.log(`Minimum value: ${min_val}`);
console.log(`Maximum value: ${max_val}`);

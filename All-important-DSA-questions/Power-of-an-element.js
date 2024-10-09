//(number)**(odd)
//(number)**(even)
//(number)**(positive)
//(number)**(negative)
//time complexity:O(n)=log(n)

function findPowerOfAnElement(a, n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return a;
  } else {
    let mid;
    if (n < 0) {
      mid = Math.floor(-n / 2);
    } else {
      mid = Math.floor(n / 2);
    }
    const b = findPowerOfAnElement(a, mid);
    const result = b * b;
    if (n > 0) {
      if (n % 2 == 0) {
        return result;
      } else {
        return result * a;
      }
    } else {
      if (n % 2 == 0) {
        return 1 / result;
      } else {
        return 1 / (result * a);
      }
    }
  }
}

//Driver code
const a = 3;
const n = -6;
const result = findPowerOfAnElement(a, n);
console.log(result);

/**GOOGLE ASKED QUESTION */

/**
* 1.Slope method--------------Time complexity:O(1)
function isCollinear([x1, x2, x3, y1, y2, y3]) {
    if ((y2 - y1) * (x3 - x1) === (y3 - y2) * (x2 - x1)) return true;
    else return false;
}
*/

// 2.Area of triangle=0-------Time complexity:O(1)
function isCollinear([x1, x2, x3, y1, y2, y3]) {
  if (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0) return true;
  else return false;
}

// let [x1, x2, x3, y1, y2, y3] = [1, 1, 1, 1, 4, 5];
let [x1, x2, x3, y1, y2, y3] = [1, 1, 0, 1, 6, 9];
let result = isCollinear([x1, x2, x3, y1, y2, y3]);
console.log(result);

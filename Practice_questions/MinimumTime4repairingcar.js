/**
 * You are given an integer array ranks representing the ranks of some mechanics. ranksi is the rank of the ith mechanic. A mechanic with a rank r can repair n cars in r * n2 minutes.

You are also given an integer cars representing the total number of cars waiting in the garage to be repaired.

Return the minimum time taken to repair all the cars.

Note: All the mechanics can repair the cars simultaneously.

 

Example 1:

Input: ranks = [4,2,3,1], cars = 10
Output: 16
Explanation: 
- The first mechanic will repair two cars. The time required is 4 * 2 * 2 = 16 minutes.
- The second mechanic will repair two cars. The time required is 2 * 2 * 2 = 8 minutes.
- The third mechanic will repair two cars. The time required is 3 * 2 * 2 = 12 minutes.
- The fourth mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​
Example 2:

Input: ranks = [5,1,8], cars = 6
Output: 16
Explanation: 
- The first mechanic will repair one car. The time required is 5 * 1 * 1 = 5 minutes.
- The second mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
- The third mechanic will repair one car. The time required is 8 * 1 * 1 = 8 minutes.
It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​
 

Constraints:

1 <= ranks.length <= 105
1 <= ranks[i] <= 100
1 <= cars <= 106
 */

function repairCars(ranks, cars) {
  const count_repaired = function (m) {
    let count = 0;
    for (let i = 0; i < ranks.length; i++) {
      count = count + Math.floor(Math.sqrt(m / ranks[i]));
    }
    return count;
  };

  let l = 1;
  let h = ranks[0] * cars * cars;
  let res = -1;
  while (l <= h) {
    let m = l + Math.floor((h - l) / 2);
    const repaired_car = count_repaired(m);
    if (repaired_car >= cars) {
      res = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return res;
}

const ranks = [4, 2, 3, 1];
const cars = 10;
console.log(repairCars(ranks, cars));

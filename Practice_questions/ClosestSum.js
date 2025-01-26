/**AMAZON ASKED QUESTION */
/**
 * Given an integer of array nums of length n and an integer target,
 * find the three integers in nums that the sum is closest to the target.
 * You need to return Sum of three integers.
 *
 * Example:
 * input:  nums=[-1,2,1,-4],target=1
 * output: 2 (-1+2+1)
 */

//Time complexity calculation: O( n*log(n) + n**2 ) ---------------->final time complexity:O(n**2)

function closestSum(nums, target) {
  let closestSum = Math.abs(target * 100000);
  nums.sort();

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sumValue = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sumValue) < Math.abs(target - closestSum)) {
        closestSum = sumValue;
      } else if (sumValue > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return closestSum;
}

const nums = [-1, 2, 3, -4];
const target = 2;
const result = closestSum(nums, target);
console.log(result);

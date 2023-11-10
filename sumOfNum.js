//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (obj[target - n] !== undefined) {
      return [obj[target - n], i];
    }

    obj[n] = i;
  }
  return [];
};

twoSum([1, 2, 3], 5);
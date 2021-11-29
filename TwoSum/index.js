/* Given an array of integers nums and an integer target, return indices(plural of index) of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Soution-1 

// Brute force method

let twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}



 console.log(twoSum([2,7,11,15], 9));

// Soution-2

let twoSumSolution2 = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            return [obj[nums[i]], i]
        }
        obj[target - nums[i]] = i;
    }
    console.log(obj)

}

console.log(twoSumSolution2([11, 15, 2, 7], 9));

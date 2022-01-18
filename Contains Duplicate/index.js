/* 
Given an integer array nums, return true if any value 

appears at least twice in the array, and return false 

if every element is distinct.

*/

/* Solution-1 */

var containsDuplicate = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] == undefined) {
            obj[nums[i]] = "job";
        } else {
            return true;
        }
    } return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 1, 1, 1]))

/* Solution-2 */

var containsDuplicate2 = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            return true
        }
    } return false
};
// containsDuplicate([1, 2, 3, 1])
console.log(containsDuplicate2([1, 2, 3, 4, 1, 1, 1]))
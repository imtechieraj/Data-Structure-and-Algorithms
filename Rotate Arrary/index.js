/* 
Given an array, rotate the array to the right by k steps, 
where k is non-negative. 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

var rotate = function (nums, k) {
     k = k % nums.length;
  
    var leftItem = nums.slice(0, nums.length - k);
    var rightItem = nums.slice(nums.length - k);

    for (var i = 0; i < rightItem.length; i++) {
        nums[i] = rightItem[i]
    }

    for (var i = 0; i < leftItem.length; i++) {
        nums[rightItem.length + i] = leftItem[i];
    }

    console.log(nums)
};

console.log(rotate([1, 2], 5))


var rotate2=(nums,k)=>{
    let first = k % nums.length;
    console.log(first)
    nums.unshift(...nums.splice(-first));
    return nums;
}

//console.log(rotate2([1, 2], 5))

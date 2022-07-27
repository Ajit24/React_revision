// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    let Num = 0;
   let newNum = nums[0];
   nums.map((e,i)=>{
      Num = Math.max(e,Num+e)
      newNum = Math.max(newNum,Num)
   })
 return newNum;
};
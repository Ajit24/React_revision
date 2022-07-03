// Minimum Size Subarray Sum 
// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.


//Input: 
var target = 7, nums = [2,3,1,2,4,3]
//Output: 2

// function minSubArrayLen(nums, target) {
//     /*
//     :type s: int
//     :type nums: List[int]
//     :rtype: int
//     :Time Complexity: O(N)
//     :Space Complexity: O(1)
//     */
//     var current_sum, left, minLen, right;
//     left = 0;
//     right = 0;
//     minLen = nums.length + 1;
//     current_sum = 0;
  
//     while (left < nums.length && right < nums.length) {
//       current_sum += nums[right];
  
//       if (current_sum === target) {
//         minLen = min(minLen, right - left + 1);
//         right += 1;
//       } else {
//         if (current_sum > target) {
//           current_sum -= nums[left];
//           left += 1;
//         } else {
//           right += 1;
//         }
//       }
//     }
  
//     return minLen === nums.length + 1 ? 0 : minLen;
//   }
  
// ------------------- sol-2 --------------------------

    /*
    :type s: int
    :type nums: List[int]
    :rtype: int
    :Time Complexity: O(N^3)
    :Space Complexity: O(N)
    */
    var minSubArrayLen = function(target, nums) {
        if (!nums || !nums.length) return 0;
          let sum = 0, left = 0;
          let res = Number.POSITIVE_INFINITY;
          for (let i = 0; i < nums.length; i++) {
              sum += nums[i];
              
              // shrink range
              while (sum >= target) {
                  res = Math.min(res, i - left + 1);
                  sum -= nums[left];
                  left++;
              }
          }
          return res === Number.POSITIVE_INFINITY ? 0 : res;
      };

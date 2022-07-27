//Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array.

// Return the minimum number of patches required.

// Input: nums = [1,3], n = 6
// Output: 1

var minPatches = function(nums, n) {
    
  let i =0; 
  let missingNumber = 1;
  let counter = 0;
  while(missingNumber <= n){
      if(nums[i] <= missingNumber){
          missingNumber = missingNumber + nums[i];
          i++;
      }
      else {
          missingNumber = 2 * missingNumber;
          counter++;
      }
      
  }
  return counter; 
};
var res = minPatches([1,3],6);
console.log(res);


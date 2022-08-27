
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// tc & sc = O(N)

var TwoSum = function(nums, target) {
      var map = {}
      for(let i = 0; i < nums.length; i++){
        var value = nums[i];
        var complementPair = target - value;
        if(map[complementPair] !== undefined){
            return [map[complementPair], i]
        }else{
            map[value] = i;
        }

      }

}
console.log(TwoSum([2,7,11,15], 9));
// [ 0, 1 ]
console.log(TwoSum([1,5,9], 10));
//[ 0, 2 ]




// ------------------- 2nd sol

var two_Sum = function(nums, target) {
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        if(hash[target - nums[i]] !== undefined){
            return [i,  hash[target -nums[i]]];
        }
        hash[nums[i]] = i;
    }
    return [];

};
//console.log(two_Sum([2,7,11,15], 9)); 
// [1, 0];



// --------------- 







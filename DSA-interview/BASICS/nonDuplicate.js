///Given an array of n integers, every number in it appears twice expect for one. we have to find the one with single occurrence.

// Input:
// [2, 1, 2]
// [3, 5, 5, 6, 6]

// Output:
// 1
// 3

// Time complexity: O(n + n) => O(n).
// Space complexity: O(n).

const singleNumber = (nums) => {
    //Hashmap
    const track = {};
    
    //Count the frequency
    for(let i = 0; i < nums.length; i++){
        if(track[nums[i]]){
            track[nums[i]]++;
        }else{
            track[nums[i]] = 1;
        }
    }
    
    //Return the element with odd frequency
    for(let key in track){
        if(track[key] % 2 !== 0){
            return key;
        }
    }
};
//  console.log(singleNumber([2,1,2]));
console.log(singleNumber([3,5,6,6]));
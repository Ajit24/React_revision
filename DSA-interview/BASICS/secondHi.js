// sort the array and find 2nd max number . 

function getSecondLargest(nums) {
    nums.sort(function(x,y){
           return y-x;
        });
    for(var j=1; j < nums.length; j++)
     {
        if(nums[j-1] !== nums[j])
        {
             return nums[j];
        }
     }
    }
    console.log(getSecondLargest([1,2,3,4,5,5]));
    // 4
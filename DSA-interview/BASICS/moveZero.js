// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12] Output: [1,3,12,0,0]


//var nums = [0,1,0,3,12];

const moveZeroes = nums => {
    if (nums.length<=1)
        return

    let indexZero = nums.indexOf(0);
    let i = indexZero+1

    while (indexZero<nums.length && i<nums.length && indexZero !== -1){

        if (nums[i] !== 0){ // swap
            nums[indexZero] = nums[i]
            nums[i] = 0
            indexZero++
            i = indexZero+1 // reset
        } else {
            i++
        }
    }
    console.log(moveZeroes([0,1,0,3,12]));
};
// console.log(moveZeroes([0,1,0,3,12]));
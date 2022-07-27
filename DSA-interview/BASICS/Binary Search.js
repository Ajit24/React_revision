// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
var search = function(arr, target) {
    let n = arr.length
    let i = 0
    let j = n-1
    
    while(i<=j) {
        let mid = parseInt((i+j)/2)
        if(arr[mid] == target) return mid
        if(arr[mid] < target) i = mid+1
        else j = mid - 1
    }
    
    return -1
  };
  var res = search([-1,0,3,5,9,12],9);
  //console.log(res);
  // out = 4;
  
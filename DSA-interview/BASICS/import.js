// Write a program to find second largest number in given array. [89,90,67,56,90,92]
//let arr = [80, 90, 67, 56, 90, 92];

// function SecondLargestNumber(arr) {
//   let largest = -Infinity;
//   let secondLarge = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLarge = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLarge) {
//       secondLarge = arr[i];
//     }
//   }
//   return secondLarge;
// }
// console.log(SecondLargestNumber(arr));

// // Write a program to count number of characters in sequence in given string and return output as follows
// Only increase the count of alphabets in the string
// If you encounter any digit or alpha numeric character, do not alter it
// Sample Output - 1:
// AabbBcbbd - a2b3c1b2d1
//aa11b - a211b1
// Ab&& - a1b1&&

// let str = "AabbB11cbbd";
// let arr = str.toLocaleLowerCase();
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] == undefined) {
//     obj[arr[i]] = 1;
//   } else if ((obj[arr[i]] = 1)) {
//     obj[arr[i]]++;
//   }
// }
// for (let key in obj) {
//   if (typeof key == "number") {
//     console.log(key);
//   } else {
//     console.log(key, obj[key]);
//   }
// }

// Given an integer n, write program to print following pattern
// N = 5:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// let N = 5;
// count = 1;
// for (var i = 1; i <= N; i++) {
//   var pattern = "";
//   for (var j = 1; j <= i; j++) {
//     pattern = pattern + count + " ";
//     count++;
//   }
//   console.log(pattern);
// }

// --------------

// For example: "aabsssd"

//   output: a:2, b:1, s:3, d:1

//var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// function counter(x) {
//   var count = 0,
//     temp = [];
//   x = x.split('');
//   console.log(x);
//   for (var i = 0, len = x.length; i < len; i++) {
//     if (x[i] == "a") {
//       count++;
//     }
//   }
//   return count;
// }
// var a = "aabbddd";
// console.log(counter(a));

// --------------------------- DSA QUES ----------------------------

//var arr = [2,5,4,2,1,2,6];
// out = 5;

// PRINT REPEATING NUMBERS IN GIVEN ARRAY

//  let  array = [ 0, 4, 3, 2, 7, 8, 2, 3, 1,];
// //output = [ 2, 3 ]
//     let n =  array.length;
//     var ans = []
    
    
//     // count the frequency
//     for (let i = 0; i < n; i++) {
//          array[ array[i] % n]
//             =  array[ array[i] % n] + n;
//     }
    
//     for (let i = 0; i < n; i++) {
//         if ( array[i] >= n * 2) {
//             ans.push(i)
//         }
//     }
//     console.log(ans);

   // ----------  printFirstRepeating ------------------------

   var arr = [ 10, 5, 3, 4, 3, 5, 6 ];
  // out = 5;
   var n = arr.length;
   function FirstRepeating(arr , n) {

       // This will set k=1, if any
       // repeating element found
       var k = 0;
   
       // max = maximum from (all elements & n)
       var max = n;
       for (i = 0; i < n; i++)
           if (max < arr[i])
               max = arr[i];
   
       // Array a is for storing
       // 1st time occurrence of element
       // initialized by 0
       var a = Array(max + 1).fill(0);
   
       // Store 1 in array b
       // if element is duplicate
       // initialized by 0
       var b = Array(max + 1).fill(0);
       for (var i = 0; i < n; i++) {
   
           // Duplicate element found
           if (a[arr[i]] != 0) {
               b[arr[i]] = 1;
               k = 1;
               continue;
           } else
               // storing 1st occurrence of arr[i]
               a[arr[i]] = i+1;
       }
   
       if (k == 0)
           console.log("No repeating element found");
       else {
           var min = max + 1;
   
           // trace array a & find repeating element
           // with min index
           for (i = 0; i < max + 1; i++)
               if (a[i] != 0 && min > a[i] && b[i] != 0)
                   min = a[i];
           console.log(arr[min-1]);
       }
   }
       FirstRepeating(arr, n);
       //output = 5



       // ----------------  Median of Two Sorted Arrays


//        Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000

// Explanation: merged array = [1,2,3] and median is 2.

function MedianSortedArrays(nums1, nums2) {
    
    const nums = nums1.concat(nums2);
 const n = nums.length;
 nums.sort((a, b) => a - b);

 if (n % 2 !== 0) {
   return nums[Math.floor(n / 2)];
 }

 return (nums[n / 2] + nums[n / 2 - 1]) / 2;
   
}
var res = MedianSortedArrays([1,2],[3,4]);
console.log(res.toFixed(5));
// out = 2.50000


//       ----------------    jump game2 -        --------------------------------------------
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
  function jump(nums) {
    var l = 0, r = 0, jumps = 0;
    var n = nums.length
    while(r < n-1){
        var maxReach = 0;
        for(var i = l; i < r+1; i++){
            maxReach = Math.max(maxReach, nums[i]+i);
        }
        l = r+1;
        r = maxReach;
        jumps += 1;
    }
    return jumps;
};
var res = jump([2,3,0,1,4]);
console.log(res);
// out = 2

// ----------------------------------------------



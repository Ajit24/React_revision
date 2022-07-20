// Write a program to find second largest number in given array. [89,90,67,56,90,92]
let arr = [80, 90, 67, 56, 90, 92];
function SecondLargestNumber(arr) {
  let largest = -Infinity;
  let secondLarge = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}
console.log(SecondLargestNumber(arr));

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
let N = 5;
count = 1;
for (var i = 1; i <= N; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + count + " ";
    count++;
  }
  console.log(pattern);
}
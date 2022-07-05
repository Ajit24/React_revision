// level 2
/* 1. Write a function to remove all even numbers from an Array.
```
Input array: 
[1, 3, 4, 6, 7, 8]
```
```
Output should be array: [1, 3, 7]
```
2. Replace all the vowels in a string with uppercase vowels.
```
Input string: 'Elie'
```
```
Output should be string: 'ElIE'
```
3. Write a function to find the maximum number in an array.
```
Input array: [1, 3, 4, 6, 7, 8, 2, 5]
```
```
Output should be a number: 8
``` */

// 1. Write a function to remove all even numbers from an Array.
let arr = [1, 3, 4, 6, 7, 8];
function removeEvenNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log("removeEvenNum(arr):", removeEvenNum(arr));

//2. Replace all the vowels in a string with uppercase vowels.

let str = "Elie";
function replaceVovels(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}
console.log("replaceVovels(str):", replaceVovels(str));

//3. Write a function to find the maximum number in an array.
let numArr = [1, 3, 4, 6, 7, 8];

function findMax(arr) {
  let max = -1;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}
console.log("findMax(arr):", findMax(arr));
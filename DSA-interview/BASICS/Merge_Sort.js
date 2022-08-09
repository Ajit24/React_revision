var arr = [5, 3, 37, 9, 5, 29, 9, 44, 1, 8];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  var mid = Math.floor(arr.length / 2);

  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort(arr));

// function merge(left, right) {
//   let mergeArr = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       mergeArr.push(left.shift());
//     } else {
//       mergeArr.push(right.shift());
//     }
//   }

//   while (left.length) {
//     mergeArr.push(left.shift());
//   }

//   while (right.length) {
//     mergeArr.push(right.shift());
//   }

//   return mergeArr;
// }
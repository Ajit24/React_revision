var arr = [2, 5, 6, 8, 9, 3, 4, 3, 4];
//5
var k = 3;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] === k) {
//         console.log(i);
//         break;
//     }

// }

function firstOccurance(arr, i, k) {
  if (i === arr.length) {
    return -1;
  }

  //   console.log("hello");

  if (arr[i] === k) {
    return i;
  } else {
    var fooe = firstOccurance(arr, i + 1, k);
    return fooe;
  }
}

console.log(firstOccurance(arr, 0, k));
// firstOccurance(arr, 0, k);
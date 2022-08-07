var arr = [2, 5, 6, 8, 9, 3, 4, 3, 4];
//7
var k = 3;

function lastOccurance(arr, i, k) {
  if (i < 0) {
    return -1;
  }

  if (arr[i] === k) {
    return i;
  } else {
    var looe = lastOccurance(arr, i - 1, k);
    return looe;
  }
}

console.log(lastOccurance(arr, arr.length - 1, k));
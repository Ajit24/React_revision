var arr = [2, 5, 3, 8, 9, 3, 4, 3, 4];
// 2 5 7
var k = 3;

function allIndexes(arr, i, k) {
  if (i === arr.length) {
    return;
  }

  if (arr[i] === k) {
    console.log(i);
  }

  allIndexes(arr, i + 1, k);
}

allIndexes(arr, 0, k);
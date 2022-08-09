var arr = [3, 5, 6, 7, 9, 10, 13];
// 3 5 6 7 9 10 13

function printArr(arr, i) {
  if (i === arr.length) {
    return;
  }

  console.log(arr[i]);
  printArr(arr, i + 1);
}

printArr(arr, 0);
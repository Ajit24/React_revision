var arr = [10, 20, 30, 40, 50];

function reverseArray(arr, i) {
  if (i < 0) {
    return;
  }

  console.log(arr[i]);
  reverseArray(arr, i - 1);
}

reverseArray(arr, arr.length - 1);
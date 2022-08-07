var arr = [10, 30, 40, 50, 20];
// 50

function maxInArr(arr, i) {
  if (i === arr.length - 1) {
    return arr[i];
  }

  var misa = maxInArr(arr, i + 1);
  if (misa > arr[i]) {
    return misa;
  } else {
    return arr[i];
  }
}

console.log(maxInArr(arr, 0)); //agar kuch return karwaya hai toh "console" ke ander execute karna padega
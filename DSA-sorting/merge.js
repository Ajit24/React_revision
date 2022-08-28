// quick-sort 
function mergesort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergesort(leftArr), mergesort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  const resultArr = [...sortedArr, ...leftArr, ...rightArr]
  return resultArr
}

const arr = [8, 20, -2, 4, -6]
console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]





// ------------------- 2nd ques  
const merge = (array1, array2) => {
  let i = 0,
    j = 0,
    res = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) res.push(array1[i++]);
    else res.push(array2[j++]);
  }
  while (i < array1.length) res.push(array1[i++]);
  while (j < array2.length) res.push(array2[j++]);
  return res;
};
const findMerge = (array) => {
if(array.length <= 1)return array;
let mid = Math.floor(array.length / 2)
let left = findMerge(array.slice(0,mid));
let right = findMerge(array.slice(mid));
return merge(left, right);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  console.log(findMerge(array));
};
if (process.env.USERNAME === "Ajit") {
  runProgram(`5
    3 5 0 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

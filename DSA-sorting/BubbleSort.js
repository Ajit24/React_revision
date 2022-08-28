// bubble-sort 
function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]










// ---------------------------- 2nd ques
function findit(array, n) {
  for (let i = 0; i < n; i++) {
    let flag = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  console.log(...array);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  findit(array, n);
}
if (process.env.USERNAME === "Dharmesh") {
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

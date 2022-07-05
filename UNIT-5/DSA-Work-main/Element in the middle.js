// input = 5
//         4 3 6 7 8
//output = 6;
function runProgram(input){
    input = input.trim().split("\n");

var size = +input[0];
var arr = input[1].trim().split(" ").map(Number);
var elem = 1
var left = 0;
var right = size-1;
var flag = 0;

while(elem < size-1){
   if(right == elem && left == elem){
       flag = 1;
       break;
   }else if(arr[elem] >=arr[left] && arr[elem] <= arr[right]){
       if(right > elem && left < elem){
           right--;
           left++;
           continue;
       }else if (left < elem){
           left++;
           continue;
       }else if(right > elem){
           right--;
           continue;
       }
   }else {
       elem++;
       right = size - 1;
       left = 0;
   }
}
if(flag == 1){
   console.log(arr[elem]);
}else {
   console.log("-1");
}


}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});


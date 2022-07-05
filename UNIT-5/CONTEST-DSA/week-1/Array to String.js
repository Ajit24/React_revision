

function runProgram(input) {
var input = input.trim().split("\n")
 var N = +input[0];

var arr = input[1].trim().split(" ").map(Number)
 ArrayToString(N, arr);
// console.log(arr);
}
function ArrayToString(N, arr){
    var string = ""
    for(var i = 0; i <N; i++){
        if(arr[i] < 0){
            string += 0;
        }else{
            string += arr[1];
        }
    }
    console.log(string);
}

  if (process.env.USERNAME === "Ajit") {
      runProgram(`5
      2 -4 6 8 -9`);
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


  //var newInput = input.split(" ");
//var input = input.trim().split("\n")

//var k = +input[0].trim()
//let arr = input[1].trim().split(" ").map(Number)
//console.log(k,arr);


// input = input.trim();
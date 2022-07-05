

function runProgram(input) {
    
   
}

  if (process.env.USERNAME === "Ajit") {
      runProgram(`3`);
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
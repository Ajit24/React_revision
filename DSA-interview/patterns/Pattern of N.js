 // 2 star question
 
function runProgram(input) {
  var N = Number(input);
  var count = 1;
  for (let i = 0; i < N;i++)
  {
    var temp = "";
    for (let j = 0; j < N;j++)
    {
      temp += count + " ";
      count++;
      
    }
    console.log(temp);
  }
}
if (process.env.USERNAME === "Ajit") {
  runProgram(`4`);
   
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

function runProgram(input) {
    input=Number(input);    
    console.log( fun(input,0))
}

function fun(n,c){
    let array=new Array(n+2);
    array[0]=1
    array[1]=1
    array[2]=2

    for (let i =3; i <=n; i++) {
        array[i]=array[i-3]+array[i-2]+array[i-1]
    }
return array[n]
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

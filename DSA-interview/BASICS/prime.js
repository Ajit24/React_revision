// check prime 
function isPrime(n) {
    if (n < 2) {
      return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      // if n is divisible by any number then it is not prime
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
  
  console.log(isPrime(1)) // false
  console.log(isPrime(5)) // true
  console.log(isPrime(4)) // false










function isPrime(n) {
    if (n == 1)
        return false;
    if (n % 2 == 0 && n != 2)
        return false;


    var count = 0;
    for (var i = 3; i * i <= n; i += 2) {
        if (n % i == 0)
            count++;
        if (count > 0)
            return false;
    }
    return true;
}


function runProgram(input) {
    var n = Number(input);
    if (isPrime(n))
        console.log("Yes");
    else
        console.log("No");

}
if (process.env.USERNAME === "Ajit") {
    runProgram(`13`);
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
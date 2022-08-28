// Fibonacci Sequence
function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
  }
  
  console.log(fibonacci(2)) // [0,1]
  console.log(fibonacci(3)) // [0,1,1]
  console.log(fibonacci(7)) // [0,1,1,2,3,5,8]
  
   

//var n = 5;
// 1 1 2 3 5
var n = 10;
// 1 1 2 3 5 8 13 21 34 55
var temp = "1";
var sum = 0;
var a = 0;
var b = 1;
for (let i = 0; i < n-1;i++)
{
    sum = a + b;
    temp += " " + sum;
    a = b;
    b = sum; 
}
console.log(temp);

// -------------------   fib using recursion 

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = 5;

if(nTerms <=0) {
    console.log(nTerms);
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
// 0 1 1 2 3 

// - ----------------------    Recursive Fibonacci Sequence

function recursiveFibonacci(n) {
    if (n < 2) {
      return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
  }
  
  console.log(recursiveFibonacci(0)) // 0
  console.log(recursiveFibonacci(1)) // 1
  console.log(recursiveFibonacci(7)) // 8


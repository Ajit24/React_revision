function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
      result = result * i
    }
    return result
  }
  
  console.log(factorial(0)) // 1
  console.log(factorial(1)) // 1
  console.log(factorial(5)) // 120
  
// recursive method

function recursiveFactorial(n) {
    if (n === 0) {
      return 1
    }
    return n * recursiveFactorial(n - 1)
  }
  
  console.log(recursiveFactorial(0)) // 1
  console.log(recursiveFactorial(1)) // 1
  console.log(recursiveFactorial(5)) // 120
  
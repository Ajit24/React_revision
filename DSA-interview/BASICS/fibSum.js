// Sum of Fibonacci Numbers

// tc - (O(n)) 

function calculateSum(n)
{
    let fibo = [];
    if (n <= 0)
    return 0;
 
    fibo[0] = 0;
    fibo[1] = 1;
 
    // Initialize result
    let sum = fibo[0] + fibo[1];
 
    // Add remaining terms
    for(let i = 2; i <= n; i++)
    {
        fibo[i] = fibo[i - 1] +
                    fibo[i - 2];
        sum += fibo[i];
    }
 
    return sum;
}
console.log(calculateSum(4));
//7   // Explanation : 0 + 1 + 1 + 2 + 3  = 7

console.log(calculateSum(3));
//4     // Explanation : 0 + 1 + 1 + 2  = 4


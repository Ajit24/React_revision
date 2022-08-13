
//An algorithm to print all the prime numbers up to 100.


// Time complexity: O(n * log(log(n))).
// Space complexity: O(n).



let allPrimes = (n) => {
    //Create new n+1 array and mark them as true
    let isPrime = new Array(n+1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
   
    let primes = [];
 
    for(let i = 2; i <= n; i++){
      //if the number is  
      if(isPrime[i] === true){
         primes.push(i); 
      }
      
       //mark all the numbers divisible i as false
       let next = i * i;
       while (next <= n) {
         isPrime[next] = false;
         next += i;
       }  
    }
 
    return primes;
 }
 //Input:
console.log(allPrimes(100));

// Output:
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
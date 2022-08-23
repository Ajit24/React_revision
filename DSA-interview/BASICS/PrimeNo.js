function identifyPrime(num) {
    // Write code here
    // var isPrime = true;
    var count =0
    for(var i=1; i<=num; i++){
        if(num % i == 0){
            count ++
        }
    }
    if(count==2){
        console.log("Yes");
    }else{
        console.log("No");
    }
    
    
}
identifyPrime(13);

// check two prime : 11 , 17

function twoPrimes(a,b) {
    //write code here
    var isprime = true;
    
    for(var i =2 ; i<=a-1; i++){
        if(a%i ==0){
            isprime = false ;
            break;
        }
    }
    
    for(var i =2 ; i<=b-1; i++){
        if(b%i ==0){
            isprime = false ;
            break;
        }
    }
    
    if(isprime ){
        console.log("True")
    }else {
        console.log("False")
    }

}
twoPrimes(11,17)

// // program to print prime numbers between the two numbers


// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = 2;
const higherNumber = 10;
// 2 3 5 7

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


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


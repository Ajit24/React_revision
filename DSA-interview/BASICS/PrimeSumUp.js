//You are given a number, stored in a variable with the namenum. Find out the sum of all prime numbers in the range of [1,num], including the value stored innum
 

function primeSumUp(num) {
    // Write code here
    var sum = 0;
    for(var i = 2; i<=num; i++){
        var out = "true";
        for(var j = 2; j<i; j++){
            if(i % j == 0){
               out = "false";
               break;
            }
            
        }
        if(out == "true"){
            sum += i;
        }
        }
        console.log(sum);
    }
    primeSumUp(13)
    // out = 41; 
    


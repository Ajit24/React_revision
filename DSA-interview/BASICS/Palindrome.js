let str = "civic";
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("YES");
} else {
  console.log("NOT");
}

//  ----------- number 

var isPalindrome = function(x) {
    
	// because reversed number will have '-' sign at the end 
	// and original will have it at the front.
    if(x < 0) return false;
    
    let num = x;
    
    let reversedNum = 0;
    
    while(num > 0){
        
        reversedNum = reversedNum*10 + num%10;
        
		// return only the part before the decimal.
        num = Math.trunc(num / 10);
        
    }
    
    return reversedNum == x;
    
};
console.log(isPalindrome(121));  // true
  
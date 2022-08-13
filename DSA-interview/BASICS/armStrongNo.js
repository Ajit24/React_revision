//An algorithm to check if given number is Armstrong number in javascript.

// Time complexity: O(logn) or O(d).- We are extracting each digit from the number, so Time complexity is O(logn)
//Space complexity: O(1).- We are using constant space, so



let isArmstrong = (num) => {
    let sum = 0;
    //store the actual number to check later
    let temp = num;
  
    //Extract each digit of number
    while(num > 0){
      //get the last digit of the number
      let d = parseInt(num % 10);
    
      //find the cube
      d = d ** 3;
      sum = sum + d;
    
      //reduce the number
      num = parseInt(num / 10);
    }
    
    //Check if number equals to the cubed sum
    return temp === sum;
  }
  console.log(isArmstrong(153));
console.log(isArmstrong(154));


function ToDigits(n, arr)
{
 
    // base case
    if (n == 0) {
        return;
    }
 
    // storing the last digit of the number and updating
    // number
    let digit = n % 10;
    n = Math.floor(n / 10);
 
    // recursive call
    ToDigits(n, arr);
 
    // printing the digits form the string array storing name
    // of the given index
    console.log(arr[digit] , " ");
}
 
// driver code
let arr = [ "zero", "one", "two", "three", "four",
            "five", "six", "seven", "eight", "nine" ]
let n = 123; //it can be changed to take user input
 
ToDigits(n, arr);
 
// This code is contributed by shinjanpatra
 
//Factors of Positive Number

// The factor of 12 is 1, 2, 3, 4, 6, and 12.

// program to find the factors of an integer

// take input
const num = 12;

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}
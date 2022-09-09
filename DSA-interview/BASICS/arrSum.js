// Given an array of integers, find the sum of its elements.



function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    ar.forEach(num => {
        sum += num
    })
    return sum;

}
console.log(simpleArraySum([1,2,3])); //6
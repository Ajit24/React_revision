//An algorithm to sort only the positive numbers of the given array without changing the positions of negative numbers.

// Input:
// [ 2, -6, -3, -8, 4, 1]
// [ 9, -2, 3, -1, 1, 5]

// Output:
// [1, -6, -3, -8, 2, 4]
// [1, -2, 3, -1, 5, 9]

// Time complexity: O(n + nlogn + n) = O(nlogn).
// Space complexity: O(n).

let sortOnlyPositive = (arr) => {
    //Filter the positive number from the array
    //And sort them
    let filtered = arr.filter(e => e > 0).sort();
    
    //Temp array to hold the sorted array
    let sorted = [];
    
    //To keep track of the positive sorted array list.
    let j = 0; 
   // let temp = 0;
    
    //Replace the positive numbers with sorted numbers
    for(let i = 0; i < arr.length; i++){
      //If the number is positive
      //Then replace it with first number
      //From filtered and sorted positive numbers array
      if(arr[i] > 0){
        sorted.push(temp[j++]);
      }else{
        //Else push the negative number at the same place
        sorted.push(arr[i]);
      }
    }
    
    //Return the temp array
    return sorted;
  }

console.log(sortOnlyPositive([ 2, -6, -3, -8, 4, 1]));
console.log(sortOnlyPositive([ 9, -2, 3, -1, 1, 5]));

// Output:
// [1, -6, -3, -8, 2, 4]
// [1, -2, 3, -1, 5, 9]
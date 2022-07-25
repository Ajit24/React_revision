// Remove Specific Item From an Array

// program to remove item from an array
//  1: Using For Loop
function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);
//Output   [1, 3, 4, 5]

console.log(result);

//2: Using Array.splice()

// program to remove item from an array

function removeItemFromArray(array, n) {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array.splice(index, 1);
    }
    return array;
}

//const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

//console.log(result);
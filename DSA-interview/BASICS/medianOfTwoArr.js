//Given two sorted arrays we have to find their median, these arrays could be of different lengths.

// Input: arr1 = [1,2], arr2 = [3]
// Output: 2
// Merged sorted array [1,2,3] and its median is 2.

// Input: arr1 = [1,2], arr2 = [3, 4]
// Output: 2.5
// Merged sorted array [1,2,3,4] and its median is (2 + 3)/2 = 2.5.

// Time complexity: O((n+m)log(n+m));
// Space complexity: O(1) depending upon which sort we are using, i am considering quick sort here.

const median = (a, b) => {
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    
    //Get the floor value
    const half = c.length / 2 | 0;
    
    //If odd then return middle element
    if (c.length % 2) return c[half];
    
    //If even then return the average of two mid elements
    return (c[half] + c[half - 1]) / 2;
}

//Input:
const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));

// Output:
// 17
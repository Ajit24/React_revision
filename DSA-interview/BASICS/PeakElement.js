
// A peak element is an element that is greater than its neighbors.


var findPeakElement = function(arr) {
    var start = 0;
 var end = arr.length - 1;

 while (start < end) {
   var middle = Math.floor(start + (end - start) / 2);

   if (arr[middle] > arr[middle + 1]) {
     end = middle;
   } else {
     start = middle + 1;
   }
 }
 return start;
};
console.log(findPeakElement([1,2,3,1]));
//2;
console.log(findPeakElement([1,2,1,3,5,6,4]));
//5
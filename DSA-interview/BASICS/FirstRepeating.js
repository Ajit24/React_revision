var arr = [ 10, 5, 3, 4, 3, 5, 6 ];
// out = 5;
 var n = arr.length;
 function FirstRepeating(arr , n) {

     // This will set k=1, if any
     // repeating element found
     var k = 0;
 
     // max = maximum from (all elements & n)
     var max = n;
     for (i = 0; i < n; i++)
         if (max < arr[i])
             max = arr[i];
 
     // Array a is for storing
     // 1st time occurrence of element
     // initialized by 0
     var a = Array(max + 1).fill(0);
 
     // Store 1 in array b
     // if element is duplicate
     // initialized by 0
     var b = Array(max + 1).fill(0);
     for (var i = 0; i < n; i++) {
 
         // Duplicate element found
         if (a[arr[i]] != 0) {
             b[arr[i]] = 1;
             k = 1;
             continue;
         } else
             // storing 1st occurrence of arr[i]
             a[arr[i]] = i+1;
     }
 
     if (k == 0)
         console.log("No repeating element found");
     else {
         var min = max + 1;
 
         // trace array a & find repeating element
         // with min index
         for (i = 0; i < max + 1; i++)
             if (a[i] != 0 && min > a[i] && b[i] != 0)
                 min = a[i];
         console.log(arr[min-1]);
     }
 }
     FirstRepeating(arr, n);
     //output = 5
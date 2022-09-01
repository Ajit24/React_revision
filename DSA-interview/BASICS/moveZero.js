const arr = [5, 0, 1, 0, -3, 0, 4, 6];
const moveAllZero = (arr) => {
   const res = [];
   let currIndex = 0;
   for(let i = 0; i < arr.length; i++){
      const el = arr[i];
      if(el === 0){
         res.push(0);
      }else{
         res.splice(currIndex, undefined, el);
         currIndex++;
      };
   };
   return res;
};
console.log(moveAllZero(arr));

// guaranteed to has O(N) complexity
function moveZerosToEndFast(a) {
    if (a.length <= 1) { return a; }
    
    let zi = a.indexOf(0); // O(N)
    if (zi === -1 || zi === a.length - 1) { return a; }
    
    for(let i = zi + 1; i < a.length; i++) {
        if (a[i] !== 0) {
            a[zi++] = a[i];
            a[i] = 0;
        }
    } // O(N)
    
    return a;
}
console.log(moveZerosToEndFast([0,1,2,0,5,6,0])); // 1 2 5 6 0 0 0
const arr = [1, 5, 23, 3, 676, 4, 35, 4, 2]; //23
 const findThirdMax = (arr) => {
   let [first, second, third] = [-Infinity, -Infinity, -Infinity];
   for (let el of arr) {
      if (el === first || el === second || el === third) {
         continue; };
         if (el > first) {
            [first, second, third] = [el, first, second]; continue; };
         if (el > second) {
            [second, third] = [el, second]; continue;
          };
         if (el > third) {
            third = el; continue;
      };
   };
   return third !== -Infinity ? third : first;
};
console.log(findThirdMax(arr));
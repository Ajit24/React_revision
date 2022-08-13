let arr=[1,[2,3],[4,5,6],[8,9],[[7]]];
//let arr = [[2,3,4],9,1,[6[4,[3,2]]]]
//utput = [1,2,3,4,5,6,8,9,7]

 const flatten=(arr)=>{
 newArray=arr.reduce((acc,elem)=>{
  if(Array.isArray(elem)){
     acc=acc.concat(flatten(elem));
  }
   else{
    acc=[...acc,elem];
 }
   return acc;
 },[])
  return newArray;
 }
console.log(flatten(arr));

// ----------- 2nd method 

// const flatten = function(arr, result = []) {
//    for (let i = 0, length = arr.length; i < length; i++) {
//      const value = arr[i];
//      if (Array.isArray(value)) {
//        flatten(value, result);
//      } else {
//        result.push(value);
//      }
//    }
//    return result;
//  };

// ------------- ES6 method 

// const flatten = (arr) => {
//    return arr.reduce((flat, toFlatten) => {
//      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//    }, []);
//  }
 

 


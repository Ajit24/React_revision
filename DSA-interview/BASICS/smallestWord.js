const str = 'This is a sample string'; // a
const findSmallest = str => {
   const strArr = str.split(' ');
   const creds = strArr.reduce((acc, val) => {
      let { length, word } = acc;
      if(val.length < length){
         length = val.length;
         word = val;
      };
      return { length, word };
   }, {
      length: Infinity,
      word: ''
   });
   return creds.word;
};
console.log(findSmallest(str));

//---------------- 2nd smallest word-length

// const str = 'This is a sample string';
// const secondSmallest = str => {
//    const strArr = str.split(' ');
//    if(strArr.length < 2){
//       return false;
//    }
//    for(let i = 0; i < strArr.length; i++){
//       strArr[i] = strArr[i].length;
//    };
//    strArr.sort((a, b) => a - b);
//    return strArr[1];
// };
// console.log(secondSmallest(str)); // 2
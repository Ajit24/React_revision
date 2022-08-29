const str = 'THis is an example string'; //5
const findWords = (str = '') => {
   if(!str.length){
      return 0;
   };
   let count = 1;
   for(let i = 0; i < str.length; i++){
      if(str[i] === ' '){
         count++;
      };
   };
   return count;
};
console.log(findWords(str));
//5
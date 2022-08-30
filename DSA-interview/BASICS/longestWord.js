function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("pride and prejudice"));  
//prejudice

// -------------------- 2nd sol
const str = 'Coding in JavaScript is really fun';
const findLongest = (str = '') => {
   const strArr = str.split(' ');
   const word = strArr.reduce((acc, val) => {
      let { length: len } = acc;
      if(val.length > len){
         acc = val;
      };
      return acc;
   }, '');
   return word;
};
console.log(findLongest(str));
//JavaScript






// ------------ 3rdd sol  --------- 
// it will print longest word length ;

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
 console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //6
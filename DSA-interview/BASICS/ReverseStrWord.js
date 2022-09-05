const str = 'Hello World how is it outside';
//           olleH dlroW woh si ti edistuo
const reverseSentence = str => {
   const arr = str.split(" ");
   console.log(arr)
   const reversed = arr.map(el => {
      return el.split('').reverse().join("");
   });
   return reversed.join(" ");
};
console.log(reverseSentence(str))

// ------------ return the string in reversed order.

// "Hello World and Coders"
// sredoC dna dlroW olleH

function FirstReverse(str) { 
   var reverse = '';
       for(var i = str.length - 1; i >= 0; i--)
       reverse += str[i];
       return reverse; 
     return str; 
            
   }
   console.log(FirstReverse("Hello World and Coders"));
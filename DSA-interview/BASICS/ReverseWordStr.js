const str = '123 Hello World how is it outside';
//           321 olleH dlroW woh si ti edistuo
const reverseSentence = str => {
   const arr = str.split(" ");
   //console.log(arr)
   const reversed = arr.map(el => {
      return el.split('').reverse().join("");
   });
   return reversed.join(" ");
};
console.log(reverseSentence(str));
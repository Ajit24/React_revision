//let str = "I am not gonna live forever, but I wanna live while I am alive",
let str = "Learn javascript dude Learn"
// out = { Learn: 2, javascript: 1, dude: 1 }
    split = str.split(" "),
    obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}

console.log(obj) 
//{ Learn: 2, javascript: 1, dude: 1 }

//const str = "big black bug bit a big black dog on his big black nose";
// Then the output should be −

// const output = "big black";

const strr = "big black bug bit a big black dog on his big black nose";
const findDuplicateWords = strr => {
   const strArr = strr.split(" ");
   const res = [];
   for(let i = 0; i < strArr.length; i++){
      if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
         if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
   return res.join(" ");
};
console.log(findDuplicateWords(strr));
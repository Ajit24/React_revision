// -------------  For case-sensitive letters

let containsDuplicates2 = (str) => {
    let set = new Set();
    
    //If it is not whitespace the check if aplhabet is present or not
    for(let i = 0; i < str.length; i++){
  
     if(str[i] != ' '){
  
      if(set.has(str[i])){
        return true;
      }
  
       set.add(str[i]);
      }
    }
    
    return false;
  }

console.log(containsDuplicates2("learnersbucket"));
console.log(containsDuplicates2("abcdefghijk"));
console.log(containsDuplicates2("I Luv life"));

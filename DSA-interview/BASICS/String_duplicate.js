// An algorithm to check if there are duplicate letters in the string.

// We will check if the given string has duplicate letters and if found we will return true, false otherwise.

// Input:
// 'learnersbucket'
// 'abcdefghijk'
// 'I Love learnersbucket'

// Output:
// true
// false
// true

// Time Complexity: O(n).
// Space Complexity: O(n).

// ------------   For incase-sensitive letters

let containsDuplicates = (str) => {
    let set = new Set();
    
    //convert str to lowercase
    //Remove this if you want to check for incase-sensitive strings
    str = str.toLowerCase();
    
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

console.log(containsDuplicates("learnersbucket"));
console.log(containsDuplicates("abcdefghijk"));
console.log(containsDuplicates("I Love learnersbucket"));

// true
// false
// true

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

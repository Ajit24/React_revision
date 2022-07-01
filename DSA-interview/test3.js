var input = ["amr", "ram", "dad", "aja", "rama"]

//    out = [[amr, ram][dad, aja, rama]];

for(var i=0; i<input.length; i++){
    for(var j=i; j<input.length; j++){
        checkStringsAnagram(input[i], input[j])
    }
}

function checkStringsAnagram(a, b) {
    var arr1 = [];
    var arr2 = [];
    var main = [];
    let len1 = a.length;
    let len2 = b.length;
    // if(len1 !== len2){
    //    console.log('Invalid Input');
    //    return
    // }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       arr1.push(a);
      arr1.push(b);
    } else { 
        arr2.push(a);
        arr2.push(b);
    }
    console.log(arr1)
 }
 
  
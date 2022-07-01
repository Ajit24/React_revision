var input = ["amr", "ram", "dad", "aja", "rama"]

//    out = [[amr, ram][dad, aja, rama]];

for(var i=0; i<input.length; i++){
    for(var j=i+1; j<input.length; j++){
        //checkStringsAnagram(input,input[i], input[j])
        console.log(input[i], input[j])
    }
}

function checkStringsAnagram(input, a, b) {
    console.log("start",input, a, b)
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
        input.pop(a);
        input.pop(b);
       arr1.push(a);
      arr1.push(b);
    } else {
        input.pop(a);
        input.pop(b) 
        arr2.push(a);
        arr2.push(b);
    }
    console.log(arr2)
 }
 
  
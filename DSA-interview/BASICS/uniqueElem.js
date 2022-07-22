 // unique element  / remove duplicates 

 var array = [3,7,5,3,2,5,2,7,];
 // output = [3,7,5,2]

for(var i=0;i<array.length;i++) {
    for(var j=i+1;j<array.length;j++) {
        if(array[i]===array[j]) {
            array.splice(j,1);
        }
    }
}
console.log(array); // output = [3,7,5,2]
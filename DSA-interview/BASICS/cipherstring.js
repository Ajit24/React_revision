var arr =["ashish","pranav","ajit","rajarsi"]

// out = a4h,p4v,a2t,r5i


var n= arr.length

function string(n,arr){
   var stack=[]
   for(var i=0; i<n; i++){
       var count=0
       for(j=0; j<arr[i].length; j++){
           if((j != 0) && (j != arr[i].length-1)){
               count++
           }
           
       }
       var bag=""
       bag=bag+arr[i][0]+count+arr[i][arr[i].length-1]
       stack.push(bag)
       
   }
  return stack.join(",")
    
    

}

console.log(string(n,arr))
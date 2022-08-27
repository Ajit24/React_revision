// ------------- min in array -------------

function minimumInArray(N,arr){
    //write code here
     var min = arr[0]
    for(var i =0;i< N ;i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }
    console.log(min);
}
minimumInArray(5,[1,2,3,4,5]); // 1
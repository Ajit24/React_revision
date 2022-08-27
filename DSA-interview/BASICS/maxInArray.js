// 5
// 1 2 3 4 5
// out = 5;


function maximumInArray(N,arr){
    //write code here
    
     var max = arr[0]
    for(var i =0;i< N ;i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    //return max;
    console.log(max)
}
(maximumInArray(5,[1,2,3,4,5]));  // 5

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
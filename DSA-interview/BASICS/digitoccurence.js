var arr=[1,2,2,3,4,4,,6,8,8,8,9]
// out = 0 1 2 1 2 0 1 0 3 1 1
var n=arr.length

function digitOccurence(arr,n){
    var obj={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}

    for(var i=0; i<n; i++){
        if(arr[i] in obj){
            obj[arr[i]]++
        }else{
            obj[arr[i]]=1
        }
    }
    var bag=""
    for(var key in obj){
        bag=bag+obj[key]+" "
        
    }
    return bag

}
console.log(digitOccurence(arr,n))
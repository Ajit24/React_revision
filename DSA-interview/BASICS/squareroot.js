var n = 8
// out = 2;


function square(n){
    var start=1
    var end=n
    var ans=0
    while(start<=end){
        var mid=start+(end-start)/2
        if(mid*mid<=n){
            ans=mid
            start=mid+1
        }else{
            end=mid-1
        }
    }

    
    console.log(Math.floor(ans))
}
square(n)
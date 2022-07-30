var str = "life is beautifull"
// out =   efil si llufituaeb

var stack=[]
var arr=str.split(" ")
var bag=""

for(var i=0; i<arr.length; i++){
    var x=arr[i]
    var bag1=""
    for(var j=x.length-1; j>=0; j--){
        bag1=bag1+x[j]
    }
    bag=bag+" "+bag1

}
console.log(bag)
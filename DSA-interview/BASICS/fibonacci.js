 //4 star question

// var n = 5;
// var arr = [1, 1];
// var temp = "";

// function sum(ac,el)
// {
   
//     return ac+el; 
// }

//  temp+=arr[0]
// for (let i = 1; i < n;i++)
// {
//     temp += ", " + arr[1];
   
//     arr.push(arr.reduce(sum))
//     arr.shift()

// }
// console.log(arr); // [5,8]

//console.log(temp); // 1 1 2 3 5;
   

var n = 5;
// 1 1 2 3 5
var temp = "1";
var sum = 0;
var a = 0;
var b = 1;
for (let i = 0; i < n-1;i++)
{
    sum = a + b;
    temp += " " + sum;
    a = b;
    b = sum; 
}
console.log(temp);
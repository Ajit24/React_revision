//        1
//      2 3 2
//    3 4 5 4 3
//  4 5 6 7 6 5 4
//5 6 7 8 9 8 7 6 5

var n = 5;
var count = 0;
for (let i = 1; i <= n; i++) 
{
    var temp = "";
    
    for (let j = 1; j <= (n - i) * 2;j++)
    {
        temp += " ";
    }


    for (let j = 1; j <= i; j++)
    {
        count++;
        temp += count + " ";
        
    }
    for (let j = 1; j < i; j++)
    {
        count--;
        temp += count + " ";
        
    }
    console.log(temp);

}
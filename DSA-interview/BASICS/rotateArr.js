let arr = [2, 5, 8, 6, 10];
let k = 6;
k = k % arr.length;

let temp = [];
//left rotation
// 6,10 2 5 8

for (let i = 0; i < arr.length;i++)
{
    temp[i] = arr[(i + k) % arr.length];
}
console.log(temp);

//right rotation
//6 10 2 5 8 
for (let i = 0; i < arr.length;i++)
{
    temp[i] = arr[(i + arr.length-k) % arr.length];
}
console.log(temp);

// 5 4
//1 2 3 4 5 ----- left roattion

function rotLeft(a, d) {
    // Write your code here
let r = []

  d %= a.length

  for (let i = 0; i < a.length; ++i) {
    r[i] = a[(i + d) % a.length]
  }

  return r
}
console.log(rotLeft([1,2,3,4,5], 4))// 5 1 2 3 4
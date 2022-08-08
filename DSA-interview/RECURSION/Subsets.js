//subsets
//input = "abc";
//output:
// []
// [ 'a' ]
// [ 'a', 'b' ]
// [ 'a', 'b', 'c' ]
// [ 'a', 'c' ]
// [ 'b' ]
// [ 'b', 'c' ]
// [ 'c' ]

var str = "abc";
var arr = str.split("");
// console.log(arr);

var temp = [];

function subsets(arr, temp, k) {
  if (temp.length === 0) {
    //subset will contain empty set too! as empty set is also a set.
    console.log(temp);
  }

  for (let i = k; i < arr.length; i++) {
    temp.push(arr[i]);

    console.log(temp.join(" "));

    subsets(arr, temp, i + 1);

    temp.pop();
  }
}

subsets(arr, temp, 0);
//Print all the permutations in order.
//input = "abc"
//output:
// a b c
// a c b
// b a c
// b c a
// c a b
// c b a

var str = "abc";

var arr = str.split("");
// console.log(arr);

var temp = [];
function permutations(arr, temp) {
  if (temp.length === arr.length) {
    console.log(temp.join(" "));
  }

  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) {
      continue;
    }

    temp.push(arr[i]);

    permutations(arr, temp);

    temp.pop();
  }
}

permutations(arr, temp);
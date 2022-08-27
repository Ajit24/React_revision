// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
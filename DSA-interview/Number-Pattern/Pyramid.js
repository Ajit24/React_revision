//   1
//  234
// 56789

let n = 3;
let count = 1;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // creating numbers
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);
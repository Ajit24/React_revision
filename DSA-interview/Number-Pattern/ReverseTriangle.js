// 12345
// 1234
// 123
// 12
// 1

let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
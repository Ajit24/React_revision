// 54321
// 5432
// 543
// 54
// 5

let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);
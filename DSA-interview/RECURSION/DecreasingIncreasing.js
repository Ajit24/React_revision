var n = 5;
// 5 4 3 2 1 1 2 3 4 5 

function PDI(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  PDI(n - 1);
  console.log(n);
}
PDI(n);